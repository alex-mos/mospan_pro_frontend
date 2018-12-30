<template>
  <div class="container">
    <h2>Выберите книгу, которую хотите получить</h2>

    <div class="row">
      <div
        v-for="(book, index) in books"
        :key="index"
        class="col-sm-4">
        <book
          :title="book.title"
          :author="book.author"
          :coverURL="book.coverURL"
        />
      </div>
    </div>
  </div>
</template>

<script>
import Book from '@/components/books/Book.vue'
export default {
  name: 'books',
  components: {
    Book
  },
  data: function () {
    return {
      books: [
        {
          title: 'Обои-убийцы',
          author: 'Дарья Саркисян',
          coverURL: '/bookcovers/poison.jpg',
          goodreadsLink: ''
        },
        {
          title: 'Ложная слепота',
          author: 'Питер Уоттс',
          coverURL: '/bookcovers/blindsight.jpg',
          goodreadsLink: ''
        },
        {
          title: 'Нейромант',
          author: 'Уильям Гибсон',
          coverURL: '/bookcovers/neuromancer.jpg',
          goodreadsLink: ''
        }
      ]
    }
  }
}
</script>
