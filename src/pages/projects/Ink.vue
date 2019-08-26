<template>
  <div>
    <div class="container">
      <div
        ref="textarea"
        class="textarea"
        contenteditable="true"
        @keydown="onKeyDown"
        @keyup="onKeyUp"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: 'Ink',
  data () {
    return {
      text: '',
      fontWeight: 10,
      isKeyUp: true,
      previousKey: null,
      letters: /^[a-zA-Z0-9a-яё\-_+=!@#;%:?*()\[\]\<\>\/\`\\]{1}$/
    }
  },
  mounted () {
    this.$refs.textarea.focus()
  },
  methods: {
    onKeyDown (e) {
      if (this.letters.test(e.key)) {
        console.log('this.letters.test(e.key)')
        console.log(this.letters.test(e.key))
        e.preventDefault()
        if (this.isKeyUp || e.key !== this.previousKey) {
          this.text += `<span style="font-weight: ${this.fontWeight}">${e.key}</span>`
          this.$refs.textarea.innerHTML = this.text
          // this.$refs.textarea.value = this.text
          this.$refs.textarea.selectionStart = this.$refs.textarea.selectionEnd = this.$refs.textarea.innerHTML.length
          this.previousKey = e.key
          this.isKeyUp = false
          this.placeCaretAtEnd(this.$refs.textarea)
        } else {
          this.fontWeight += 10
          console.log(this.fontWeight)
        }
        console.log(e)
      }
    },
    onKeyUp () {
      this.isKeyUp = true
      this.fontWeight = 10
    },

    // поставить курсор в конец редактируемого элемента
    // https://stackoverflow.com/a/4238971/1538729
    placeCaretAtEnd (el) {
      el.focus()
      if (typeof window.getSelection !== 'undefined' && typeof document.createRange !== 'undefined') {
        let range = document.createRange()
        range.selectNodeContents(el)
        range.collapse(false)
        let sel = window.getSelection()
        sel.removeAllRanges()
        sel.addRange(range)
      } else if (typeof document.body.createTextRange !== 'undefined') {
        let textRange = document.body.createTextRange()
        textRange.moveToElementText(el)
        textRange.collapse(false)
        textRange.select()
      }
    }
  }
}
</script>

<style scoped>
.textarea {
  padding-top: 50px;
  width: 100%;
  min-height: 400px;
  font-size: 24px;
  outline: none;
  background-color: transparent;
  border: none;
}
</style>
