<template>
  <div class="container">
    Привет, меня зовут Александр Мосьпан и я
    <ul>
      <li>
        <router-link to="/cv">работаю фронтендером уже шесть лет (ссылка на CV)</router-link>
      </li>
      <li>
        <router-link to="/books">бесплатно раздаю книжки, которые прочитал (ссылка на /books)</router-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'home'
}
</script>
