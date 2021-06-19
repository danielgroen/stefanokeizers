<template>
  <nuxt-link v-if="title" class="button" :to="to.toLowerCase()">{{
    title
  }}</nuxt-link>
</template>
<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api'

export default defineComponent({
  name: 'AtomButton',
  props: {
    title: {
      type: String,
      required: true,
    },
    to: {
      type: String,
      required: true,
    },
  },
  setup() {},
})
</script>

<style lang="scss">
.button {
  //
}
</style>
