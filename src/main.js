import Vue from 'vue'
import App from './App.vue'
// import ElementUI from 'element-ui';
// import 'element-ui/lib/theme-chalk/index.css';
import {router} from './router'
import { Row,Col,MenuItem,Menu, Carousel,CarouselItem,Tabs,TabPane } from 'element-ui';
// Vue.config.productionTip = false
// Vue.use(ElementUI);
Vue.use(Row)
Vue.use(Col)
Vue.use(Menu)
Vue.use(Tabs)
Vue.use(TabPane)
Vue.use(MenuItem)
Vue.use(Carousel)
Vue.use(CarouselItem);
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
// console.log(router)
