import { ref, useContext } from '@nuxtjs/composition-api'

const activeItem = ref()

export default function useFetch() {
  const { route } = useContext()

  const updateActiveItem = (newItem: string) => {
    activeItem.value = newItem
  }

  const initActiveItem = () => {
    activeItem.value = route.value?.hash?.replace('#', '') || 'Home'
  }

  return { activeItem, updateActiveItem, initActiveItem }
}
