<template>
  <div>
    <field />

    <div class="text-center">
      <div class="info">
        Nächster —
        <player-icon :id="$store.state.activePlayer" />
      </div>

      <dice
        @click="$store.dispatch('rollTheDice')"
      />
    </div>
  </div>
</template>

<script>
import Field from '@/components/projects/zaubern/Field.vue'
import PlayerIcon from '@/components/projects/zaubern/PlayerIcon.vue'
import Dice from '@/components/projects/zaubern/Dice.vue'

export default {
  name: 'Zaubern',

  components: {
    Field,
    PlayerIcon,
    Dice
  }
}
</script>

<style lang="stylus" scoped>
.info
  margin-bottom 10px
  font-size 18px
</style>
