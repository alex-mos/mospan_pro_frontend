<template>
  <div class="container">
    <div>
      Hi, I'm Alexander Mospan, <router-link to="/cv">a front-end developer</router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Home'
}
</script>

<style scoped>
.container {
  min-height: 70vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  font-family: 'PT Serif Caption', serif;
  font-size: 26px;
}
@media (max-width: 768px) {
  .container {
    font-size: 18px;
  }
}
ul {
  list-style: none;
}
ul li:before {
  display: inline-block;
  margin: 0 0.3em 0 -1em;
  content: "–";
}
</style>
