<template>
  <div
    ref="book"
    class="book">
    <div
      :class="[isOpen ? 'is-open' : '', 'button']">
      <div class="button__back-side">
        <div class="info">
          <div class="author">
            {{ author }}
          </div>
          <div class="title">
            «{{ title }}»
          </div>
          <div class="edition">
            {{ edition }}
          </div>
          <div class="more">
            <a
              :href="goodreadsLink"
              target="_blank">
              Подробнее о книге
            </a>
          </div>
        </div>
        <form
          @submit.prevent="submit()">
          <label for="telegram">Ваш логин в телеграме:</label>
          <input
            v-model="telegramLogin"
            id="telegram"
            type="text">
          <div class="buttons">
            <button
              class="button__inner-button button__inner-button--no"
              @click="cancel()">
              отмена
            </button>
            <button
              class="button__inner-button button__inner-button--yes"
              type="submit"
              :disabled="!telegramLogin">
              заказать
            </button>
          </div>
        </form>
      </div>

      <div
        class="button__front-side"
        @click="flipToBack()">
        <img :src="coverURL" class="img-responsive">
      </div>
    </div>

  </div>
</template>

<script>
import VanillaTilt from 'vanilla-tilt'

export default {
  name: 'Book',
  props: {
    title: {
      type: String,
      required: true,
      default: ''
    },
    author: {
      type: String,
      required: true,
      default: ''
    },
    edition: {
      type: String,
      required: true,
      default: ''
    },
    goodreadsLink: {
      type: String,
      required: true,
      default: ''
    },
    status: {
      type: String,
      required: true,
      default: ''
    },
    coverURL: {
      type: String,
      required: true,
      default: ''
    }
  },

  data: function () {
    return {
      isOpen: false,
      telegramLogin: '',
      isPending: false
    }
  },

  mounted () {
    VanillaTilt.init(this.$refs.book, {
      reverse: true,
      scale: 1.1,
      glare: true,
      'max-glare': 0.5
    })
  },

  methods: {
    tiltDisable () {
      this.$refs.book.vanillaTilt.settings.max = 0
      this.$refs.book.vanillaTilt.settings['max-glare'] = 0
    },
    
    tiltEnable () {
      this.$refs.book.vanillaTilt.settings.max = 35
      this.$refs.book.vanillaTilt.settings['max-glare'] = 0.5
    },
  
    flipToBack () {
      this.isOpen = true
      this.tiltDisable()
    },
    
    cancel () {
      this.isOpen = false
      this.telegramLogin = ''
      this.tiltEnable()
    },
    
    submit () {

    }
  }
}
</script>

<style lang="stylus" scoped>
.book
  margin-bottom 20px
  
  .info
    margin-bottom 55px
    
    .author
      line-height 1.5
      font-size 16px
      
    .title
      margin-bottom 15px
      font-size 16px
      font-weight bolder
      
    .edition
      font-size 12px
      line-height 2
  
  form
    position absolute
    width calc(100% - 40px)
    bottom 30px
    right 20px
    
    label
      line-height 3
    
    input[type=text]
      margin-bottom 15px
      padding 3px 7px
      width 100%
      
    .buttons
      text-align right

.button
  display block
  position relative
  transition width 0.8s cubic-bezier(0.230, 1.000, 0.320, 1.000),
    height 0.8s cubic-bezier(0.230, 1.000, 0.320, 1.000),
    transform 0.8s cubic-bezier(0.175, 0.885, 0.320, 1.275)
  transform-style preserve-3d
  transform-origin 50% 50%

  &__front-side
    width 100%
    cursor pointer
    border 1px solid rgb(100, 100, 100)
    box-shadow 0 20px 70px -10px rgba(51, 51, 51, 0.3), 0 50px 100px 0 rgba(51, 51, 51, 0.1)
    backface-visibility: hidden
    transition: background 0.15s ease, line-height 0.8s cubic-bezier(0.175, 0.885, 0.32, 1.275)

  &__back-side
    position absolute
    width 100%
    height 100%
    padding 20px 20px
    color #222
    text-align center
    overflow hidden
    border 1px solid rgb(100, 100, 100)
    box-shadow 0 20px 70px -10px rgba(51, 51, 51, 0.3), 0 50px 100px 0 rgba(51, 51, 51, 0.1)
    transform translateZ(-2px) rotateX(180deg)
    transition box-shadow 0.8s ease

  &.is-open
    transform rotateX(180deg)

    & .button__front-side
      pointer-events none

  // выделить в отдельный компонент
  &__inner-button
    padding 5px 12px
    margin 0 5px
    background-color transparent
    border 0
    border-radius 2px
    font-size 16px
    cursor pointer
    transition background 0.15s ease

    &:focus
      outline 0

    &:disabled
      cursor not-allowed
      background-color lighten(#2196F3, 60%)
      
      &:hover
        background-color lighten(#2196F3, 60%)
      
    &--yes
      background-color #2196F3
      color #fff

      &:hover
        background-color darken(#2196F3, 20%)

    &--no
      color #2196F3

      &:hover
        background-color #ddd
</style>
