import { useContext, ref, useRouter } from '@nuxtjs/composition-api'

export default function useFetch() {
  const { $content, route } = useContext()
  const router = useRouter()

  const content = ref()

  const getJson = async () => {
    const curPath = route.value.params.pathMatch || route.value.name || 'index'
    console.log(route.value, curPath)
    content.value = await $content(curPath)
      .fetch()
      .catch(() => router.push('/'))
  }
  getJson()

  return { content, getJson }
}
