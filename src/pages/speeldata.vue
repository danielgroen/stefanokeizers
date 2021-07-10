<template>
  <div v-if="content" class="container">
    <MoleculeNav active="speeldata" />
    <OrganismBlockTemplates :blocks="content" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api'

import useFetch from '~/composables/useFetch'

export default defineComponent({
  name: 'PageSpeeldata',
  setup() {
    const { content } = useFetch()

    return { content }
  },
})
</script>

<style lang="scss">
.container {
  display: block;
}
</style>
