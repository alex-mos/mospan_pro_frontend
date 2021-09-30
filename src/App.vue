<template>
  <div id="app">
    <component :is="layout">
      <router-view />
    </component>
  </div>
</template>

<script>
export default {
  computed: {
    layout () {
      return (this.$route.meta.layout || 'default') + '-layout'
    }
  }
}
</script>

<style>
body {
  font-family: 'IBM Plex Sans', sans-serif;
  color: #4b4b4b;
  background-color: #fafafa;
}
</style>
