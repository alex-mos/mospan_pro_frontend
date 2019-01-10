import Vue from 'vue'
import App from './App.vue'
import router from './router'

import Default from './layouts/Default'
import Clean from './layouts/Clean'

Vue.component('default-layout', Default)
Vue.component('clean-layout', Clean)

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
