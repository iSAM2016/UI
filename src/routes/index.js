// const table = resolve => require.ensure([], () => resolve(require('../components/show/showTable.vue')))
export const routes = [
   { path: '/', component: resolve => require.ensure([], () => resolve(require('../components/index.vue'))), 
    children: [
       {
          path: '/datas',
          name: '总结',
          component: resolve => require.ensure([], () => resolve(require('../components/datas.vue'))) 
        },
        {
          path: '/icon',
          name: 'icon',
          component:resolve => require.ensure([], () => resolve(require('../components/show/showIcon.vue')))
        },
        {
          path: '/button',
          name: 'button',
          component: resolve => require.ensure([], () => resolve(require('../components/show/showButton.vue')))
        },

        {
          path: '/dropButton',
          name: 'dropButton',
          component: resolve => require.ensure([], () => resolve(require('../components/show/showDropButtn.vue')))
        },
        {
          path: '/tag',
          name: 'tag',
          component: resolve => require.ensure([], () => resolve(require('../components/show/showTag.vue')))
        },

        {
          path: '/checkbox',
          name: 'checkbox',
          component: resolve => require.ensure([], () => resolve(require('../components/show/showCheckbox.vue')))
        },

        {
          path: '/table',
          name: 'table',
          component: resolve => require.ensure([], () => resolve(require('../components/show/showTable.vue')))
        },
         {
          path: '/card',
          name: 'card',
          component: resolve => require.ensure([], () => resolve(require('../components/show/showCard.vue')))
        },
         {
          path: '/radio',
          name: 'radio',
          component: resolve => require.ensure([], () => resolve(require('../components/show/showRadio.vue')))
        },
        {
          path: '/input',
          name: 'input',
          component: resolve => require.ensure([], () => resolve(require('../components/show/showInput.vue')))
        },

        {
          path: '/switch',
          name: 'switch',
          component: resolve => require.ensure([], () => resolve(require('../components/show/showSwitch.vue')))
        },
         {
          path: '/slider',
          name: 'slider',
          component: resolve => require.ensure([], () => resolve(require('../components/show/showSlider.vue')))
        },
        /*{
          path: '/datepick',
          name: 'datepick',
          component: resolve => require.ensure([], () => resolve(require('../components/show/showDatepick.vue')))
        }, */
        {
          path: '/select',
          name: 'select',
          component: resolve => require.ensure([], () => resolve(require('../components/show/showSelect.vue')))
        }, 
        {
          path: '/cascader',
          name: 'cascader',
          component: resolve => require.ensure([], () => resolve(require('../components/show/showCascader.vue')))
        },
         {
          path: '/alert',
          name: 'alert',
          component: resolve => require.ensure([], () => resolve(require('../components/show/showAlert.vue')))
        },
        {
          path: '/showTooltip',
          name: 'showTooltip',
          component: resolve => require.ensure([], () => resolve(require('../components/show/showTooltip.vue')))
        },
        {
          path: '/timeline',
          name: 'timeline',
          component: resolve => require.ensure([], () => resolve(require('../components/show/showTimeline.vue')))
        },
        {
          path: '/loding',
          name: 'loding',
          component: resolve => require.ensure([], () => resolve(require('../components/show/showLoding.vue')))
        },
         {
          path: '/progress',
          name: 'progress',
          component: resolve => require.ensure([], () => resolve(require('../components/show/showProgress.vue')))
        },
         {
          path: '/upload',
          name: 'upload',
          component: resolve => require.ensure([], () => resolve(require('../components/show/showUpload.vue')))
        },
        {
          path: '/tree',
          name: 'tree',
          component: resolve => require.ensure([], () => resolve(require('../components/show/showTree.vue')))
        },
         {
          path: '/model',
          name: 'model',
          component: resolve => require.ensure([], () => resolve(require('../components/show/showModel.vue')))
        },
        {
          path: '/notifiction',
          name: 'notifiction',
          component: resolve => require.ensure([], () => resolve(require('../components/show/showNotifiction.vue')))
        },
        {
          path: '/preview',
          name: 'preview',
          component: resolve => require.ensure([], () => resolve(require('../components/show/showPreview.vue')))
        },
        {
          path: '/breadcrumb',
          name: 'breadcrumb',
          component: resolve => require.ensure([], () => resolve(require('../components/show/showBreadcrumb.vue')))
        }, 
        {
          path: '/pagination',
          name: 'pagination',
          component: resolve => require.ensure([], () => resolve(require('../components/show/showPagination.vue')))
        },
         {
          path: '/top',
          name: 'top',
          component: resolve => require.ensure([], () => resolve(require('../components/show/showGotoTop.vue')))
        }],
}]

