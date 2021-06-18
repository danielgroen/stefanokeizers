<template>
  <div v-if="content" class="container">
    <OrganismBlockTemplates :blocks="content" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api'

import useActiveItem from '~/composables/useActiveItem'
import useFetch from '~/composables/useFetch'

export default defineComponent({
  name: 'Page',
  setup() {
    const { content } = useFetch()
    const { activeItem } = useActiveItem()
    activeItem.value = 'Speeldata'

    return { content }
  },
})
</script>

<style lang="scss">
.container {
  display: block;
}
</style>
