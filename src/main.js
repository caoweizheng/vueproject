import Vue from 'vue'
import App from './components/app/App.vue'
import router from './router/router.js'
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
