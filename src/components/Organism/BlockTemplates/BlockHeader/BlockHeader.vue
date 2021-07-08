<template>
  <div id="home" class="block">
    <AtomImage
      class="image"
      src="/img/header-withVideo.jpg"
      alt="Header foto"
    />

    <h1 class="block__title">{{ content.title }}</h1>
    <!-- <h2 class="block__subtitle">{{ content.subtitle }}</h2> -->
    <!-- <iframe class="block__video" :src="content.video" frameborder="0"></iframe> -->

    <div class="introduction">
      <span class="introduction__label">Nieuwe Voorstelling:</span>
      <h2 class="block__subtitle">{{ content.subtitle }}</h2>
    </div>

    <AtomButton class="block__button" :to="content.button.to" icon="chevron">
      {{ content.button.text }}<AtomSvg type="arrow" />
    </AtomButton>
  </div>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api'

// TODO:: props omzetten naar composables
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

  .introduction {
    display: flex;
    flex-direction: column;
    border-left: clamp-calc(2px, 4px) solid $white;
    padding-left: clamp-calc(8px, 16px);

    &__label {
      font-size: clamp-calc(14px, 20px);
      font-style: italic;
      line-height: 0.8rem;
    }

    .block__subtitle {
      line-height: 1.2rem;
      margin-top: clamp-calc(5px, 24px);

      @include breakpoint($tablet) {
        margin-top: clamp-calc(5px, 24px);
        line-height: 3rem;
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
