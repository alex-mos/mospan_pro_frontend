<template>
  <div>
    <navigation />

    <div class="container">
      <h2>Выберите книгу, которую хотите получить</h2>

      <div class="row">
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
            :goodreadsLink="book.goodreadsLink"
            :coverURL="book.coverURL"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
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
      books: [
        {
          id: 1,
          title: 'Обои-убийцы: как выжить в собственной квартире',
          author: 'Дарья Саркисян',
          edition: 'мягкая обложка, белая бумага',
          status: 'free', // free, reserved, given
          coverURL: '/bookcovers/poison.jpg',
          goodreadsLink: 'https://www.goodreads.com/book/show/41744541'
        },
        {
          id: 2,
          title: 'Ложная слепота',
          author: 'Питер Уоттс',
          edition: 'твёрдая обложка, жёлтая бумага',
          status: 'free',
          coverURL: '/bookcovers/blindsight.jpg',
          goodreadsLink: 'https://www.goodreads.com/book/show/27211781'
        },
        {
          id: 3,
          title: 'Нейромант',
          author: 'Уильям Гибсон',
          edition: 'мягкая обложка, жёлтая бумага',
          status: 'free',
          coverURL: '/bookcovers/neuromancer.jpg',
          goodreadsLink: 'https://www.goodreads.com/book/show/33838639'
        }
      ]
    }
  }
}
</script>

<style lang="stylus" scoped>
h2
  margin-bottom 30px
</style>
