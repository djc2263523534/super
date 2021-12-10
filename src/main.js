import Vue from 'vue'
import App from './App.vue'
import router from './router/index'
import store from './store/index'

import toast from './components/common/toast/index'

Vue.use(toast)

//1.引入ui库
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI)

//2.解决移动端300ms 的延迟
import FastClick from 'fastclick'
FastClick.attach(document.body)

//3.懒加载
import vueLazyLoad from 'vue-lazyload'
Vue.use(vueLazyLoad, {
  loading: require("./assets/image/home/featureview.jpg")
})

//3.使用vue-swipe
require('vue-swipe/dist/vue-swipe.css');

import { Swipe, SwipeItem } from 'vue-swipe';

Vue.component('swipe', Swipe);
Vue.component('swipe-item', SwipeItem);


Vue.config.productionTip = false

Vue.prototype.$bus = new Vue()

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
