<template>
  <div class="blocks">
    <template v-for="(block, index) in blocks.content">
      <OrganismBlockHeader
        v-if="block.block === 'head'"
        :key="`block-header-${index}`"
        class="block"
        :content="block"
      />
      <OrganismBlockMedia
        v-if="block.block === 'media'"
        :key="`block-media-${index}`"
        class="block"
        :content="block"
      />
      <OrganismBlockContact
        v-if="block.block === 'contact'"
        :key="`block-contact-${index}`"
        class="block"
        :content="block"
      />
      <OrganismBlockCalendar
        v-if="block.block === 'calendar'"
        :key="`block-calendar-${index}`"
        class="block"
        :content="block"
      />
    </template>
  </div>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api'

export default defineComponent({
  name: 'OrganismBlockTemplates',
  props: {
    blocks: {
      type: Object,
      required: true,
    },
  },
})
</script>

<style lang="scss" scoped>
.blocks {
  display: grid;
  gap: 32px 0;

  @include breakpoint($tablet) {
    margin-bottom: $spacing-xxl;
  }
  .block {
    color: $white;
    padding: clamp-calc(48px, 80px) $spacing-s;

    @include breakpoint($tablet) {
      padding-left: clamp-calc(#{$spacing-s}, 153px);
      padding-right: clamp-calc(#{$spacing-s}, 153px);
    }
  }
}
</style>
