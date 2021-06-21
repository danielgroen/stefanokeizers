<template>
  <div id="contact" class="block">
    <h3 class="block__header">{{ content.title }}</h3>
    <AtomContactItem :items="content.contact" />
    <div class="socials">
      <a :href="content.facebook" target="_blank" class="socials-item"
        ><AtomSvg type="facebook"
      /></a>
      <a :href="content.instagram" target="_blank" class="socials-item"
        ><AtomSvg type="instagram"
      /></a>
      <a :href="content.twitter" target="_blank" class="socials-item"
        ><AtomSvg type="twitter"
      /></a>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api'

// TODO:: props omzetten naar composables
export default defineComponent({
  name: 'OrganismBlockContact',
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

  .socials {
    display: flex;
    gap: $spacing-s;

    &-item {
      display: flex;
      justify-content: center;
      align-items: center;
      width: $spacing-l-2;
      height: $spacing-l-2;
      box-shadow: $box-shadow-icon;
      border-radius: 9999px;
      background-color: $white;
      transition: transform $speed $cubic-bezier, color $speed $cubic-bezier,
        box-shadow $speed $cubic-bezier;

      ::v-deep {
        svg {
          transition: fill $speed $cubic-bezier;
          fill: $black;
        }
      }

      &:hover {
        box-shadow: $box-shadow-icon--hover;
        transform: translateY(-2px);

        ::v-deep {
          svg {
            fill: $red;
          }
        }
      }

      &:active {
        box-shadow: $box-shadow-icon--hover;
        ::v-deep {
          svg {
            fill: $red-dark;
          }
        }
      }

      @include breakpoint($tablet) {
        width: $spacing-l;
        height: $spacing-l;
      }
    }
  }
}
</style>
