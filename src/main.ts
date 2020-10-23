import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store/index'
import ElementUI from 'element-ui';
// import echarts from 'echarts'
// Vue.prototype.$echarts = echarts;
import 'element-ui/lib/theme-chalk/index.css';
Vue.config.productionTip = false
Vue.use(ElementUI);
import "../permission.js";


new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
