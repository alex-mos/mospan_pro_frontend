import Vue from 'vue'
import App from './App.vue'
import router from './router'
import Default from './layouts/Default'

Vue.component('default-layout', Default)

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
