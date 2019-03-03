<template>
  <div>
    <field />

    Сейчас ходит
    <player-icon
      :id="$store.state.activePlayer" />

    <dice />

    <Button
      primary
      @click="$store.dispatch('rollTheDice')">
      Roll the dice
    </Button>
  </div>
</template>

<script>
import Field from '@/components/projects/zaubern/Field.vue'
import PlayerIcon from '@/components/projects/zaubern/PlayerIcon.vue'
import Dice from '@/components/projects/zaubern/Dice.vue'
import Button from '@/components/ui/Button.vue'

export default {
  name: 'zaubern',

  components: {
    Field,
    PlayerIcon,
    Dice,
    Button
  }
}
</script>

<style lang="stylus" scoped>

</style>
