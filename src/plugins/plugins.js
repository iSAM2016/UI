import Vue from 'vue'
import  Preview  from './Preview.js'
import  Modal  from './Modal.js'
import  Notification  from './Notification.js'

export default {
    install: function (Vue, {
        notification=true,
        modal=true,
        preview= false
    }={}) {
        if ( notification ) {
            Notification(Vue);
        }
        if ( modal ) {
            Modal(Vue);
        }
        if ( preview ) {
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
