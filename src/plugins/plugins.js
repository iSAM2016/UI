import Vue from 'vue'
import  Notification  from './Notification.js'
import  Modal  from './Modal.js'
import  Preview  from './Preview.js'
// 注册全局的组件
let $root = {};
export default {
    install: function (Vue, options={
        Notification: true,
        Modal: true,
        preview: false
    }) {
        if ( options.Notification ) {
            Notification(Vue);
        }
        if ( options.Modal ) {
            Modal(Vue);
        }
        if ( options.preview ) {
            const ONLY_SINGLR_OBJECT = new Vue({
                data:{
                    PREVIEW:{}
                }
            });
            window.ONLY_SINGLR_OBJECT = ONLY_SINGLR_OBJECT;
            Preview(Vue, ONLY_SINGLR_OBJECT);
        }
  }
};
