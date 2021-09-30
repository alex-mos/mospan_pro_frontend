<template>
  <div class="container">
    <div
      class="textarea"
      ref="textarea"
    >
      <span>&nbsp;</span>
    </div>

    <!--<div>fontWeight: {{ fontWeight }}</div>-->

    <!-- фейковый инпут, на который наводится фокус при загрузке страницы. Нужен чтобы отлавливать события нажатия клавиш-->
    <input
      class="fakeInput"
      ref="fakeInput"
      @keydown="onKeyDown"
    />
  </div>
</template>

<script>

const MIN_FONT_WEIGHT = 1
const MAX_FONT_WEIGHT = 900

export default {
  name: 'Ink',
  data () {
    return {
      textarea: null,
      fontWeight: MIN_FONT_WEIGHT,
      lastChar: null,
      acceptedLetters: /^[a-zA-Z0-9a-яё\-_+=!@#;%:?*()[\]<>/`\\\s,.]{1}$/
    }
  },
  mounted () {
    this.textarea = this.$refs.textarea

    setInterval(() => {
      this.$refs.fakeInput.focus()
      this.incrementFontWeight()
    }, 20)
  },
  methods: {
    // увеличить жирность последнего символа
    incrementFontWeight () {
      if (this.fontWeight <= MAX_FONT_WEIGHT && this.lastChar) {
        this.lastChar.style.fontWeight = this.fontWeight
        this.fontWeight += 20
      }
    },
    // обработчик нажатия кнопки
    onKeyDown (e) {
      if (this.acceptedLetters.test(e.key)) {
        let char = document.createElement('span')
        char.textContent = e.key
        char.style.fontWeight = MIN_FONT_WEIGHT
        this.textarea.append(char)
        this.lastChar = this.textarea.lastChild
        this.fontWeight = MIN_FONT_WEIGHT
      } else if (e.key === 'Backspace') {
        this.deletePreviousChar()
      } else {
        e.preventDefault()
      }
    },
    // удаление предыдущего символа
    deletePreviousChar () {
      if (Object.keys(this.textarea.children).length > 1) {
        this.textarea.removeChild(this.lastChar)
        this.lastChar = this.textarea.lastChild
      }
    }
  }
}
</script>

<style lang="stylus">
.textarea
  padding-top: 50px
  width: 100%
  min-height: 400px
  font-family "Inter"
  font-size: 40px
  outline: none
  background-color: transparent
  border: none
  white-space pre-wrap
  text-indent -1ex

  span:last-child
    position relative

    &:after
      display: block
      position: absolute
      right: -7px
      bottom: 2px
      width: 3px
      height: 1em
      background-color: #4b4b4b
      content: ''

.fakeInput
  position: absolute
  top: -1000px
</style>
