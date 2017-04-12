// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import VueRouter from 'vue-router';
import { routes } from './routes/index';

Vue.use(VueRouter);
import myPlugin from './plugins/plugins.js'
Vue.use(myPlugin, {
 preview: true
})

const router = new VueRouter({
    strict: process.env.NODE_ENV !== 'production',
    mode: 'hash',
    routes
});
router.beforeEach((to, from, next) => { 
 window.scrollTo(0, 0);
        next();
});

router.afterEach((to, from, next) => { 
});
/* eslint-disable no-new */
new Vue({
  el: '#root',
  router,
  template: '<App/>',
  components: { App }
});
