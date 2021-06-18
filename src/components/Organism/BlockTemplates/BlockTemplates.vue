<template>
  <div class="blocks">
    <template v-for="(block, index) in blocks.content">
      <!-- v-if="block.block === 'head'" -->
      <OrganismBlockHeader
        :key="`block-${index}`"
        class="block"
        :content="block"
      />
    </template>
  </div>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api'

export default defineComponent({
  props: {
    blocks: {
      type: Object,
      required: true,
    },
  },
})
</script>

<style lang="scss">
.blocks {
  display: grid;
  gap: $spacing-l 0;
  margin-bottom: $spacing-l;

  .block {
    background: $red;
  }
}
</style>
