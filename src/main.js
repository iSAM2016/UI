/**
 * Created by iSAM 
 */
import Vue from 'vue';

import VueRouter from 'vue-router';
import VueResource from 'vue-resource';
import Env from './config/env';
import highlight from 'highlight.js'
import marked from 'marked'


import App from 'components/app.vue';
import index from './components/index.vue'


import myPlugin from './plugins/plugins.js'
Vue.use(myPlugin, {
 preview: true
})

//首页
const datas = resolve => require(['./components/datas.vue'], resolve)
const showButton = resolve => require(['./components/show/showButton.vue'], resolve)
const showDropButtn = resolve => require(['./components/show/showDropButtn.vue'], resolve)
const showTag = resolve => require(['./components/show/showTag.vue'], resolve)
const checkbox = resolve => require(['./components/show/showCheckbox.vue'], resolve)
const table = resolve => require(['./components/show/showTable.vue'], resolve)
const card = resolve => require(['./components/show/showCard.vue'], resolve)
const radio = resolve => require(['./components/show/showRadio.vue'], resolve)
const input = resolve => require(['./components/show/showInput.vue'], resolve)
const iswitch = resolve => require(['./components/show/showSwitch.vue'], resolve)
const slider = resolve => require(['./components/show/showSlider.vue'], resolve)
const datepick = resolve => require(['./components/show/showDatepick.vue'], resolve)
const select = resolve => require(['./components/show/showSelect.vue'], resolve)
const cascader= resolve => require(['./components/show/showCascader.vue'], resolve)
const alert= resolve => require(['./components/show/showAlert.vue'], resolve)
const timeline= resolve => require(['./components/show/showTimeline.vue'], resolve)
const loding= resolve => require(['./components/show/showLoding.vue'], resolve)
const upload= resolve => require(['./components/show/showUpload.vue'], resolve)
const tree= resolve => require(['./components/show/showTree.vue'], resolve)
const progress= resolve => require(['./components/show/showProgress.vue'], resolve)
const notifiction= resolve => require(['./components/show/showNotifiction.vue'], resolve)
const breadcrumb= resolve => require(['./components/show/showBreadcrumb.vue'], resolve)
const pagination= resolve => require(['./components/show/showPagination.vue'], resolve)
const tooltip= resolve => require(['./components/show/showTooltip.vue'], resolve)
const model= resolve => require(['./components/show/showModel.vue'], resolve)
const preview= resolve => require(['./components/show/showPreview.vue'], resolve)
const icon= resolve => require(['./components/show/showIcon.vue'], resolve)

marked.setOptions({
    highlight: function (code) {
        return window.highlight.highlightAuto(code).value
    },
     renderer: new marked.Renderer(),
    gfm: true,
    tables: true,
    breaks: true,
    pedantic: false,
    sanitize: true,
    smartLists: true,
    smartypants: false
    
})

window.highlight = highlight
window.marked = marked


Vue.use(VueRouter);
Vue.use(VueResource);
 
const routes = [
  { path: '/', component: index, 
    children: [
        {
          path: '',
          component: datas
        },
        {
          path: '/button',
          component: showButton
        },

        {
          path: '/dropButton',
          component: showDropButtn
        },
        {
          path: '/tag',
          component: showTag
        },

        {
          path: '/checkbox',
          component: checkbox
        },

        {
          path: '/table',
          component:table
        },
         {
          path: '/card',
          component:card
        },
         {
          path: '/radio',
          component:radio
        },
        {
          path: '/input',
          component:input
        },

        {
          path: '/switch',
          component:iswitch
        },
         {
          path: '/slider',
          component:slider
        },
        {
          path: '/datepick',
          component:datepick
        }, 
        {
          path: '/select',
          component:select
        }, {
          path: '/cascader',
          component:cascader
        },
         {
          path: '/alert',
          component:alert
        },
        {
          path: '/showTooltip',
          component:tooltip
        },
        {
          path: '/timeline',
          component:timeline
        },
        {
          path: '/loding',
          component:loding
        },
         {
          path: '/progress',
          component:progress
        },
         {
          path: '/upload',
          component:upload
        },
         {
          path: '/tree',
          component:tree
        },
         {
          path: '/model',
          component:model
        },
        {
          path: '/notifiction',
          component:notifiction
        },
        {
          path: '/preview',
          component:preview
        },
        {
          path: '/breadcrumb',
          component:breadcrumb
        }, {
          path: '/pagination',
          component:pagination
        },
        {
          path: '/icon',
          component:icon
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
});

const app = new Vue({
  router,
  render: h => h(App)
}).$mount('#app')

