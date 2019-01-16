import Vue from 'vue'
import App from './App.vue'
// import ElementUI from 'element-ui';
// import 'element-ui/lib/theme-chalk/index.css';
import router from './router'
import { Row,Col,MenuItem,Menu } from 'element-ui';
<<<<<<< HEAD
// Vue.config.productionTip = false
=======
>>>>>>> 6a1c9005ce3f764c0c20543b186bdd2f942c707a
// Vue.use(ElementUI);
Vue.use(Row)
Vue.use(Col)
Vue.use(Menu)
Vue.use(MenuItem)
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
