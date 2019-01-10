<template>
  <div>
    <div class="container">
      <h2>Выберите книгу, которую хотите получить</h2>
      <p>
        Если мы иногда видимся — передам книгу при встрече. Если нет — уточню почтовый адрес через телеграм и отправлю посылкой.
      </p>

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
          class="col-xs-10 col-xs-offset-1 col-sm-6 col-sm-offset-0 col-md-4 col-lg-3">
          <book
            v-if="book.status === 'free'"
            :id="book.id"
            :title="book.title"
            :author="book.author"
            :edition="book.edition"
            :status="book.status"
            :goodreadsLink="book.goodreads_link"
            :coverURL="book.cover_url"
          />

          <reserved-book
            v-if="book.status === 'reserved'"
            :coverURL="book.cover_url"
          />

          <sent-book
            v-if="book.status === 'sent'"
            :coverURL="book.cover_url"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import http from '@/plugins/http'
import Book from '@/components/books/Book.vue'
import ReservedBook from '@/components/books/ReservedBook.vue'
import SentBook from '@/components/books/SentBook.vue'
export default {
  name: 'books',
  components: {
    Book,
    ReservedBook,
    SentBook
  },
  data: function () {
    return {
      isPending: true,
      books: []
    }
  },
  mounted () {
    this.isPending = true
    http.get('books')
      .then(res => {
        this.books = res.data.data
        this.isPending = false
      })
  }
}
</script>

<style lang="stylus" scoped>
h2
  margin-bottom 10px

p
  margin-bottom 35px
  font-size 18px
</style>
