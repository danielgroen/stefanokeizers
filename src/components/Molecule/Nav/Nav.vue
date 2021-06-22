<template>
  <div class="nav">
    <AtomNavItem title="Home" to="/#home" />
    <AtomNavItem title="Media" to="/#Media" />
    <AtomNavItem title="Contact" to="/#Contact" />
    <AtomNavItem title="Speeldata" to="/speeldata/" />
  </div>
</template>
<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api'

export default defineComponent({
  name: 'MoleculeNav',
  setup() {},
})
</script>

<style lang="scss">
.nav {
  display: grid;
  display: flex;
  justify-content: center;
  gap: $spacing-l;
  padding: 32px 0;

  @include breakpoint($tablet) {
    padding: 40px 0;
  }
}
</style>
