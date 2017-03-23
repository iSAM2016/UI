const changeIndex = (arr) => {
    arr.forEach((item, index) => {
        item.index = index + 1
    })
}
export const preview = (Vue, ONLY_SINGLR_OBJECT) =>　{
    Vue.directive('preview', {
        bind: function(el, binding, vnode) {
            let previewItem = {
                title: '',
                el: el,
                index: 0,
                src: binding.value
            }
            ONLY_SINGLR_OBJECT.PREVIEW.ALL_PREVIEW.list.push(previewItem);
            changeIndex(ONLY_SINGLR_OBJECT.PREVIEW.ALL_PREVIEW.list);
            el.addEventListener('click', (e) => {
                e.stopPropagation()
                ONLY_SINGLR_OBJECT.PREVIEW.ALL_PREVIEW.show = true
                ONLY_SINGLR_OBJECT.PREVIEW.ALL_PREVIEW.current = previewItem
            }, false)
        },
        update: function() {

        },
        unbind: function() {

        }
    })
}
