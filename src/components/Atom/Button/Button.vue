<template>
  <nuxt-link v-if="to" class="button" :to="to.toLowerCase()">
    <slot />
  </nuxt-link>
</template>
<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api'

export default defineComponent({
  name: 'AtomButton',
  props: {
    to: {
      type: String,
      required: true,
    },
  },
  setup() {},
})
</script>

<style lang="scss" scoped>
.button {
  display: inline-flex;
  align-items: center;
  box-shadow: $box-shadow-button;
  border-radius: 2px;
  background-color: $white;
  color: $black;
  font-weight: 600;
  font-size: clamp-calc(16px, 24px);
  text-decoration: none;
  transition: transform $speed $cubic-bezier, color $speed $cubic-bezier,
    box-shadow $speed $cubic-bezier;
  padding: 12px $spacing-m;

  ::v-deep {
    svg {
      box-shadow: 0 0 8px rgba($red, 0.4);
      border-radius: 9999px;
      background-color: $white;
      margin-left: $spacing-s;
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
