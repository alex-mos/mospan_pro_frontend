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

<style lang="stylus">
body
  font-family 'IBM Plex Sans', sans-serif
  color rgb(75, 75, 75)
  background-color rgb(250, 250, 250)
</style>
