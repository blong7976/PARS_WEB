import Vue from 'vue'
import App from './App'
import router from './router'
import VueLazyload from 'vue-lazyload'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import "./assets/css/re.css"
import "./assets/css/global.css"
import "./assets/css/style.css"
Vue.config.productionTip = false
Vue.use(VueLazyload)
Vue.use(ElementUI)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})


  //main.js里面的代码
router.beforeEach((to, from, next) => {
    if(to.meta.content){
      let head = document.getElementsByTagName('head');
      let meta = document.createElement('meta');
      meta.content = to.meta.content;
      head[0].appendChild(meta)
    }
    if (to.meta.title) {
      document.title = to.meta.title;
    }
    next()
});