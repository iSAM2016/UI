import
olModal
from "../components/"
// model
// 添加实例方法
export default function(Vue) {
  Vue.prototype.$Modal = (content, title, callBack = {}, options = {}, undefined) => {
    // option object
    console.log(content);
    console.log(title);
    let props = `title=${title} content=${content}`;
    Object.keys(options, function(keys) {
      props += `${keys}=${options[keys]} `
    })
    console.log(props);
    const modalDiv = document.createElement('div');
    modalDiv.className = "modal-box";
    modalDiv.innerHTML = `<ol-modal title=123 ></ol-modal>`;
    document.body.appendChild(modalDiv);
    const modal = new Vue({
      el: '.modal-box',
      render: h => h(olModal)
    }).$children[0]

    console.log(modal)
    return new Promise((resolve, rejected) => {
      modal.addStatus(resolve, rejected);
    })
  };
}