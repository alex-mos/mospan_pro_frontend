<template>
  <nav>
    <div class="container">
      <ul>
        <li>
          <router-link
            class="main"
            :to="{ name: 'home' }"
            exact
          >
            mospan.pro
          </router-link>
        </li>
        <li>
          <router-link
            :to="{ name: 'cv' }"
          >
            Резюме
          </router-link>
        </li>
        <li>
          <router-link
            :to="{ name: 'books' }"
          >
            Раздача книг
          </router-link>
        </li>
        <!--<li>
          <router-link
            :to="{ name: 'projects' }">
            Проекты
          </router-link>
        </li>-->
      </ul>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'Navigation'
}
</script>

<style lang="stylus" scoped>
nav
  position relative
  bottom 3px
  border-bottom 3px solid rgb(170, 170, 170)
  background-color rgb(235, 235, 235)

.container
  padding 0

ul
  display flex
  margin 0
  padding 0
  list-style none
  font-family 'IBM Plex Sans', sans-serif
  font-size 20px

  @media (max-width 768px)
    flex-direction column

  li
    a
      display block
      padding 11px 17px
      color rgb(90, 90, 90)
      text-decoration none
      border-right 3px solid rgb(235, 235, 235)
      border-left 3px solid rgb(235, 235, 235)

      &:hover
        color black
        text-decoration none

      &.main
        padding 8px 17px 8px 0
        font-size 24px
        text-transform uppercase

        @media (max-width 768px)
          padding 11px 17px

  .router-link-active
    position relative
    top 3px
    padding 8px 17px 14px 17px
    pointer-events none
    border-right 3px solid rgb(170, 170, 170)
    border-left 3px solid rgb(170, 170, 170)
    background-color rgb(250, 250, 250)

    @media (max-width 768px)
      padding 11px 17px
      border none
      border-top 3px solid rgb(170, 170, 170)
      border-bottom 3px solid rgb(170, 170, 170)
</style>
