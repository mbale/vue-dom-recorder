import Vue from 'vue'
import vClickOutside from 'v-click-outside'
import App from '@/App.vue'
import store from '@/store'

Vue.config.productionTip = false

// @ts-ignore
Vue.use(vClickOutside)

new Vue({
  store,
  render: h => h(App)
}).$mount('#app')
