<template>
  <div class="block">
    <h1 class="block__title">{{ content.title }}</h1>
    <h2 class="block__subtitle">{{ content.subtitle }}</h2>
    <h3 class="block__header">{{ content.header }}</h3>
    <iframe
      class="block__iframe"
      :src="content.iframe"
      frameborder="0"
    ></iframe>
  </div>
</template>

<script>
import { defineComponent } from '@nuxtjs/composition-api'
// TODO:: props omzetten naar composables
export default defineComponent({
  name: 'OrganismBlockHeader',
  props: {
    content: {
      type: Object,
      required: true,
    },
  },
  setup() {},
})
</script>

<style lang="scss" scoped>
.block {
  @extend %block-base;

  height: calc(100vh - 53%);

  &__header {
    margin-top: $spacing-l-2;
  }
  &__iframe {
    width: 100%;
    height: 100%;
    background-color: $white;
  }
}
</style>
