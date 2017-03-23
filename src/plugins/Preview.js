import {
    olPreview
} from '../components/index.js'
import  { preview } from '../components/directive/preview.js'
export default (Vue, ONLY_SINGLR_OBJECT) => {
    Vue.set(ONLY_SINGLR_OBJECT.PREVIEW, 'ALL_PREVIEW', {
        show: false,
        current: {
            title: '',
            src: ''
        },
        list: []
    })
    Vue.component('ol-preview', olPreview);
    preview(Vue, ONLY_SINGLR_OBJECT);
}