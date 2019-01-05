<template>
  <div>
    <navigation />

    <div class="container">
      <h2>Выберите книгу, которую хотите получить</h2>
  
      <div
        v-if="isPending"
        class="button__back-side button__back-side_loader">
        <div class="img-wrapper">
          <img src="/img/loader.svg" alt="loader">
        </div>
      </div>
      
      <div
        v-else
        class="row">
        <div
          v-for="(book, index) in books"
          :key="index"
          class="col-xs-12 col-sm-6 col-md-4 col-lg-3">
          <book
            :id="book.id"
            :title="book.title"
            :author="book.author"
            :edition="book.edition"
            :status="book.status"
            :goodreadsLink="book.goodreads_link"
            :coverURL="book.cover_url"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import http from '@/plugins/http'
import Navigation from '@/components/Navigation.vue'
import Book from '@/components/books/Book.vue'
export default {
  name: 'books',
  components: {
    Navigation,
    Book
  },
  data: function () {
    return {
      isPending: true,
      books: []
    }
  },
  
  mounted () {
    this.isPending = true
    http.get('books/')
      .then(res => {
        this.books = res.data.data
        this.isPending = false
      })
  }
}
</script>

<style lang="stylus" scoped>
h2
  margin-bottom 30px
</style>
