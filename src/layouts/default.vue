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

  @include breakpoint(#{$max-width + $spacing-xl}) {
    max-width: $max-width;
  }
}
</style>
