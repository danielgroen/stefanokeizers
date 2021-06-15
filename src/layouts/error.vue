<template>
  <div></div>
</template>

<script>
import { useRouter, defineComponent } from '@nuxtjs/composition-api'

export default defineComponent({
  setup() {
    const router = useRouter()

    router.push('/')
  },
})
</script>
