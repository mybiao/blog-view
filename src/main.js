import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import router from './../router'
import axios from 'axios'
import hljs from 'highlight.js'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'
import{
  // Message,
  Pagination,
}
from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css';

// Vue.use(Message);
Vue.use(Pagination);

Vue.use(VueRouter);
Vue.config.productionTip = true;
axios.defaults.baseURL="https://www.mybiao.top/api"
axios.interceptors.request.use(config=> {
   return config;
 }, err=> {
  window.alert("请求错误");
  window.console.log("请求错误")
  return Promise.resolve(err);
 });
 axios.interceptors.response.use(response => {
  return response
}, error => {
  window.alert("请求错误");
  window.console.log("请求错误")
  return Promise.resolve(error.response)
})

Vue.prototype.$axios = axios;

Vue.directive("highlight",function(el){
  let blocks = el.querySelectorAll('pre code')
  blocks.forEach(block => {
    hljs.highlightBlock(block)
  });
})

router.beforeEach((to,from,next)=>{
  NProgress.start();
  next();
});

router.afterEach(()=>{
  NProgress.done();
});

new Vue({
  router: router,
  render: h => h(App),
}).$mount('#app')