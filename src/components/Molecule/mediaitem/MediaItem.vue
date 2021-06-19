<template>
  <div class="media-item"></div>
</template>
<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api'

export default defineComponent({
  name: 'AtomMediaItem',
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
.media-item {
  //
}
</style>
