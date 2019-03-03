import Vue from 'vue'
import store from './store'
import App from './App.vue'
import router from './router'
import Toasted from 'vue-toasted'

import Default from './layouts/Default'
import Clean from './layouts/Clean'

Vue.component('default-layout', Default)
Vue.component('clean-layout', Clean)

Vue.use(Toasted, {
  position: 'bottom-right',
  duration: 10000
})

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
