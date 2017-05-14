// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import VueRouter from 'vue-router';
import { routes } from './routes/index';
import myPlugin from './plugins/plugins.js'

Vue.use(myPlugin, {
  preview: true
})

import {olCollapseItem, olCheckbox, olRadio, olRadioGroup, olInput, olSwitch, olSlider, olDatepick, olSelect, olOption, olCascader, olFormItem, olForm} from './components/';
Vue.component('olCollapseItem', olCollapseItem);
Vue.component('olFormItem', olFormItem);
Vue.component('olCheckbox', olCheckbox);
Vue.component('olRadio', olRadio);
Vue.component('olRadioGroup', olRadioGroup);
Vue.component('olInput', olInput);
Vue.component('olSwitch', olSwitch);
Vue.component('olSlider', olSlider);
Vue.component('olDatepick', olDatepick);
Vue.component('olSelect', olSelect);
Vue.component('olOption', olOption);
Vue.component('olCascader', olCascader);
Vue.component('olForm', olForm);

Vue.use(VueRouter);

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
  render: h => h(App)
})
