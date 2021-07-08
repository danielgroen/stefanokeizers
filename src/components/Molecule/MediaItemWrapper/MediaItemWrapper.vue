<template>
  <div v-if="items" class="media-items">
    <div :class="['media-items__inner', { closed: closed }]">
      <div class="section">
        <template v-for="index in getItemsLength">
          <!-- TODO:: MATH.ROUND UP TO EVEN NUMBER INSTEAD OF HARDCODED 6 -->
          <template v-if="index <= 6" class="section">
            <AtomMediaItem
              :key="`media-item--${index}`"
              class="media-item"
              :type="items[index - 1].type"
              :title="items[index - 1].text"
              :link="items[index - 1].url"
            />
          </template>
        </template>
      </div>
      <div class="section">
        <template v-for="index in getItemsLength">
          <template v-if="index > 6" class="section">
            <AtomMediaItem
              :key="`media-item--${index}`"
              class="media-item"
              :type="items[index - 1].type"
              :title="items[index - 1].text"
              :link="items[index - 1].url"
            />
          </template>
        </template>
      </div>
    </div>
    <AtomButton
      class="button"
      type="small"
      @click.native="closed = !closed"
    ></AtomButton>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, computed } from '@nuxtjs/composition-api'
export default defineComponent({
  name: 'MoleculeMediaItemWrapper',
  props: {
    items: {
      type: Array,
      required: true,
    },
  },
  setup(props) {
    const closed = ref(true)
    const getItemsLength = computed(() => {
      return props.items.length
    })
    return { closed, getItemsLength }
  },
})
</script>

<style lang="scss" scoped>
.media-items {
  $gap: 8px;

  width: 100%;

  &__inner {
    .section {
      display: flex;
      flex-direction: column;
      max-height: 100%;
      gap: $gap 0;
      margin-bottom: $gap;

      @include breakpoint($tablet) {
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: space-between;
        gap: $spacing-s 32px;
        margin-bottom: $spacing-s;

        .media-item {
          flex: 1 0 calc(50% - #{$spacing-xl});
        }
      }
    }
    &.closed {
      .section:last-child {
        display: none;
      }
    }
  }
}
</style>
