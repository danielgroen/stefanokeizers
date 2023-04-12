<template>
  <div id="home" class="block">
    <AtomImage
      class="image"
      src="/img/header-withVideo.jpg"
      alt="Header foto"
    />

    <h1 class="block__title">{{ content.title }}</h1>
    <h2 class="block__subtitle">{{ content.subtitle }}</h2>

    <h3 class="block__outbound">
      Ga allemaal naar <a href="https://donnyronny.nl">DONNYRONNY.NL</a> voor de
      toekomst!
    </h3>

    <!-- <iframe class="block__video" :src="content.video" frameborder="0"></iframe> -->
  </div>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api'

export default defineComponent({
  name: 'OrganismBlockHeader',
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

  &__title {
    margin-bottom: clamp-calc(24px, 32px);
  }

  .image {
    @include breakpoint(0, $tablet) {
      ::v-deep {
        img {
          transform: scale(1.4) translateY(-25px) translateX(-5px);
        }
      }
    }
    @include breakpoint($tablet, $desktop) {
      ::v-deep {
        img {
          transform: scale(1.4) translateY(-40px) translateX(-5px);
        }
      }
    }
  }

  @include breakpoint($tablet) {
    .image {
      padding-left: 40px;
    }
  }

  &__button {
    margin: 32px 0 $spacing-m;

    @include breakpoint($tablet) {
      margin: 32px 0 $spacing-l-2;
    }
  }

  &__video {
    width: clamp(311px, 50vw, 445px);
    height: calc(clamp(311px, 50vw, 445px) / 16 * 9);
  }
}
</style>
