<template>
  <div
    ref="book"
    class="book"
  >
    <div
      :class="[isOpen ? 'is-open' : '', 'button']"
    >
      <div
        v-if="!isOrdered && !isPending"
        class="button__back-side"
      >
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
              target="_blank"
            >
              Подробнее о книге
            </a>
          </div>
        </div>
        <div class="form-wrapper">
          <form
            @submit.prevent
          >
            <label
              :for="`telegram-${id}`"
            >
              Ваш логин в телеграме:
            </label>
            <input
              :id="`telegram-${id}`"
              ref="telegramLogin"
              v-model="telegramLogin"
              type="text"
              @keydown.esc="cancel()"
              @keydown.enter="submit(id)"
            >
          </form>
          <div class="buttons">
            <Button
              @click="cancel()"
            >
              отмена
            </Button>
            <Button
              primary
              type="submit"
              :disabled="!telegramLogin"
              @click="submit(id)"
            >
              заказать
            </Button>
          </div>
        </div>
      </div>

      <div
        v-if="isPending"
        class="button__back-side button__back-side_loader"
      >
        <div class="img-wrapper">
          <img
            src="/img/loader.svg"
            alt="loader"
          >
        </div>
      </div>

      <div
        v-if="!isOrdered"
        class="button__front-side"
        @click="flipToBack()"
      >
        <img
          :src="coverURL"
          class="img-responsive"
        >
      </div>

      <div
        v-else
        class="button__front-side button__front-side_ordered"
      >
        <img
          :src="coverURL"
          class="img-responsive"
        >
        <div
          class="banner"
        >
          обещана
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Button from '@/components/ui/Button'
import VanillaTilt from 'vanilla-tilt'
import http from '@/plugins/http'

export default {
  name: 'Book',
  components: {
    Button
  },
  props: {
    id: {
      type: Number,
      required: true,
      default: 0
    },
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
    },
    isDemo: {
      type: Boolean
    }
  },

  data: function () {
    return {
      isOpen: false,
      telegramLogin: '',
      isPending: false,
      isOrdered: false
    }
  },

  mounted () {
    VanillaTilt.init(this.$refs.book, {
      glare: true,
      'max-glare': 0.5,
      gyroscope: false
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
      this.$refs.telegramLogin.focus()
    },

    cancel () {
      this.isOpen = false
      this.telegramLogin = ''
      this.tiltEnable()
    },

    submit (id) {
      if (!this.telegramLogin) {
        return
      }

      // демо-заказ
      if (this.isDemo) {
        this.demoSubmit()
        return
      }

      this.isPending = true
      let formData = new FormData()
      formData.append('telegram', this.telegramLogin)
      http.post(`order/${id}`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      })
        .then(() => {
          this.isOrdered = true
          this.isOpen = false
          this.isPending = false
        })
        .catch((err) => {
          this.$toasted.error(err)
        })
        .finally(() => {
          this.isOpen = false
          this.isPending = false
        })
    },

    demoSubmit () {
      this.isPending = true
      setTimeout(() => {
        this.isOrdered = true
        this.isOpen = false
        this.isPending = false
      }, 3000)
    }
  }
}
</script>

<style lang="stylus" scoped>
.book
  margin-bottom 30px
  max-width 500px

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

  .form-wrapper
    position absolute
    width calc(100% - 40px)
    bottom 20px
    right 20px

    label
      line-height 3

    input[type=text]
      margin 0 0 15px 0
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
    box-shadow 0 0 20px 0 rgba(0, 0, 0, .1)
    transition: background 0.15s ease, line-height 0.8s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    backface-visibility: hidden

    &_ordered
      cursor default
      border 1px solid rgb(190, 190, 190)

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
        background-color rgb(255, 209, 126)
        transform skewY(-12deg)

  &__back-side
    position absolute
    width 100%
    height 100%
    padding 20px 20px
    color #222
    text-align center
    overflow hidden
    background-color rgb(250, 250, 250)
    border 1px solid rgb(100, 100, 100)
    box-shadow 0 0 20px 0 rgba(0, 0, 0, .1)
    transform rotateX(180deg)
    transition box-shadow 0.8s ease
    backface-visibility: hidden

    &_loader
      display flex
      flex-direction column
      justify-content center
      background-color rgb(235, 235, 235)

      .img-wrapper
        width 100%
        text-align center

        img
          width 60px

  &.is-open
    transform rotateX(180deg)

    & .button__front-side
      pointer-events none
</style>
