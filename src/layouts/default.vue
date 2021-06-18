<template>
  <main class="layout layout--default">
    <MoleculeNav />
    <Nuxt />
  </main>
</template>

<style lang="scss">
.layout {
  margin: 0 auto;

  @include breakpoint($tablet) {
    max-width: calc(100% - #{$spacing-l * 2});
  }

  @include breakpoint($desktop) {
    max-width: calc(100% - #{$spacing-xxl * 2});
  }
  @include breakpoint(#{$max-width + ($spacing-xxl * 2)}) {
    max-width: $max-width;
  }
}
</style>
