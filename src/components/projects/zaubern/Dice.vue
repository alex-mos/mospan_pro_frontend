<template>
  <div class="dice">
    {{ $store.state.diceValue }}
  </div>
</template>

<script>
export default {
  name: 'dice'
}
</script>

<style lang="stylus" scoped>
.dice
  height 150px
  width 150px
  text-align center
  font-size 100px
  border 3px solid rgb(170, 170, 170)
  border-radius 15px
</style>
