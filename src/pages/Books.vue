<template>
  <div>
    <div class="container">
      <h2>Выберите книгу, которую хотите получить</h2>
      <p>
        Если мы иногда видимся — передам книгу при встрече. Если нет — уточню почтовый адрес через телеграм и отправлю посылкой.
      </p>

      <div
        v-if="isPending"
        class="button__back-side button__back-side_loader"
      >
        <div class="img-wrapper">
          <img
            src="/img/loader.svg"
            alt="loader"
          >
        </div>
      </div>

      <div
        v-else
        class="row"
      >
        <div
          v-for="(book, index) in books"
          :key="index"
          class="col-xs-10 col-xs-offset-1 col-sm-6 col-sm-offset-0 col-md-4 col-lg-3"
        >
          <book
            v-if="book.status === 'free' || isDemo"
            :id="book.id"
            :title="book.title"
            :author="book.author"
            :edition="book.edition"
            :status="book.status"
            :goodreads-link="book.goodreads_link"
            :cover-u-r-l="book.cover_url"
            :is-demo="isDemo"
          />

          <given-book
            v-else
            :status="book.status"
            :cover-u-r-l="book.cover_url"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import http from '@/plugins/http'
import Book from '@/components/books/Book.vue'
import GivenBook from '@/components/books/GivenBook.vue'
export default {
  name: 'Books',
  components: {
    Book,
    GivenBook
  },
  data: function () {
    return {
      isPending: true,
      books: []
    }
  },
  computed: {
    // Демо-режим. Все книжки всегда доступны. При заказе не отправляется запрос на сервер.
    isDemo () {
      return Boolean(this.$route.query.demo)
    }
  },
  async mounted () {
    this.isPending = true
    try {
      this.books = (await http.get('books')).data.data
    } catch (e) {
      this.$toasted.error(e)
    }
    this.isPending = false
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
