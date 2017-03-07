import { olNotification } from "../components/index"
import Vue from 'vue'
  Vue.component("olNotification", olNotification)
/*export default (Vue, $root)  => {*/

let $root = {};
  Vue.set($root,'ROOT_NOTIFICATION',[])

  
  // 添加实例方法
    Vue.prototype.$Notification = {
        remove (item, duration){
            setTimeout(() => {
                $root.RADON_NOTIFICATION.$remove(item)
            }, duration)
        },

        create(type, title, content, duration){
             let item = {
                type: type,
                title: title,
                content: content
            }

            $root.ROOT_NOTIFICATION.push(item)
            if(duration){
                //this.remove(item,duration)
            }
        },

        success (title, content, duration) {
            this.create('success', title, content, duration)
        },
         info (title, content, duration) {
            this.create('info', title, content, duration)
        },
        warning (title, content, duration) {
            this.create('warning', title, content, duration)
        },
        failed (title, content, duration) {
            this.create('failed', title, content, duration)
        }
  }





