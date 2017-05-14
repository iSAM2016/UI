<template>
   <form ><slot></slot> {{ model }}</form>
</template>
<script>
/**
 * formItem  Attributes
 * [prop]       表单的model字段      string
 * label        标签文本             string
 * label-width  表单区域标签的宽度   string
 * required     是否必填
 */
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
        }
    },
    data () {
        return {
           
        }
    },
    components: {
    },
    mounted(){
        console.log(this.$props.model)
    },
    created() {
        this.$on('changeOlFromValue', this.changeOlFromValue)
    },
    beforeDestroy () {
       
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
        changeOlFromValue(child, value) {
            this.model[child.$parent.prop] = value
        }
    }
}
</script>
<style lang = "stylus">

</style>