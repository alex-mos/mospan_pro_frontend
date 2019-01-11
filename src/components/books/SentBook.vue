<template>
  <div class="book">
    <div class="front-side">
      <img :src="coverURL" class="img-responsive">
      <div class="banner">
        sent
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SentBook',
  props: {
    coverURL: {
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

  .front-side
    width 100%
    cursor default
    border 1px solid rgb(190, 190, 190)
    box-shadow 0 20px 70px -10px rgba(51, 51, 51, 0.3), 0 50px 100px 0 rgba(51, 51, 51, 0.1)

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
      background-color rgb(238, 241, 119)
      transform skewY(-12deg)
</style>
