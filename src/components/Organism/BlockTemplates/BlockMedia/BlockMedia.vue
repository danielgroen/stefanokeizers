<template>
  <div id="media" class="block">
    <AtomImage
      class="image"
      srcset="/img/media-desktop.jpg"
      src="/img/media-mobile.jpg"
      alt="Header foto"
    />
    <h3 class="block__header">{{ content.title }}</h3>
    <MoleculeMediaItemWrapper :items="content.media_items" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api'

// TODO:: props omzetten naar composables
export default defineComponent({
  name: 'OrganismBlockMedia',
  props: {
    content: {
      type: Object,
      required: true,
    },
  },
})
</script>

<style lang="scss" scoped>
.block {
  @extend %block-base;

  .image {
    @include breakpoint(0, $tablet) {
      ::v-deep {
        img {
          transform: scale(1.8) translateY(60px) translateX(0);
        }
      }
    }
  }
}
</style>
