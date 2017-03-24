// const table = resolve => require(['../components/show/showTable.vue'], resolve)
export const routes = [
   { path: '/', component: resolve => require(['../components/index.vue'], resolve), 
    children: [
       {
          path: '/datas',
          name: '总结',
          component: resolve => require(['../components/datas.vue'], resolve) 
        },
        {
          path: '/icon',
          name: 'icon',
          component:resolve => require(['../components/show/showIcon.vue'], resolve)
        },
       /* {
          path: '/button',
          name: 'button',
          component: resolve => require(['../components/show/showButton.vue'], resolve)
        },

        {
          path: '/dropButton',
          name: 'dropButton',
          component: resolve => require(['../components/show/showDropButtn.vue'], resolve)
        },
        {
          path: '/tag',
          name: 'tag',
          component: resolve => require(['../components/show/showTag.vue'], resolve)
        },

        {
          path: '/checkbox',
          name: 'checkbox',
          component: resolve => require(['../components/show/showCheckbox.vue'], resolve)
        },

        {
          path: '/table',
          name: 'table',
          component: resolve => require(['../components/show/showTable.vue'], resolve)
        },
         {
          path: '/card',
          name: 'card',
          component: resolve => require(['../components/show/showCard.vue'], resolve)
        },
         {
          path: '/radio',
          name: 'radio',
          component: resolve => require(['../components/show/showRadio.vue'], resolve)
        },
        {
          path: '/input',
          name: 'input',
          component: resolve => require(['../components/show/showInput.vue'], resolve)
        },

        {
          path: '/switch',
          name: 'switch',
          component: resolve => require(['../components/show/showSwitch.vue'], resolve)
        },
         {
          path: '/slider',
          name: 'slider',
          component: resolve => require(['../components/show/showSlider.vue'], resolve)
        },*/
        /*{
          path: '/datepick',
          name: 'datepick',
          component: resolve => require(['../components/show/showDatepick.vue'], resolve)
        }, */
        {
          path: '/select',
          name: 'select',
          component: resolve => require(['../components/show/showSelect.vue'], resolve)
        }, 
        {
          path: '/cascader',
          name: 'cascader',
          component: resolve => require(['../components/show/showCascader.vue'], resolve)
        },
         {
          path: '/alert',
          name: 'alert',
          component: resolve => require(['../components/show/showAlert.vue'], resolve)
        },
        {
          path: '/showTooltip',
          name: 'showTooltip',
          component: resolve => require(['../components/show/showTooltip.vue'], resolve)
        },
        {
          path: '/timeline',
          name: 'timeline',
          component: resolve => require(['../components/show/showTimeline.vue'], resolve)
        },
        {
          path: '/loding',
          name: 'loding',
          component: resolve => require(['../components/show/showLoding.vue'], resolve)
        },
         {
          path: '/progress',
          name: 'progress',
          component: resolve => require(['../components/show/showProgress.vue'], resolve)
        },
         {
          path: '/upload',
          name: 'upload',
          component: resolve => require(['../components/show/showUpload.vue'], resolve)
        },
        {
          path: '/tree',
          name: 'tree',
          component: resolve => require(['../components/show/showTree.vue'], resolve)
        },
         {
          path: '/model',
          name: 'model',
          component: resolve => require(['../components/show/showModel.vue'], resolve)
        },
        {
          path: '/notifiction',
          name: 'notifiction',
          component: resolve => require(['../components/show/showNotifiction.vue'], resolve)
        },
        {
          path: '/preview',
          name: 'preview',
          component: resolve => require(['../components/show/showPreview.vue'], resolve)
        },
        {
          path: '/breadcrumb',
          name: 'breadcrumb',
          component: resolve => require(['../components/show/showBreadcrumb.vue'], resolve)
        }, 
        {
          path: '/pagination',
          name: 'pagination',
          component: resolve => require(['../components/show/showPagination.vue'], resolve)
        }],
}]

