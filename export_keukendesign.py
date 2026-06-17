#!/usr/bin/env python3
import html
import json
import os
import re
import ssl
import sys
import time
from html.parser import HTMLParser
from pathlib import Path
from urllib.parse import parse_qsl, quote, unquote, urljoin, urlparse, urlunparse
from urllib.request import Request, urlopen
from xml.etree import ElementTree

BASE = "https://keukendesign.nl"
OUT = Path("source")
MEDIA = OUT / "media"
USER_AGENT = "Codex content export for keukendesign.nl"
SSL_CONTEXT = ssl._create_unverified_context()

SITEMAP_URL = f"{BASE}/sitemap.xml"
PAGES_API = f"{BASE}/wp-json/wp/v2/pages?per_page=100&page={{page}}&_fields=link,slug,title,content,excerpt,modified,featured_media"
MEDIA_API = f"{BASE}/wp-json/wp/v2/media?per_page=100&page={{page}}&_fields=id,source_url,media_type,mime_type,title,alt_text,caption,description"


def fetch(url, *, binary=False):
    request = Request(url, headers={"User-Agent": USER_AGENT, "Accept": "*/*"})
    with urlopen(request, timeout=30, context=SSL_CONTEXT) as response:
        data = response.read()
        if binary:
            return data
        charset = response.headers.get_content_charset() or "utf-8"
        return data.decode(charset, errors="replace")


def canonical_page_url(url):
    parsed = urlparse(url)
    host = parsed.netloc.replace("www.", "")
    scheme = "https"
    path = parsed.path or "/"
    if not path.endswith("/"):
        path += "/"
    return urlunparse((scheme, host, path, "", "", ""))


def slugify_filename(url):
    parsed = urlparse(url)
    name = unquote(Path(parsed.path).name)
    if not name:
        name = "file"
    name = re.sub(r"[^A-Za-z0-9._-]+", "-", name).strip("-")
    return name or "file"


def is_internal_media(url):
    parsed = urlparse(urljoin(BASE, url))
    if parsed.netloc not in {"keukendesign.nl", "www.keukendesign.nl"}:
        return False
    return "/wp/media/" in parsed.path or "/wp-content/uploads/" in parsed.path


def normalize_media_url(url):
    parsed = urlparse(urljoin(BASE, html.unescape(url)))
    return urlunparse(("https", "keukendesign.nl", quote(unquote(parsed.path)), "", parsed.query, ""))


def collect_urls_from_sitemap():
    raw = fetch(SITEMAP_URL)
    root = ElementTree.fromstring(raw)
    ns = {"sm": "http://www.sitemaps.org/schemas/sitemap/0.9"}
    return [canonical_page_url(node.text.strip()) for node in root.findall(".//sm:loc", ns) if node.text]


def collect_rest_pages():
    pages = []
    page_no = 1
    while True:
        try:
            raw = fetch(PAGES_API.format(page=page_no))
        except Exception as exc:
            if page_no == 1:
                raise
            print(f"REST pages stopped at page {page_no}: {exc}", file=sys.stderr)
            break
        batch = json.loads(raw)
        if not batch:
            break
        pages.extend(batch)
        if len(batch) < 100:
            break
        page_no += 1
    return pages


def collect_rest_media():
    media = []
    page_no = 1
    while True:
        try:
            raw = fetch(MEDIA_API.format(page=page_no))
        except Exception as exc:
            if page_no == 1:
                print(f"REST media unavailable: {exc}", file=sys.stderr)
            break
        batch = json.loads(raw)
        if not batch:
            break
        media.extend(batch)
        if len(batch) < 100:
            break
        page_no += 1
    return media


def path_for_page(url):
    parsed = urlparse(url)
    parts = [p for p in parsed.path.split("/") if p]
    if not parts:
        return OUT / "index.md"
    return OUT.joinpath(*parts, "index.md")


def frontmatter(title, source_url, modified):
    lines = [
        "---",
        f'title: "{title.replace(chr(34), chr(92) + chr(34))}"',
        f"source_url: {source_url}",
    ]
    if modified:
        lines.append(f"modified: {modified}")
    lines.append("---")
    return "\n".join(lines) + "\n\n"


class MarkdownConverter(HTMLParser):
    block_tags = {
        "div", "section", "article", "header", "footer", "main", "p", "pre", "blockquote",
        "ul", "ol", "li", "table", "tr", "td", "th", "figure", "figcaption",
    }

    def __init__(self, media_map, current_md):
        super().__init__(convert_charrefs=False)
        self.media_map = media_map
        self.current_md = current_md
        self.out = []
        self.href_stack = []
        self.list_stack = []
        self.skip_depth = 0
        self.pre_depth = 0

    def media_ref(self, url):
        normalized = normalize_media_url(url)
        local = self.media_map.get(normalized)
        if not local:
            return html.unescape(url)
        return os.path.relpath(local, self.current_md.parent)

    def newline(self, count=1):
        text = "".join(self.out)
        existing = len(text) - len(text.rstrip("\n"))
        for _ in range(max(0, count - existing)):
            self.out.append("\n")

    def handle_starttag(self, tag, attrs):
        attrs = dict(attrs)
        if tag in {"script", "style", "noscript", "svg", "iframe"}:
            self.skip_depth += 1
            return
        if self.skip_depth:
            return
        if tag in self.block_tags:
            self.newline(2 if tag in {"p", "div", "section", "article", "pre"} else 1)
        if tag in {"h1", "h2", "h3", "h4", "h5", "h6"}:
            self.newline(2)
            self.out.append("#" * int(tag[1]) + " ")
        elif tag == "br":
            self.out.append("\n")
        elif tag in {"strong", "b"}:
            if self.out and self.out[-1] and not self.out[-1].endswith((" ", "\n", "*")):
                self.out.append(" ")
            self.out.append("**")
        elif tag == "em":
            if self.out and self.out[-1] and not self.out[-1].endswith((" ", "\n", "*")):
                self.out.append(" ")
            self.out.append("*")
        elif tag == "a":
            self.href_stack.append(attrs.get("href", ""))
        elif tag == "img":
            src = attrs.get("src") or attrs.get("data-src") or attrs.get("data-lazy-src")
            if src:
                alt = html.unescape(attrs.get("alt", "")).strip()
                self.newline(2)
                self.out.append(f"![{alt}]({self.media_ref(src)})")
                self.newline(2)
        elif tag == "ul":
            self.list_stack.append("ul")
        elif tag == "ol":
            self.list_stack.append("ol")
        elif tag == "li":
            self.newline(1)
            marker = "1." if self.list_stack and self.list_stack[-1] == "ol" else "-"
            self.out.append(f"{marker} ")
        elif tag == "pre":
            self.pre_depth += 1
            self.newline(2)
        elif tag == "blockquote":
            self.newline(2)
            self.out.append("> ")

    def handle_endtag(self, tag):
        if tag in {"script", "style", "noscript", "svg", "iframe"} and self.skip_depth:
            self.skip_depth -= 1
            return
        if self.skip_depth:
            return
        if tag in {"strong", "b"}:
            self.out.append("**")
            self.out.append(" ")
        elif tag == "em":
            self.out.append("*")
            self.out.append(" ")
        elif tag == "a":
            href = self.href_stack.pop() if self.href_stack else ""
            if href:
                if is_internal_media(href):
                    self.out.append(f"({self.media_ref(href)})")
                elif href.startswith("javascript:"):
                    pass
                else:
                    self.out.append(f"({html.unescape(href)})")
        elif tag in {"h1", "h2", "h3", "h4", "h5", "h6", "p", "div", "section", "article", "li", "blockquote"}:
            self.newline(2 if tag != "li" else 1)
        elif tag in {"ul", "ol"} and self.list_stack:
            self.list_stack.pop()
            self.newline(2)
        elif tag == "pre" and self.pre_depth:
            self.pre_depth -= 1
            self.newline(2)

    def handle_data(self, data):
        if self.skip_depth:
            return
        text = html.unescape(data)
        if not self.pre_depth:
            text = re.sub(r"\s+", " ", text)
        if not text.strip() and not self.pre_depth:
            return
        if self.href_stack:
            href = self.href_stack[-1]
            if href and not is_internal_media(href) and not href.startswith("javascript:"):
                self.out.append("[")
                self.out.append(text.strip())
                self.out.append("]")
            else:
                self.out.append(text.strip())
            return
        self.out.append(text)

    def handle_entityref(self, name):
        self.handle_data(f"&{name};")

    def handle_charref(self, name):
        self.handle_data(f"&#{name};")

    def markdown(self):
        text = "".join(self.out)
        text = re.sub(r"[ \t]+\n", "\n", text)
        text = re.sub(r"\n{3,}", "\n\n", text)
        text = re.sub(r"\*\*\[([^\]]+)\]\*\*\(([^)]+)\)", r"[**\1**](\2)", text)
        text = re.sub(r"\[([^\]]+)\]\*\*\(([^)]+)\)", r"[**\1**](\2)", text)
        text = re.sub(r"\*\*\[([^\]]+)\]\(([^)]+)\)\*\*", r"[**\1**](\2)", text)
        text = re.sub(r"^(#{1,6})(?=\S)", r"\1 ", text, flags=re.M)
        text = re.sub(r"\[\s*([^\]]+?)\s*\]\(([^)]+)\)", r"[\1](\2)", text)
        text = re.sub(r"(?<=[.!?])(?=\[?\*\*)", " ", text)
        text = re.sub(r"(?<=\))(?=[A-Za-zÀ-ÿ])", " ", text)
        text = re.sub(r"\*\*\s+|\s+\*\*", "**", text)
        text = re.sub(r"\*\*\[([^\]]+)\]\*\*\(([^)]+)\)", r"[**\1**](\2)", text)
        text = re.sub(r"\*\*\[([^\]]+)\]\(([^)]+)\)\*\*", r"[**\1**](\2)", text)
        return text.strip() + "\n"


def preprocess_content(raw):
    raw = html.unescape(raw)
    raw = re.sub(
        r'<a([^>]*class="[^"]*\brsImg\b[^"]*"[^>]*)href="([^"]+)"([^>]*)>(.*?)</a>',
        lambda m: f'<img src="{html.escape(m.group(2))}" alt="{html.escape(re.sub("<[^>]+>", "", m.group(4)).strip())}">',
        raw,
        flags=re.I | re.S,
    )
    raw = re.sub(r"<style\b.*?</style>", "", raw, flags=re.I | re.S)
    raw = re.sub(r"<script\b.*?</script>", "", raw, flags=re.I | re.S)
    return raw


def extract_media_urls(raw):
    raw = html.unescape(raw)
    urls = set()
    for match in re.finditer(r"""(?:href|src|data-src|data-lazy-src)=["']([^"']+)["']""", raw, flags=re.I):
        url = match.group(1)
        if is_internal_media(url):
            urls.add(normalize_media_url(url))
    for match in re.finditer(r"https?://(?:www\.)?keukendesign\.nl/[^\s\"'<>),]+", raw):
        url = match.group(0)
        if is_internal_media(url):
            urls.add(normalize_media_url(url))
    return urls


def download_media(urls):
    MEDIA.mkdir(parents=True, exist_ok=True)
    media_map = {}
    used = set()
    for url in sorted(urls):
        parsed = urlparse(url)
        base_name = slugify_filename(url)
        if not Path(base_name).suffix:
            base_name += ".bin"
        name = base_name
        stem, suffix = os.path.splitext(base_name)
        counter = 2
        while name in used:
            name = f"{stem}-{counter}{suffix}"
            counter += 1
        used.add(name)
        target = MEDIA / name
        if target.exists():
            media_map[url] = target
            print(f"media cached {name}")
            continue
        try:
            target.write_bytes(fetch(url, binary=True))
            media_map[url] = target
            print(f"media {name}")
            time.sleep(0.05)
        except Exception as exc:
            print(f"failed media {url}: {exc}", file=sys.stderr)
    return media_map


def main():
    sitemap_urls = collect_urls_from_sitemap()
    rest_pages = collect_rest_pages()
    rest_media = collect_rest_media()

    by_url = {}
    for page in rest_pages:
        by_url[canonical_page_url(page["link"])] = page
    for url in sitemap_urls:
        by_url.setdefault(url, None)

    all_media_urls = set()
    for page in by_url.values():
        if not page:
            continue
        content = page.get("content", {}).get("rendered", "")
        excerpt = page.get("excerpt", {}).get("rendered", "")
        all_media_urls.update(extract_media_urls(content))
        all_media_urls.update(extract_media_urls(excerpt))
    for item in rest_media:
        src = item.get("source_url")
        if src and is_internal_media(src):
            all_media_urls.add(normalize_media_url(src))

    media_map = download_media(all_media_urls)

    OUT.mkdir(exist_ok=True)
    written = []
    for url in sorted(by_url):
        page = by_url[url]
        if page:
            title = html.unescape(re.sub("<[^>]+>", "", page["title"]["rendered"])).strip() or url
            modified = page.get("modified")
            content = preprocess_content(page.get("content", {}).get("rendered", ""))
            md_path = path_for_page(url)
            converter = MarkdownConverter(media_map, md_path)
            converter.feed(content)
            body = converter.markdown()
        else:
            title = url.rstrip("/").split("/")[-1] or "Home"
            modified = ""
            body = "_Geen WordPress REST-content gevonden voor deze sitemap-URL._\n"
            md_path = path_for_page(url)
        md_path.parent.mkdir(parents=True, exist_ok=True)
        md_path.write_text(frontmatter(title, url, modified) + f"# {title}\n\n" + body, encoding="utf-8")
        written.append((url, md_path))

    index_lines = [
        "---",
        'title: "Content export"',
        f"source_url: {BASE}/",
        "---",
        "",
        "# Content export",
        "",
        "Export van de publieke WordPress-pagina's van keukendesign.nl.",
        "",
        "## Pagina's",
        "",
    ]
    for url, path in written:
        rel = path.relative_to(OUT)
        index_lines.append(f"- [{url}]({rel.as_posix()})")
    index_lines.extend(["", "## Media", ""])
    for local in sorted(media_map.values()):
        index_lines.append(f"- [media/{local.name}](media/{local.name})")
    (OUT / "_index.md").write_text("\n".join(index_lines) + "\n", encoding="utf-8")

    print(f"written pages: {len(written)}")
    print(f"downloaded media: {len(media_map)}")


if __name__ == "__main__":
    main()
