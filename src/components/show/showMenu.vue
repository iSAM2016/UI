<style  lang = "stylus" >
</style>
<template>
  <section >
    <ol-menu :menu="menu"></ol-menu>
  </section>
</template>
<script>
/**
     * 数据格式
     * [{
     *  title: 标题
     *  link: 链接地址
     *  isShowSub: 是否显示子菜单
     *  subMenu: [{ 子菜单
     *    title: 标题
     *    group: [{
     *      title: 
     *      subTitle:
     *      link:
     *    }]
     *  }]
     * }]
     */

import { olMenu }from '../index'
export default {
    components: { 
     olMenu
    },
    data () {
        return {
            menu: [{
                title: 'components',
                link: 'form',
                showSub: true,
                group: true,
                subMenu: [{
                    title: 'Basic',
                    group: [{
                        title: 'Button',
                        subTitle: '按钮',
                        link: 'basic/button'
                    }, {
                        title: 'dropButton',
                        subTitle: '下拉按钮',
                        link: 'basic/drop-button'
                    }, {
                        title: 'Tag',
                        subTitle: '标签',
                        link: 'basic/tag'
                    }, {
                        title: 'Table',
                        subTitle: '表格',
                        link: 'basic/table'
                    }, {
                        title: 'Card',
                        subTitle: '卡片',
                        link: 'basic/card'
                    }]
                }, {
                    title: 'Form',
                    group: [{
                        title: 'Checkbox',
                        subTitle: '多选框',
                        link: 'form/checkbox'
                    }, {
                        title: 'Radio',
                        subTitle: '单选框',
                        link: 'form/radio'
                    }, {
                        title: 'Textfield',
                        subTitle: '输入框',
                        link: 'form/textfield'
                    }, {
                        title: 'Number',
                        subTitle: '数字输入框',
                        link: 'form/number'
                    }, {
                        title: 'Switch',
                        subTitle: '开关',
                        link: 'form/switch'
                    }, {
                        title: 'Slider',
                        subTitle: '滑动输入',
                        link: 'form/slider'
                    }, {
                        title: 'Datepicker',
                        subTitle: '日期选择',
                        link: 'form/datepicker'
                    }, {
                        title: 'Select',
                        subTitle: '选择器',
                        link: 'form/select'
                    }, {
                        title: 'Cascader',
                        subTitle: '级联选择器',
                        link: 'form/cascader'
                    }, {
                        title: 'AutoSearch',
                        subTitle: '查找输入内容',
                        link: 'form/autosearch'
                    }]
                }, {
                    title: 'Common',
                    group: [{
                        title: 'Alert',
                        subTitle: '警告提示',
                        link: 'common/alert'
                    }, {
                        title: 'Timeline',
                        subTitle: '时间线',
                        link: 'common/timeline'
                    }, {
                        title: 'Tooltip',
                        subTitle: '提示框',
                        link: 'common/tooltip'
                    }, {
                        title: 'Spin',
                        subTitle: '加载中',
                        link: 'common/spin'
                    }, {
                        title: 'Upload',
                        subTitle: '上传',
                        link: 'common/upload'
                    }, {
                        title: 'AudioPlayer',
                        subTitle: '音频播放器',
                        link: 'common/audio'
                    }, {
                        title: 'Progress',
                        subTitle: '进度条',
                        link: 'common/progress'
                    }, {
                        title: 'Tree',
                        subTitle: '树选择',
                        link: 'common/tree'
                    }]
                }, {
                    title: 'Global',
                    group: [{
                        title: 'Modal',
                        subTitle: '对话框',
                        link: 'global/modal'
                    }, {
                        title: 'Notification',
                        subTitle: '通知',
                        link: 'global/notification'
                    }, {
                        title: 'Preview',
                        subTitle: '图片预览',
                        link: 'global/preview'
                    }, {
                        title: 'LoadingBar',
                        subTitle: '加载进度条',
                        link: 'global/loadingbar'
                    }]
                }, {
                    title: 'Navigation',
                    group: [{
                        title: 'Breadcrumb',
                        subTitle: '面包屑',
                        link: 'navigation/breadcrumb'
                    }, {
                        title: 'Pagination',
                        subTitle: '分页',
                        link: 'navigation/pagination'
                    }]
                }]
            }]
        }

    }
}

</script>