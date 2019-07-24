import Vue from 'vue'
import App from './App'
import router from './router'
import Vuex from 'vuex'
import VueLazyload from 'vue-lazyload'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import "./assets/css/global.css"
import "./assets/css/style.css"
import store from './store'
import Common from './utils/common'
Vue.prototype.common = Common

Vue.config.productionTip = false
Vue.use(VueLazyload)
Vue.use(ElementUI)
Vue.use(Vuex)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})



router.beforeEach((to, from, next) => {
    window.sessionStorage.setItem("PARS_ROUTER",to.path)
    if (to.meta.title) {
      document.title = to.meta.title;
    }
    next()
});