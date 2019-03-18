<template>
  <div class="container">
    <h2>Выберите набор карточек</h2>

    <div class="word-sets">
      <ul
        v-for="(set, index) in wordSets"
        :key="index"
        :class="['word-set', {'active': index === $store.state.activeWordsetIndex}]"
        @click="$store.dispatch('selectWordSet', index)">
        <li
          v-for="word in set"
          :key="word">
          <span>{{ word }}</span>&thinsp;
        </li>
      </ul>
    </div>

    <div
      v-if="$store.state.activeWordsetIndex !== null"
      class="link-wrapper">
      Отправьте ссылку ученикам:

      <div class="link">
        http://localhost:8080/projects/zaubern/ZhN37ie4Gkg5J3
      </div>

      <router-link
        :to="{name: 'projects.zaubern', params: { id: 'ZhN37ie4Gkg5J3' }}">
        Начать игру
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ZaubernSetup',

  computed: {
    wordSets () {
      return this.$store.state.wordSets
    }
  }
}
</script>

<style lang="stylus" scoped>
.word-sets
  ul
    display block
    padding 12px
    list-style none
    background-color white
    border 3px solid rgb(170, 170, 170)
    margin-bottom 10px
    cursor pointer
    border-radius 5px

    &.active
      li
        font-weight bold

    li
      display inline-block
      font-size 18px

      &:last-child
        span
          &:after
            content none

      span
        &:after
          content ', '

.link-wrapper
  font-size 18px
</style>
