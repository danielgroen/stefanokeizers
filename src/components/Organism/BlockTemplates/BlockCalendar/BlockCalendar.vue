<template>
  <div class="block">
    <div class="heading">
      <h1 class="block__title">{{ content.title }}</h1>
      <h2 class="block__subtitle">{{ content.subtitle }}</h2>
      <h3 class="block__header">{{ content.header }}</h3>
      <nuxt-img
        class="img"
        src="/img/speeldata.jpg"
        alt="speeldata"
        quality="80"
        format="webp"
      />
    </div>
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
  background-color: $red;

  .heading {
    position: relative;
    width: 100%;
  }
  .img {
    position: absolute;
    top: calc(clamp(48px, 6.4102564103vw, 80px) * -1);
    right: 0;
    z-index: -1;
    height: 100%;
  }

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
