import Vue from 'vue'
import App from './App.vue'
import router from '@/plugins/router.js'

import './assets/css/base.css'; // ~~ src ='...'

//引入字体比例校验 js   
 // import '@/assets/js/font.js' // ~~ src='..'
require('@/assets/js/font.js') // ~~ src='..'

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
