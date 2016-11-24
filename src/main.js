/**
 * Created by iSAM 
 */
import Vue from 'vue';

import VueRouter from 'vue-router';
import VueResource from 'vue-resource';
import Env from './config/env';


import App from 'components/app.vue';
import index from './components/index.vue'
import show from './components/show.vue'
import datas from './components/datas.vue'
import button from './components/button.vue'


Vue.use(VueRouter);
Vue.use(VueResource);




const routes = [
  {path: '/', component:show },
  { path: '/index', component: index, 
    children: [
        {
          path: '',
          component: datas
        },
        {
          
          path: '/button',
          component: button
        },


      ] 
       },
  { path: '*', redirect: '/' },

]



// 开启debug模式
Vue.config.debug = true;

// 路由配置


const router = new VueRouter({
  routes,
})




router.beforeEach((to, from, next) => { 
 window.scrollTo(0, 0);
     if (to.auth) {
         next({
        path: '/login',
        query: { redirect: to.fullPath }
      })
    } else {
        next();
    }
});
router.afterEach((to, from, next) => { 
console.log(to.path)
});



const app = new Vue({
  router,
  render: h => h(App)
}).$mount('#app')

