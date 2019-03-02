<template>
  <div class="wrapper">

    <cell
      v-for="(word, index) in words"
      :key="index"
      :players="playersHere(index)">
      {{ word }}
    </cell>

  </div>

</template>

<script>
import Cell from '@/components/projects/zaubern/Cell'

export default {
  name: 'field',

  components: {
    Cell
  },

  data: function () {
    return {
      words: [
        'stehlen',
        'schnappen',
        'beißen',
        'zerknittern',
        'pflegen',
        'schnüffeln',
        'umfangen',
        'füttern',
        'lernen'
      ],

      // Массив с позициями игроков на клетках.
      // Игрок с индексом 0 — преподаватель.
      playerPositions: [
        0,
        0
      ]
    }
  },

  methods: {
    /**
     * Принимает индекс ячейки, возвращает массив id игроков, которые на ней стоят.
     * @param {number} cellIndex
     * @return {Array}
     */
    playersHere (cellIndex) {
      let result = []
      this.playerPositions.forEach((position, index) => {
        if (cellIndex === position) {
          result.push(index)
        }
      })
      return result
    }
  }
}
</script>

<style lang="stylus" scoped>
  .wrapper
    display flex
    flex-wrap wrap
    justify-content space-around
</style>
