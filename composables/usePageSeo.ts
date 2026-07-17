export function usePageSeo(page: any) {
  const currentPage = computed(() => unref(page))
  const title = computed(() => currentPage.value?.seoTitle || currentPage.value?.title || '')
  const description = computed(() => currentPage.value?.description || currentPage.value?.intro || '')
  const socialTitle = computed(() => currentPage.value?.title || currentPage.value?.seoTitle || title.value)

  useSeoMeta({
    title: () => title.value,
    description: () => description.value,
    ogTitle: () => socialTitle.value,
    ogDescription: () => description.value,
    twitterTitle: () => socialTitle.value,
    twitterDescription: () => description.value
  })
}
