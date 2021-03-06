import { useContext, ref, useRouter } from '@nuxtjs/composition-api'

export default function useFetch() {
  const { $content, route } = useContext()
  const router = useRouter()

  const content = ref()

  const getJson = async () => {
    const curPath: string =
      route.value.params.pathMatch || route.value.name || ''

    content.value = await $content(curPath)
      .fetch()
      .catch(() => router.push('/'))
  }
  getJson()

  return { content, getJson }
}
