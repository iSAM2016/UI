import Vue from 'vue'
import {
    olNotification
} from "../components/"


export default function() {
    Vue.prototype.$Notification = {
        $notificationRoot: {},
        createBox() {
            // chau创建盒子
            if (!this.$notificationRoot.notification) {
                const notificationDiv = document.createElement('div');
                notificationDiv.innerHTML = `<ol-notification kl=23></ol-notification>`;
                document.body.appendChild(notificationDiv);
                const notification = new Vue({
                    el: notificationDiv,
                    render: h => h(olNotification)
                }).$children[0];
                this.$notificationRoot.notification = notification;
            }
        },
        remove(item, duration) {
            let self = this;
            setTimeout(() => {
                self.$notificationRoot.notification.closeItem(item)
                if (self.$notificationRoot.notification.allItem.length === 0) {
                    self.$notificationRoot.notification = false;
                }
            }, duration)
        },
        create(type, title, content, duration) {
            this.createBox();
            let data = {
                title,
                content,
                duration
            }
            this.$notificationRoot.notification.addItem(data)
            if (duration) {
                this.remove(data, duration)
            }
        },
        success(title, content, duration) {
            this.create('success', title, content, duration)
        },
        info(title, content, duration) {
            this.create('info', title, content, duration)
        },
        warning(title, content, duration) {
            this.create('warning', title, content, duration)
        },
        failed(title, content, duration) {
            this.create('failed', title, content, duration)
        },
    }
}