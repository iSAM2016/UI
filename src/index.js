import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router';
import { routes } from './routes/index';

Vue.use(VueRouter);

const router = new VueRouter({
    mode: 'hash',
    routes
});
router.beforeEach((to, from, next) => { 
 window.scrollTo(0, 0);
        next();
});

router.afterEach((to, from, next) => { 
});
new Vue({
  el: '#root',
  render: h => h(App)
})