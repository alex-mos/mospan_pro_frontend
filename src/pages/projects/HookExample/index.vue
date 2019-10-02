<template>
  <section>
    x: {{ mouse.x }}
    <br>
    y: {{ mouse.y }}
  </section>
</template>

<script>
import getMousePosition from './getMousePosition'
export default {
  name: 'hookExample',
  data () {
    return {
      mouse: getMousePosition(this)
    }
  }
}
</script>

<style scoped>
section {
  padding: 30px;
  font-size: 30px;
}
</style>
