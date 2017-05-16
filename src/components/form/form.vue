<template>
    <form @blur="" @chang="">
        <slot></slot>
    </form>
</template>
<script>
/**
 * modal            元数据
 * labelPosition    表单域标签的位置
 * inline           行内表单模式
 * rules            表单验证规则
 * validate 对整个表单进行校验的方法    Function(callback: Function(boolean))
   validateField   对部分表单字段进行校验的方法   Function(prop: string, callback: Function(errorMessage: string)) 仅限于自定义函数验证
 */
function broadcast(componentName, eventName, params) {
    this.$children.forEach(child => {
        var name = child.$options.componentName;
        if ((name === componentName) && (child.prop === params[0])) {
            child.$emit.apply(child, [eventName].concat(params))
        } else {
            broadcast.apply(child, [componentName, eventName].concat([params]))
        }
    })
}
import {catIn} from '../utils.js'
export default {
    name: 'olForm',
    componentName: 'olForm',
    props: {
        labelPosition: {
            type: String,
            default: () => 'left'
        },
        model: {
            type: Object,
            required: true
        },
        inline: {
            type: Boolean,
            default: () => false
        },
        rules: {
            type: Object,
            default: () => {}
        }
    },
    data() {
        return {
            callback: '',
            item: "" // 正在运行rules 的key值的数组中的一个
        }
    },
    mounted() {
        console.log(this.$parent.form2)
    },
    created() {
        this.$on('changeOlFromValue', this.changeOlFromValue)
    },
    methods: {
        // 子组件传来的数据
        changeOlFromValue(child, value) {
            this.model[child.$parent.prop] = value
        },
        validate(callback) { // 验证
            let rulesKeysArr = Object.keys(this.rules);
            let isAllRight = true;
            let self = this;
            this.callback = callback;
            /**
             * 数据验证规则
             * 1  required   非空验证
             * 2  max min    规则验证
             */
            rulesKeysArr.forEach(item => {
                let valu = this.model[item];
                let rulesArr = this.rules[item]
                let isSignal = true;
                this.item = item;
                if (rulesArr.length > 2 ) {
                    throw Error ('请填写两个以内的规则');
                    isAllRight = false;
                    isSignal = false;
                    return
                }

                if (rulesArr[0].required && (rulesArr[0].validator !== void(0))) { // 自定义
                    let isOverInfor = rulesArr[0].validator.call(self.$parent, valu, (infor) => {
                        return infor;
                    });
                    if (isOverInfor !== undefined) { // 没有通过
                        this.pushMessage(isOverInfor);
                        isAllRight = false;
                    } else {
                        this.pushMessage('', true);
                    }
                    return;
                }

                if (rulesArr[0].required && valu ==='') { // 要求必填
                    this.pushMessage(rulesArr[0].message);
                    isAllRight = false;
                    isSignal = false;
                    return;
                }

                if (rulesArr[0].required && (Object.prototype.toString.call(valu) === '[object Array]')) {
                    if (valu.length === 0) {
                        this.pushMessage(rulesArr[0].message);
                        isAllRight = false;
                        isSignal = false;
                        return;
                    }
                }

                if (rulesArr.length == 2) {
                    if (rulesArr[1]['min'] === undefined || rulesArr[1]['max'] === undefined) {
                        throw Error ('缺少关键字min 或 max');
                        isAllRight = false;
                        isSignal = false;
                        return;
                    } else {
                        if (rulesArr[0].required && (!((valu.length >= rulesArr[1]['min'])  &&  (valu.length <= rulesArr[1]['max'])))) {
                            this.pushMessage(rulesArr[1].message);
                            isAllRight = false;
                            isSignal = false;
                            return;
                        }
                    }
                }
                this.pushMessage('', true);
            })
            if (isAllRight) {
                this.callback && this.callback(true);
            } else {
                this.callback && this.callback(false);
            }
        },
        validateField(prop, callback) {
            let rule = this.rules[prop][0];
            let value = this.model[prop];
            let self = this;
            if (rule.required && (rule.validator !== void(0))) { // 自定义
                    let isOverInfor = rule.validator.call(self.$parent, value, (infor) => {
                        return infor;
                    });

                    if (isOverInfor !== undefined) { // 没有通过
                        broadcast.call(this, 'olFormItem', 'showFormItemMessage', [prop, isOverInfor]);
                    } else {
                          broadcast.call(this, 'olFormItem', 'showFormItemMessage', [prop, isOverInfor, true]);
                    }
                    return;
                }
        },
        pushMessage(message, isdieError) {
            broadcast.call(this, 'olFormItem', 'showFormItemMessage', [this.item, message, isdieError]);
        },
        resetFields() {
            this.$el.reset()
        }
    }
}
</script>
<style lang = "stylus"></style>