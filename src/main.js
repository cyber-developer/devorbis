import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify';
import Toasted from 'vue-toasted';
import VueMeta from 'vue-meta'

Vue.config.productionTip = false
Vue.use(Toasted)
Vue.use(VueMeta)

new Vue({
  router,
  store,
  vuetify,
  render: function (h) { return h(App) }
}).$mount('#app')
