import Vue from 'vue';
import App from './App.vue';
import Router from 'vue-router';
import routerArray from './router.js';
import store from './store';
// import Home from './views/a.vue'

Vue.config.productionTip = false;

const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: routerArray
});


Vue.use(Router);

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
