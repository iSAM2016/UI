import{
olModal
}
from "../components/"
// model
// 添加实例方法
export default function(Vue) {
  Vue.prototype.$Modal = (content, title, options, callBack,undefined) => {
    // option object
    let props = {};
     props['title'] = title;
     props['content'] = content;
    var keysAyy = Object.keys(options);
    keysAyy.forEach(function(keys) {
      props[keys] = options[keys];
    })
    const modalDiv = document.createElement('div');
    modalDiv.className = "modal-box";
    modalDiv.innerHTML = `<olModal></olModal>`;
    document.body.appendChild(modalDiv);
   const modal = new Vue({
        el: modalDiv,
       render: h =>h(olModal,{props})
  }).$children[0]

    return new Promise((resolve, rejected) => {
      modal.addStatus(resolve, rejected);
    })
  };
}
