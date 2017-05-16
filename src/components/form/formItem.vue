<template>
    <div class="ol-form-item" :class="{'ol-form-inline': isInline}">
        <label class="ol-form-item__label" :style="{width: labelWidth + 'px'}" :class="[labelPosition]">{{ label }}</label>
        <div class="ol-form-item__content" :style="{marginLeft: (labelPosition === 'top' ? 0 : labelWidth) + 'px'}">
            <slot></slot>
            <transition name="fade">
                <div class="ol-from-item--message" v-show="isshow"> {{ message }}</div>
            </transition>
        </div>
    </div>
</template>
<script>
/**
 * formItem  Attributes
 * [prop]       表单的model字段,验证使用      string 
 * label        标签文本             string
 * label-width  表单区域标签的宽度   string
 *
 * 
 * required     是否必填
 * rules        规则                  object
 * error        提示错误信息          string
 * showMessage                        boolean
 */
import {catIn} from '../utils.js'
export default {
    name: 'formItem',
    componentName: 'olFormItem',
    props: {
        label: {
            type: String,
        },
        labelWidth: {
            type: Number,
            default: () => 80
        },
        prop: {
            type: String,
            default: () => ''
        }

    },
    data () {
        return {
           isInline: '', // 行内显示
           isshow: false,
           message: ''
        }
    },
    computed: {
        labelPosition() {
            let position = '';
            switch(this.$parent.labelPosition) {
                case 'top': 
                    position = 'top';
                break;
                case 'right': 
                    position = 'right';
                break;
                default:
                    position = '';
                break    
            }
            return position;
        }
    },
    components: {
    },
    mounted(){
       this.isInline = this.$parent.inline;
    },
    created() {
        this.$on('showFormItemMessage', this.showFormItemMessage)
    },
    methods: {
        hide ($event) {
            if(!catIn($event.target, this.$el)) {
                this.show = false
            }
        },
        showAction () {
            this.show = !this.show;
        },
        showFormItemMessage(prop, message, isAllright){
            if (isAllright === undefined) {
                this.isshow = true;
                this.message = message;
            } else {
                this.isshow = false;
                this.message = '';
            }
        }
    }
}
</script>
<style lang = "stylus">
.ol-form-item{
    position: relative;
    margin-bottom: 1.6rem;
    vertical-align: middle;
}
.ol-form-item.ol-form-inline{
   display: inline-block;
}
.ol-form-item__label{
    float: left;
    text-align: left;
    font-size: 1rem;
    line-height: 1.2;
    color: #333;
    padding: 11px 12px 11px 0;
    &.top{
        display: inline-block; 
        float: none;
    }
    &.right{
        text-align: right
    }
}
.ol-form-item__content{
    min-width: 13rem;
    position: relative;
    line-height: 2.5;
    font-size: 1rem
}
.ol-from-item--message{
    position: absolute;
    font-size: 12px;
    top: 36px;
    color: red
}
.fade-enter-active, .fade-leave-active {
  transition: all .3s;
}
.fade-enter, .fade-leave-active {
  opacity: 0;
  transform: translate3d(0, -.2rem, 0)
}

</style>