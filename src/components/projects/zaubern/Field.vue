<template>
  <div class="wrapper">
    <cell
      v-for="(word, index) in $store.getters.activeWordset"
      :id="index"
      :key="index"
    >
      {{ word }}
    </cell>
  </div>
</template>

<script>
import Cell from '@/components/projects/zaubern/Cell'

export default {
  name: 'Field',

  components: {
    Cell
  }
}
</script>

<style lang="stylus" scoped>
  .wrapper
    display flex
    flex-wrap wrap
    justify-content space-around
    margin-bottom 30px
    overflow hidden
</style>
