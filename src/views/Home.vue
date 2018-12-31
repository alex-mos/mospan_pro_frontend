<template>
  <div class="container">
    <div>
      Привет, меня зовут Александр Мосьпан и я
      <ul>
        <li><router-link to="/cv">работаю фронтендером уже шесть лет</router-link></li>
        <li><router-link to="/books">бесплатно раздаю книжки, которые прочитал</router-link></li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'home'
}
</script>

<style lang="stylus" scoped>
  .container
    min-height 70vh
    display flex
    flex-direction column
    justify-content center
    font-size 24px

  ul
    list-style none

    li:before
      margin 0 .3em 0 -1em
      display: inline-block
      content: "–"
</style>
