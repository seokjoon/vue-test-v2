import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import mixin from './mixins'
import { sync } from 'vuex-router-sync'

Vue.config.productionTip = false

Vue.mixin(mixin);

sync(store, router);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
