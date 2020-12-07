import Vue from 'vue'
import App from './App.vue'
import '@babel/polyfill';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import tinymce from 'tinymce'
import VueTinymce from '@packy-tang/vue-tinymce'
Vue.prototype.$tinymce = tinymce
Vue.use(VueTinymce)
import router from './router'
Vue.config.productionTip = false
Vue.use(ElementUI);
import store from './store'
new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')
