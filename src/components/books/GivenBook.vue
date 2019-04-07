<template>
  <div class="book">
    <div class="front-side">
      <img :src="coverURL" class="img-responsive">
      <div
        v-if="status === 'reserved'"
        class="banner banner_reserved">
        обещана
      </div>

      <div
        v-if="status === 'sent'"
        class="banner banner_sent">
        отправлена
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'GivenBook',
  props: {
    coverURL: {
      type: String,
      required: true,
      default: ''
    },
    status: {
      type: String,
      required: true,
      default: ''
    }
  }
}
</script>

<style lang="stylus" scoped>
.book
  position relative
  margin-bottom 30px
  max-width 500px
  min-height 362px

  .front-side
    width 100%
    cursor default
    border 1px solid rgb(190, 190, 190)
    box-shadow 0 0 20px 0 rgba(0, 0, 0, .1)

    img
      opacity 0.3

    .banner
      position absolute
      top 150px
      left -1px
      width calc(100% + 1px)
      padding 20px 0
      text-align center
      color rgb(150, 150, 150)
      font-size 42px
      transform skewY(-12deg)

      &_reserved
        background-color rgb(255, 209, 126)

      &_sent
        background-color rgb(238, 241, 119)
</style>
