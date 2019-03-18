<template>
  <div
    :class="['cell', { 'cell_with-player': players.length}]">
    <div class="word">
      <slot/>
    </div>

    <transition name="move">
    <div
      v-if="players.length"
      class="players">

      <span
        v-for="(player, index) in players"
        :key="index">
        <PlayerIcon :id="player"/>
      </span>
    </div>
    </transition>
  </div>
</template>

<script>
import PlayerIcon from '@/components/projects/zaubern/PlayerIcon'

export default {
  name: 'cell',

  components: {
    PlayerIcon
  },

  props: {
    id: {
      type: Number
    }
  },

  computed: {
    players () {
      return this.$store.getters.playersHere(this.id)
    }
  }
}
</script>

<style lang="stylus" scoped>
.cell
  position relative
  margin 20px 20px 0 20px
  padding 30px
  height 100px
  font-size 25px
  background white
  border 3px solid rgb(170, 170, 170)
  border-radius 15px

  &:before
    display block
    position absolute
    left -240px
    top 49%
    content ''
    border-top 3px solid rgb(170, 170, 170)
    width calc(100% + 580px)
    z-index -10

  &:after
    display block
    position absolute
    right -47px
    top calc(49% - 6px)
    content ''
    width 0
    height 0
    border-left 20px solid rgb(170, 170, 170)
    border-bottom 8px solid transparent
    border-right 0 solid transparent
    border-top 7px solid transparent

  .word
    transition transform 200ms linear .5s

  .players
    position relative
    top -20px

  &_with-player
    .word
      transform translateY(-20px)

.move-enter-active
  animation coming .5s
  animation-delay 1s
  opacity 0

.move-leave-active
  animation going .5s
  animation-delay 0

@keyframes coming
  from
    transform translateX(-100px)
    opacity 0
  to
    transform translateX(0)
    opacity 1

@keyframes going
  from
    transform translateX(0)
  to
    transform translateX(100px)
    opacity 0
</style>
