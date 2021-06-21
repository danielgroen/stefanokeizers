<template>
  <div id="home" class="block">
    <h1 class="block__title">{{ content.title }}</h1>
    <h2 class="block__subtitle">{{ content.subtitle }}</h2>
    <AtomButton
      class="block__button"
      :title="content.button.text"
      :to="content.button.to"
      icon="chevron"
    />
    <iframe class="block__video" :src="content.video" frameborder="0"></iframe>
  </div>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api'

// TODO:: props omzetten naar composables
export default defineComponent({
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
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  &__title {
    font-weight: 700;
    font-size: clamp-calc(24px, 56px);
    line-height: 1.25;
    text-transform: uppercase;
  }
  &__subtitle {
    font-size: clamp-calc(24px, 56px);
    line-height: 1.25;
    text-transform: uppercase;
  }

  &__video {
    // width: 100%;
    width: clamp(311px, 50vw, 445px);
    height: calc(clamp(311px, 50vw, 445px) / 16 * 9);
  }
}
</style>
