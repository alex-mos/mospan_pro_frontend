import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    /* ZAUBERN */
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
    playersPositions: [0, 1],
    activePlayer: 0,
    // activeWord: 'Würfeln!',
    // Цвета иконок игроков
    colors: [
      '#9c27b0',
      '#4caf50',
      '#ff9800',
      '#3f51b5'
    ],
    diceValue: '—'
  },

  getters: {
    // Принимает индекс ячейки, возвращает массив id игроков, которые на ней стоят.
    playersHere: state => cellIndex => {
      let result = []
      state.playersPositions.forEach((position, index) => {
        if (cellIndex === position) {
          result.push(index)
        }
      })
      return result
    }
  },

  mutations: {
    SET_PLAYER_POSITION (state, position) {
      let newPlayersPositions = state.playersPositions.slice()
      newPlayersPositions[state.activePlayer] = position
      state.playersPositions = newPlayersPositions
    },

    SET_ACTIVE_PLAYER (state, activePlayer) {
      state.activePlayer = activePlayer
    },

    SET_DICE_VALUE (state, value) {
      state.diceValue = value
    },

    // SET_ACTIVE_WORD (state) {
    //   state.activeWord = state.words[state.playersPositions[state.activePlayer]]
    // }
  },

  actions: {
    // Подвинуть активного игрока на заданное количество шагов
    movePlayer ({ commit, state }, steps) {
      let currentPosition = state.playersPositions[state.activePlayer]
      currentPosition += steps
      if (currentPosition >= state.words.length) {
        currentPosition -= state.words.length
      }
      commit('SET_PLAYER_POSITION', currentPosition)
    },

    // Передать ход следующему игроку
    setNextActivePlayer ({ commit, state }) {
      let nextActivePlayer = ++state.activePlayer % state.playersPositions.length
      commit('SET_ACTIVE_PLAYER', nextActivePlayer)
    },

    // Сгенерировать новое значение кубика
    rollTheDice ({ commit, state, dispatch }) {
      let newDiceValue = Math.floor(Math.random() * (6 - 1 + 1)) + 1
      commit('SET_DICE_VALUE', newDiceValue)
      dispatch('movePlayer', state.diceValue)
      // commit('SET_ACTIVE_WORD')
      dispatch('setNextActivePlayer')
    }
  }
})
