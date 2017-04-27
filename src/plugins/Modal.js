import { olModal } from "../components/index"
// model
// 添加实例方法
export default function(Vue) {
  Vue.prototype.$Modal = (title, content, callBack={}, options={}, undefined) =>{
    // option object
    let props = `title=${title} content=${content}`;
    Object.keys(options, function(keys) {
        props += `${keys}=${options[keys]} `
    })
    const modalDiv = document.createElement('div');
          modalDiv.innerHTML = `<ol-modal ${props}></ol-modal>`;
    document.body.appendChild(modalDiv);
    const modal = new Vue({
        el: modalDiv,
        render: h => h(olModal)
    }).$children[0];
     modal.addModal(callBack);
  };
 }