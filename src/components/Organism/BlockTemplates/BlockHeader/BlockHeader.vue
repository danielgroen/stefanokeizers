<template>
  <div class="block">
    <h1 class="block__title">{{ content.title }}</h1>
    <h2 class="block__subtitle">{{ content.subtitle }}</h2>
    <AtomButton
      class="block__button"
      :title="content.button.text"
      :to="content.button.to"
      icon="chevron"
    />
    <iframe :src="content.video" frameborder="0"></iframe>
    <div>{{ content }}</div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api'

// TODO:: props global maken
export default defineComponent({
  props: {
    content: {
      type: Object,
      required: true,
    },
  },
})
</script>

<style lang="scss">
//
</style>
