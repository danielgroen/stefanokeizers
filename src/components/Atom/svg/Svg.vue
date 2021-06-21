<template>
  <div class="icon" v-html="iconComponent" />
</template>
<script lang="ts">
import { defineComponent, computed } from '@nuxtjs/composition-api'

import arrow from '~/assets/svg/chevron.svg?raw'
import facebook from '~/assets/svg/facebook.svg?raw'
import instagram from '~/assets/svg/instagram.svg?raw'
import twitter from '~/assets/svg/twitter.svg?raw'

export const Icons: any = { arrow, facebook, instagram, twitter }
export default defineComponent({
  name: 'AtomSvg',
  props: {
    type: {
      type: String,
      required: true,
    },
  },
  setup(props) {
    const iconComponent = computed(() => Icons[props.type])

    return {
      iconComponent,
    }
  },
})
</script>

<style lang="scss" scoped>
.icon {
  display: inherit;

  ::v-deep {
    svg {
      width: 20px;
      height: 20px;
    }
  }
}
</style>
