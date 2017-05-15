<template>
   <form @blur="" ><slot></slot> <!-- {{ model }} --></form>
</template>
<script>
/**
 * modal            元数据
 * labelPosition    表单域标签的位置
 * inline           行内表单模式
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
        },
        inline: {
            type: Boolean,
            default: () => false
        }
    },
    data () {
        return {
           
        }
    },
    components: {
    },
    mounted() {
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
        },
        form(e){
            console.log(e)
        }
    }
}
</script>
<style lang = "stylus">
</style>