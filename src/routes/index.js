    const index = resolve => require(['../components/index.vue'], resolve);
    const datas = resolve => require(['../components/datas.vue'], resolve);
    const nav = resolve => require(['../components/show/showNav.vue'], resolve);
    const icon = resolve => require(['../components/show/showIcon.vue'], resolve);
    const button = resolve => require(['../components/show/showButton.vue'], resolve);
    const dropButton = resolve => require(['../components/show/showDropButtn.vue'], resolve);
    const tag = resolve => require(['../components/show/showTag.vue'], resolve);
    const checkbox = resolve => require(['../components/show/showCheckbox.vue'], resolve);
    const table = resolve => require(['../components/show/showTable.vue'], resolve);
    const card = resolve => require(['../components/show/showCard.vue'], resolve);
    const radio = resolve => require(['../components/show/showRadio.vue'], resolve);
    const input = resolve => require(['../components/show/showInput.vue'], resolve);
    const switchs = resolve => require(['../components/show/showSwitch.vue'], resolve);
    const slider = resolve => require(['../components/show/showSlider.vue'], resolve);
    const datepick = resolve => require(['../components/show/showDatepick.vue'], resolve);
    const select = resolve => require(['../components/show/showSelect.vue'], resolve);
    const cascader = resolve => require(['../components/show/showCascader.vue'], resolve);
    const alert = resolve => require(['../components/show/showAlert.vue'], resolve);
    const tip = resolve => require(['../components/show/showTooltip.vue'], resolve);
    const timeline = resolve => require(['../components/show/showTimeline.vue'], resolve);
    const loding = resolve => require(['../components/show/showLoding.vue'], resolve);
    const progress = resolve => require(['../components/show/showProgress.vue'], resolve);
    const upload = resolve => require(['../components/show/showUpload.vue'], resolve);
    const tree = resolve => require(['../components/show/showTree.vue'], resolve);
    const model = resolve => require(['../components/show/showModel.vue'], resolve);
    const notifiction = resolve => require(['../components/show/showNotifiction.vue'], resolve);
    const preview = resolve => require(['../components/show/showPreview.vue'], resolve);
    const breadcrumb = resolve => require(['../components/show/showBreadcrumb.vue'], resolve);
    const pagination = resolve => require(['../components/show/showPagination.vue'], resolve);
    const top = resolve => require(['../components/show/showGotoTop.vue'],resolve);
    const collapse = resolve => require(['../components/show/showCollapse.vue'],resolve);
    const form = resolve => require(['../components/show/showForm.vue'],resolve);
    const menu = resolve => require(['../components/show/showMenu.vue'],resolve);

export const routes = [
   { path: '/', component: index, 
    redirect: to => {
        return '/datas';
    },
    children: [
       {
          path: '/datas',
          name: '总结',
          component: datas,
        },
        {
          path: '/icon',
          name: 'icon',
          component: icon,
        },
        {
          path: '/button',
          name: 'button',
          component: button,
        },

        {
          path: '/dropButton',
          name: 'dropButton',
          component: dropButton,
        },
        {
          path: '/tag',
          name: 'tag',
          component: tag,
        },

        {
          path: '/checkbox',
          name: 'checkbox',
          component: checkbox,
        },

        {
          path: '/table',
          name: 'table',
          component: table,
        },
         {
          path: '/card',
          name: 'card',
          component: card,
        },
         {
          path: '/radio',
          name: 'radio',
          component: radio,
        },
        {
          path: '/input',
          name: 'input',
          component: input,
        },

        {
          path: '/switch',
          name: 'switch',
          component: switchs,
        },
         {
          path: '/slider',
          name: 'slider',
          component: slider,
        },
        {
          path: '/form',
          name: 'form',
          component: form,
        },
        {
          path: '/datepick',
          name: 'datepick',
          component: datepick,
        }, 
        {
          path: 'menu',
          name:'menu',
          component: menu,
        },
        {
          path: '/tip',
          name: 'tip',
          component: tip,
        },
        {
          path: '/select',
          name: 'select',
          component: select
        }, 
        {
          path: '/cascader',
          name: 'cascader',
          component: cascader
        },
         {
          path: '/alert',
          name: 'alert',
          component: alert
        },
        {
          path: '/timeline',
          name: 'timeline',
          component: timeline,
        },
        {
          path: '/loding',
          name: 'loding',
          component: loding,
        },
         {
          path: '/progress',
          name: 'progress',
          component: progress,
        },
         {
          path: '/upload',
          name: 'upload',
          component: upload,
        },
        {
          path: '/tree',
          name: 'tree',
          component: tree,
        },
         {
          path: '/model',
          name: 'model',
          component: model,
        },
        {
          path: '/notifiction',
          name: 'notifiction',
          component: notifiction,
        },
        {
          path: '/preview',
          name: 'preview',
          component: preview,
        },
        {
          path: '/breadcrumb',
          name: 'breadcrumb',
          component: breadcrumb,
        }, 
        {
          path: '/pagination',
          name: 'pagination',
          component: pagination,
        },
         {
          path: '/nav',
          name: 'nav',
          component: nav,
        },
         {
          path: '/top',
          name: 'top',
          component: top,
        }, {
          path: '/collapse',
          name: 'collapse',
          component: collapse,
        }]
}]

