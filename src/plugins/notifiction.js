import { olNotification, olModal } from "../components/index"
import Vue from 'vue'

// 注册全局的组件
let $root = {};

const div = document.createElement('div');
div.innerHTML = `<ol-notification></ol-notification>`;
document.body.appendChild(div);
const notification = new Vue({
    el: div,
    components: { olNotification }
}).$children[0];



export default {
    install: function (Vue, options) {

        // 添加实例方法
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

    // model
    // 添加实例方法
    Vue.prototype.$Modal = (title, content, callBack={}, options={}, undefined) =>{
            // option object
            let props = `title=${title} content=${content}`;
            Object.keys(options, function(keys) {
                props += `${keys}=${options[keys]} `
            })
            const modalDiv = document.createElement('div');
                  modalDiv.className = "modal-box"
                  modalDiv.innerHTML = `<ol-modal ${props}></ol-modal>`;
            document.body.appendChild(modalDiv);
            const modal = new Vue({
                el: modalDiv,
                components: { olModal }
            }).$children[0];
             modal.addModal(callBack);
      }
  }
};
