<template>
  <a
    v-if="active && title"
    :class="[
      'nav-item',
      { 'nav-item--active': active.toLowerCase() === title.toLowerCase() },
    ]"
    :href="to ? to.toLowerCase() : ''"
    >{{ title }}
  </a>
</template>
<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api'

export default defineComponent({
  name: 'AtomNavItem',
  props: {
    title: {
      type: String,
      required: true,
    },
    active: {
      type: String,
      default: '',
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
.nav-item {
  position: relative;
  color: $white;
  font-weight: 600;
  font-size: clamp-calc(16px, 20px);
  text-transform: uppercase;
  text-decoration: none;
  opacity: 0.9;
  transition: opacity $speed $cubic-bezier;

  &::after {
    content: '';
    position: absolute;
    bottom: -2px;
    left: 50%;
    width: 0;
    height: 2px;
    background-color: $white;
    transition: left $speed $cubic-bezier, width $speed $cubic-bezier;
  }

  &:hover {
    opacity: 1;
  }

  &--active {
    opacity: 1;

    &:first-child,
    &:last-child {
      &::after {
        left: 0;
        width: calc(100% + 2px);
      }
    }
  }
}
</style>
