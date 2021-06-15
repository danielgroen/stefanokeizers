<template>
  <div class="blocks">
    <template v-for="(block, index) in blocks.content">
      <OrganismBlockHeader
        v-if="block.block === 'head'"
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
      type: Array,
      required: true,
    },
  },
})
</script>

<style lang="scss">
.blocks {
  .block {
    background: $red;
  }
}
</style>
