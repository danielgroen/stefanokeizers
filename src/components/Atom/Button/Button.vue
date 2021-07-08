<template>
  <nuxt-link
    v-if="to"
    :class="['button', `button--${type}`]"
    :to="to.toLowerCase()"
  >
    <slot />
  </nuxt-link>
  <button
    v-else
    :class="['button', `button--${type}`, { active: active }]"
    @click="active = !active"
  >
    <slot />
  </button>
</template>
<script lang="ts">
import { defineComponent, ref } from '@nuxtjs/composition-api'
export const Types = ['normal', 'small']
export default defineComponent({
  name: 'AtomButton',
  props: {
    to: {
      type: String,
      default: null,
    },
    type: {
      type: String,
      default: 'normal',
      validator: (type: string) => !!Types.includes(type),
    },
  },
  setup() {
    const active = ref(false)

    return { active }
  },
})
</script>

<style lang="scss" scoped>
.button {
  display: inline-flex;
  align-items: center;
  box-shadow: $box-shadow-button;
  border-radius: 2px;
  font-weight: 600;
  text-decoration: none;
  transition: transform $speed $cubic-bezier, color $speed $cubic-bezier,
    box-shadow $speed $cubic-bezier;

  ::v-deep {
    svg {
      margin-left: $spacing-s;
    }
  }

  &:hover {
    box-shadow: $box-shadow-button--hover;
    transform: translateY(-2px);
  }

  &--small {
    background-color: $black;
    color: $white;
    font-size: rem(18px);
    padding: $spacing-s $spacing-m;

    ::v-deep {
      svg {
        box-sizing: border-box;
        padding: 2px;
        path {
          fill: $white;
        }
      }
    }

    &:hover {
      background-color: #333;
    }

    &:active {
      background-color: #444;
    }
  }

  &--normal {
    background-color: $white;
    color: $black;
    font-size: clamp-calc(16px, 24px);
    padding: 12px $spacing-m;

    ::v-deep {
      svg {
        box-shadow: 0 0 8px rgba($red, 0.4);
        border-radius: 9999px;
        background-color: $white;
        path {
          transition: fill $speed $cubic-bezier;
        }
      }
    }

    &:hover {
      color: $red;

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
}
</style>
