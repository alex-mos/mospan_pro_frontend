<template>
  <div class="wrapper">

    <cell
      v-for="(word, index) in $store.state.words"
      :key="index"
      :id="index">
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
  }
}
</script>

<style lang="stylus" scoped>
  .wrapper
    display flex
    flex-wrap wrap
    justify-content space-around
    margin-bottom 30px
</style>
