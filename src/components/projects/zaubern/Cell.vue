<template>
  <div class="cell">
    <slot/>

    <div
      v-if="players.length">
      <span
        v-for="player in players"
        :key="player">
        <PlayerIcon
          :id="player"/>
      </span>
    </div>
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
    players: {
      type: Array
    }
  }
}
</script>

<style lang="stylus" scoped>
.cell
  position relative
  margin 20px 20px 0 20px
  padding 30px
  font-size 25px
  background white
  border 3px solid rgb(170, 170, 170)
  border-radius 15px

  &:before
    display block
    position absolute
    left -40px
    top 49%
    content ''
    border-top 3px solid rgb(170, 170, 170)
    width calc(100% + 80px)
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
</style>
