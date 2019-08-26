<template>
  <div class="container">
    <div>
      Привет, меня зовут Александр Мосьпан и я
      <ul>
        <li>
          <router-link to="/cv">
            работаю фронтендером уже шесть лет
          </router-link>
        </li>
        <li>
          <router-link to="/books">
            бесплатно раздаю книжки, которые прочитал
          </router-link>
        </li>
        <!--<li><router-link to="/projects">делаю веб-приложения для себя и на заказ</router-link></li>-->
        <!--<li><router-link to="/timeline">смотрю, читаю и слушаю</router-link></li>-->
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Home'
}
</script>

<style lang="stylus" scoped>
  .container
    min-height 70vh
    display flex
    flex-direction column
    justify-content center
    font-family 'PT Serif Caption', serif
    font-size 26px

    @media (max-width 768px)
      font-size 18px

  ul
    list-style none

    li:before
      display inline-block
      margin 0 .3em 0 -1em
      content "–"
</style>
