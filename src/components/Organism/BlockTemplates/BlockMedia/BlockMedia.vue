<template>
  <div id="media" class="block">
    <AtomImage
      class="image"
      srcset="/img/media-desktop.jpg"
      src="/img/media-mobile.jpg"
      alt="Header foto"
    />

    <h3 class="block__header">{{ content.title }}</h3>
    <div class="media-items">
      <AtomMediaItem
        v-for="(item, index) in content.media_items"
        :key="`media-item--${index}`"
        class="media-item"
        :title="item.text"
        :type="item.text"
        :link="item.url"
      />
    </div>
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

  @include breakpoint(0, #{$tablet}) {
    .image {
      ::v-deep {
        img {
          transform: scale(1.3) translateY(-5px) translateX(-20px);
        }
      }
    }
  }

  .media-items {
    display: flex;
    flex-direction: column;
    width: 100%;
    gap: 8px 0;
  }
  @include breakpoint($tablet) {
    .media-items {
      flex-direction: row;
      flex-wrap: wrap;
      gap: $spacing-s 32px;
    }
    .media-item {
      flex: 0 0 calc(50% - #{$spacing-xl});
    }
  }
}
</style>
