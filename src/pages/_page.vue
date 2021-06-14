<template>
  <div v-if="content" class="container">
    <div>
      <h1>{{ content.title }}</h1>
      <AtomNavItem />
      <div class="links">
        <a
          href="https://nuxtjs.org/"
          target="_blank"
          rel="noopener noreferrer"
          class="button--green"
        >
          Documentation
        </a>
        <a
          href="https://github.com/nuxt/nuxt.js"
          target="_blank"
          rel="noopener noreferrer"
          class="button--grey"
        >
          GitHub
        </a>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api'

import useFetch from '~/composables/useFetch'

export default defineComponent({
  name: 'Page',
  setup() {
    const { content, getJson } = useFetch()

    return { content, getJson }
  },
})
</script>

<style lang="scss">
.container {
  display: block;
}
</style>
