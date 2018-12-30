<template>
  <div class="book">
    <img :src="coverURL" class="img-responsive">
    <div class="author">
      {{ author }}
    </div>
    <div class="author">
      {{ title }}
    </div>
  </div>
</template>

<script>
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
  width 100%
</style>
