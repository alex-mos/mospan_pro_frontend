<template>
  <nav>
    <div class="container">
      <ul>
        <li>
          <router-link
            class="main"
            :to="{ name: 'home' }">
            mospan.pro
          </router-link>
        </li>
        <li>
          <router-link
            :to="{ name: 'cv' }">
            CV
          </router-link>
        </li>
        <li>
          <router-link
            :to="{ name: 'books' }">
            books
          </router-link>
        </li>
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
  background-color rgb(230, 230, 230)

ul
  display flex
  margin 0
  padding 0
  list-style none
  font-size 20px

  a
    display block
    padding 11px 20px
    color rgb(90, 90, 90)

    &:hover
      color black
      text-decoration none

    &.main
      padding 8px 20px 8px 0
      font-size 24px
      text-transform uppercase

  .router-link-exact-active
    pointer-events none
    background rgb(247, 247, 247)
</style>
