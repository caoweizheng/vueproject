import Vue from 'vue'
import store from './router/store.js'
import App from './components/app/App.vue'
import router from './router/router.js'

import VueAwesomeSwiper from 'vue-awesome-swiper'
Vue.use(VueAwesomeSwiper)
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
