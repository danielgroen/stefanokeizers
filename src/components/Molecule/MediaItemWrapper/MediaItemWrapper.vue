<template>
  <div v-if="items" class="media-items">
    <AtomMediaItem
      v-for="(item, index) in items"
      :key="`media-item--${index}`"
      class="media-item"
      :type="item.type"
      :title="item.text"
      :link="item.url"
    />
    <AtomButton type="small">Meer media<AtomSvg type="arrowDown" /></AtomButton>
  </div>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api'
export default defineComponent({
  name: 'MoleculeMediaItemWrapper',
  props: {
    items: {
      type: Array,
      required: true,
    },
  },
})
</script>

<style lang="scss" scoped>
.media-items {
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 8px 0;
}

@include breakpoint($tablet) {
  .media-items {
    flex-direction: row;
    flex-wrap: wrap;
    gap: $spacing-s 32px;
  }
  .media-item {
    flex: 0 0 calc(50% - #{$spacing-xl});
  }
}
</style>
