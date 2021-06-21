<template>
  <nuxt-link
    v-if="title && activeItem"
    :class="[
      'nav-item',
      { 'nav-item--active': title.toLowerCase() === activeItem.toLowerCase() },
    ]"
    :to="to.toLowerCase()"
    @click.native="updateActiveItem(title)"
    >{{ title }}</nuxt-link
  >
</template>
<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api'
import useActiveItem from '~/composables/useActiveItem'

export default defineComponent({
  name: 'AtomNavItem',
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
  setup() {
    const { activeItem, updateActiveItem } = useActiveItem()

    return { activeItem, updateActiveItem }
  },
})
</script>

<style lang="scss">
.nav-item {
  position: relative;
  color: $gray;
  font-weight: 600;
  text-transform: uppercase;
  text-decoration: none;
  transition: color $speed $cubic-bezier;

  &::after {
    content: '';
    position: absolute;
    bottom: -2px;
    left: 50%;
    width: 0;
    height: 2px;
    background-color: $red;
    transition: left $speed $cubic-bezier, width $speed $cubic-bezier;
  }

  &:hover {
    color: $gray-dark;
  }

  &--active {
    color: $black;

    &::after {
      left: 0;
      width: calc(100% + 2px);
    }
  }
}
</style>
