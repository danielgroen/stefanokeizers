<template>
  <div>
    <div
      v-for="(item, index) in items"
      :key="`contact-section-${index}`"
      class="contact-section"
    >
      <h4 class="contact-section__title">{{ item.title }}</h4>
      <span class="contact-section__item text">{{ item.text }}</span>
      <a class="contact-section__item mail" :href="`mailto:${item.email}`">{{
        item.email
      }}</a>
      <a class="contact-section__item phone" :href="`tel:${item.phone}`">{{
        item.phone
      }}</a>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api'

export default defineComponent({
  name: 'AtomButton',
  props: {
    items: {
      type: Array,
      required: true,
    },
  },
  setup() {},
})
</script>

<style lang="scss" scoped>
.contact-section {
  display: flex;
  flex-direction: column;
  margin-bottom: clamp-calc(24px, 32px);

  &__title {
    font-weight: 900;
    font-size: clamp-calc(16px, 18px);
    margin-bottom: $spacing-xxs;
  }
  &__item {
    color: $white;
    font-size: clamp-calc(14px, 16px);
    line-height: 1.5;

    &.mail,
    &.phone {
      transition: opacity $speed $cubic-bezier;

      &:hover {
        opacity: 0.8;
      }

      &:active {
        opacity: 0.6;
      }
    }
  }
}
</style>
