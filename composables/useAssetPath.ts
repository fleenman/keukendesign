export function useAssetPath() {
  const config = useRuntimeConfig()

  return (path: string) => {
    if (!path || /^(?:https?:|data:|blob:|mailto:|tel:)/.test(path)) return path

    const baseURL = config.app.baseURL || '/'
    if (baseURL === '/' || path.startsWith(baseURL)) return path

    const normalizedBase = baseURL.endsWith('/') ? baseURL : `${baseURL}/`
    const normalizedPath = path.startsWith('/') ? path.slice(1) : path

    return `${normalizedBase}${normalizedPath}`
  }
}
