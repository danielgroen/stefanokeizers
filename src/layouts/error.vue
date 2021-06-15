<template>
  <div>
    <h1>You are in layouts/error.vue</h1>
    <h1 v-if="error.statusCode === 404">Page not found</h1>
    <h1 v-else>An error occurred</h1>
    <pre v-if="error.statusCode !== 404">{{ error }}</pre>
    <nuxt-link to="/">Click to visit Home page</nuxt-link>
  </div>
</template>

<script>
export default {
  props: {
    error: {
      type: [Object, Error],
      default: () => {},
    },
  },
}
</script>
