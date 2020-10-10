import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import { GlobalMixin } from '@/mixins/GlobalMixin'

Vue.config.productionTip = false

Vue.mixin(GlobalMixin);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
