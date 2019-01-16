import Vue from 'vue'
import App from './App.vue'
// import ElementUI from 'element-ui';
// import 'element-ui/lib/theme-chalk/index.css';
import router from './router'
import { Row ,Col} from 'element-ui';

Vue.config.productionTip = false
// Vue.use(ElementUI);
Vue.use(Row)
Vue.use(Col)
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
