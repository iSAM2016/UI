import { olNotification } from "../components/index"
import Vue from 'vue'

// 注册全局的组件
let $root = {};
// Vue.set($root,'ROOT_NOTIFICATION',[])
Vue.component("kl", olNotification)

export default {
    install: function (Vue, options) {
        
        Vue.$root = {
            ROOT_NOTIFICATION: []
        }

        // 添加实例方法
        Vue.prototype.$Notification = {
            remove (item, duration){
                setTimeout(() => {
                    Vue.$root.ROOT_NOTIFICATION = Vue.$root.ROOT_NOTIFICATION.filter(function(i){
                        return i !== item
                    })
                    console.log(Vue.$root.ROOT_NOTIFICATION)
                }, duration)
            },
            create(type, title, content, duration){
                 let item = {
                    type: type,
                    title: title,
                    content: content
                }
                Vue.$root.ROOT_NOTIFICATION.push(item)
                if(duration){
                    this.remove(item,duration)
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
    }
};



