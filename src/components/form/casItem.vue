<template>
    <li :class="classes" @click="change">{{ data.label }}<i v-if="data.children && data.children.length" class="ivu-icon ivu-icon-ios-arrow-right"></i></li>
</template>
<script>
    export default {
        props: {
            data: Object,
            prefixCls: String,
            tmpItem: Object
        },
        computed: {
            classes () {
                return [
                   
                ]
            }
        },
        methods:{
          change(){
            this.$emit("click")
          }
        }
    }
</script>