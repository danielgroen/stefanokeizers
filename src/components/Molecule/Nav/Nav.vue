<template>
  <div class="nav">
    <AtomNavItem title="Home" :active="active" to="/" />
    <AtomNavItem title="Media" :active="active" to="/#Media" />
    <AtomNavItem title="Contact" :active="active" to="/#Contact" />
    <AtomNavItem title="Speeldata" :active="active" to="/speeldata/" />
  </div>
</template>
<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api'

export default defineComponent({
  name: 'MoleculeNav',
  props: {
    active: {
      type: String,
      required: true,
    },
  },
  setup() {},
})
</script>

<style lang="scss">
.nav {
  display: flex;
  justify-content: center;
  padding: $spacing-m 0;
  background-color: $red;
  margin-bottom: 12px;

  @include breakpoint($tablet) {
    margin-bottom: 32px;
  }
}
</style>
