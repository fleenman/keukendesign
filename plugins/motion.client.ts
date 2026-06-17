export default defineNuxtPlugin((nuxtApp) => {
  document.documentElement.classList.add('js')
  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
  const transitionDocument = document as Document & {
    startViewTransition?: (callback: () => void | Promise<void>) => void
  }

  const reveal = () => {
    const elements = Array.from(document.querySelectorAll<HTMLElement>('[data-reveal]'))

    if (reducedMotion || !('IntersectionObserver' in window)) {
      for (const element of elements) element.classList.add('is-visible')
      return
    }

    const observer = new IntersectionObserver((entries) => {
      for (const entry of entries) {
        if (!entry.isIntersecting) continue
        entry.target.classList.add('is-visible')
        observer.unobserve(entry.target)
      }
    }, { rootMargin: '0px 0px -12% 0px', threshold: 0.12 })

    for (const element of elements) observer.observe(element)
  }

  const enableViewTransitions = () => {
    if (reducedMotion || !transitionDocument.startViewTransition) return

    document.addEventListener('click', (event) => {
      const link = (event.target as Element | null)?.closest?.('a[href]') as HTMLAnchorElement | null
      if (!link) return
      if (event.defaultPrevented || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return
      if (link.target || link.hasAttribute('download')) return

      const url = new URL(link.href)
      if (url.origin !== window.location.origin) return
      if (url.pathname === window.location.pathname && url.hash) return

      event.preventDefault()
      transitionDocument.startViewTransition(() => navigateTo(`${url.pathname}${url.search}${url.hash}`))
    })
  }

  nuxtApp.hook('page:finish', () => requestAnimationFrame(reveal))
  requestAnimationFrame(reveal)
  enableViewTransitions()
})
