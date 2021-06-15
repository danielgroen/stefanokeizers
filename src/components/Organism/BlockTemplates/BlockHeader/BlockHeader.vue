<template>
  <div>{{ content }}</div>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api'

// TODO:: props global maken
export default defineComponent({
  props: {
    content: {
      type: Array,
      required: true,
    },
  },
})
</script>

<style lang="scss">
//
</style>
