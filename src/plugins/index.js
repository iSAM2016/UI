// 【声明插件】——【写插件】——【注册插件】——【使用插件】
import Vue from 'vue'

export default {
    install: function (Vue, options) {
        Vue.prototype.$myMethod = function (val) {
            if (typeof val === 'number') {
                return val * 2;
            } else if (!isNaN(Number(val))) {
                return Number(val) * 2;
            } else {
                return null
            }
        }
    }
};