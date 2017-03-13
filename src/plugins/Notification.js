import Vue from 'vue'
import { olNotification } from "../components/index"
// 注册全局的组件
let $root = {};
const div = document.createElement('div');
div.innerHTML = `<ol-notification></ol-notification>`;
document.body.appendChild(div);
const notification = new Vue({
    el: div,
    components: { olNotification }
}).$children[0];

export default function() {
    Vue.prototype.$Notification = {
        remove (item, duration){
            setTimeout(() => {
                notification.closeItem(item)
            }, duration)
        },
        create(type, title, content, duration){
            let data = {
                title,
                content,
                duration
            }
            notification.addItem(data)

            if(duration){
                this.remove(data, duration)
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