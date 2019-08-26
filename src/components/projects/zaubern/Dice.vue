<template>
  <div
    class="dice"
    @click="$emit('click')"
  >
    {{ $store.state.diceValue }}

    <div class="hint">
      Würfeln!
    </div>
  </div>
</template>

<script>
export default {
  name: 'Dice'
}
</script>

<style lang="stylus" scoped>
.dice
  position relative
  display inline-block
  height 150px
  width 150px
  line-height 1.3
  text-align center
  color rgb(100, 100, 100)
  font-size 100px
  border 3px solid rgb(170, 170, 170)
  border-radius 15px
  cursor pointer
  transition background-color 200ms linear

  &:hover
    background-color rgb(240, 240, 240)

.hint
  position relative
  top -1.2em
  color rgb(170, 170, 170)
  font-size 18px
</style>
