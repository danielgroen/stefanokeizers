<template>
  <a class="media-item" target="_blank" :href="link">
    <span class="media-item__type">{{ type }}</span>
    <span class="media-item__title">{{ title }}</span>
    <AtomSvg type="arrow" />
  </a>
</template>
<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api'

export default defineComponent({
  name: 'AtomMediaItem',
  props: {
    type: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    link: {
      type: String,
      required: true,
    },
  },
  setup() {},
})
</script>

<style lang="scss" scoped>
.media-item {
  position: relative;
  display: flex;
  flex-direction: column;
  box-shadow: $box-shadow-button;
  border-radius: 2px;
  background-color: $white;
  color: $black;
  font-weight: 600;
  text-decoration: none;
  transition: transform $speed $cubic-bezier, color $speed $cubic-bezier,
    box-shadow $speed $cubic-bezier;
  padding: $spacing-s;

  &__type {
    color: $gray;
    font-weight: 400;
    font-size: clamp-calc(12px, 14px);
    margin-bottom: 2px;
    line-height: 1.28;
    text-transform: uppercase;
  }

  &__title {
    font-size: clamp-calc(16px, 18px);
    line-height: 1.27;
    padding-right: 32px;
  }

  ::v-deep {
    svg {
      position: absolute;
      top: 50%;
      right: $spacing-s;
      box-shadow: 0 0 8px rgba($red, 0.4);
      border-radius: 9999px;
      background-color: $white;
      transform: translateY(-50%);

      path {
        transition: fill $speed $cubic-bezier;
      }
    }
  }

  &:hover {
    box-shadow: $box-shadow-button--hover;
    color: $red;
    transform: translateY(-2px);

    ::v-deep {
      svg path {
        fill: $red;
      }
    }
  }

  &:active {
    color: $red-dark;

    ::v-deep {
      svg path {
        box-shadow: 0 0 8px rgba($red-dark, 0.4);
        fill: $red-dark;
      }
    }
  }
}
</style>
