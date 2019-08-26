<template>
  <button
    :class="{ primary }"
    :type="type"
    @click="$emit('click')"
  >
    <slot />
  </button>
</template>

<script>
export default {
  name: 'Button',
  props: {
    primary: {
      type: Boolean
    },
    type: {
      type: String
    }
  }
}
</script>

<style lang="stylus" scoped>
button
  padding 5px 12px
  margin 0 5px
  color #2196F3
  background-color transparent
  border 0
  border-radius 2px
  font-size 16px
  cursor pointer
  transition background 0.15s ease

  &:hover
    background-color #ddd

  &:last-child
    margin-right 0

  &:focus
    outline 0

  &.primary
    background-color #2196F3
    color #fff

    &:hover
      background-color darken(#2196F3, 20%)

  &:disabled
    cursor not-allowed
    background-color lighten(#2196F3, 60%)

    &:hover
      background-color lighten(#2196F3, 60%)
</style>
