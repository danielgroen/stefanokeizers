<template>
  <picture class="background-image">
    <source v-if="srcset" :srcset="srcset" media="(min-width: 752px)" />
    <nuxt-img class="img" :src="src" :alt="alt" quality="80" format="webp" />
  </picture>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api'

export default defineComponent({
  name: 'AtomImage',
  props: {
    src: {
      type: String,
      required: true,
    },
    srcset: {
      type: String,
      default: null,
    },
    alt: {
      type: String,
      default: 'Afbeelding',
    },
  },
  setup() {},
})
</script>

<style lang="scss" scoped>
.background-image {
  position: absolute;
  top: 0;
  left: 0;
  z-index: -1;
  width: 100%;
  height: 100%;
  background-color: $red;

  .img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
    margin: auto;
  }
}
</style>
