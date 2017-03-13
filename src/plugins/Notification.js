import { olNotification } from "../components/index"
export default function(Vue) {
    Vue.prototype.$Notification = {
        remove (item, duration){
            setTimeout(() => {
                notification.closeItem(item)
            }, duration)
        },
        create(type, title, content, duration){
            this.createDom();
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
        createDom() {
            if (!!$root.$Notification) {
                const div = document.createElement('div');
                div.innerHTML = `<ol-notification></ol-notification>`;
                document.body.appendChild(div);
                const notification = new Vue({
                    el: div,
                    components: { olNotification }
                }).$children[0];
                $root.$Notification = notification;
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