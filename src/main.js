import Vue from 'vue'
import App from './components/app/App.vue'
import router from './router/router.js'
import VueAwesomeSwiper from 'vue-awesome-swiper'
Vue.use(VueAwesomeSwiper)
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
