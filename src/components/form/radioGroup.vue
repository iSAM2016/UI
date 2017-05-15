<template>
    <div class="ol-radio-group">
       <slot></slot>
    </div>
</template>
<script>
import {catIn, MIXIN} from '../utils.js'
export default {
    props: {
        value: String,
        required: true
    },
    mixins: [MIXIN],
    data() {
        return {
            activeNames: []
        }
    },
    mounted() {
        this.activeNames.push(this.value);
    },
    methods: {
        addItem(item) {
            this.activeNames.length = 0;
            this.activeNames.push(item);
            this.$emit('changing', this.activeNames[0], this); // 发送到父组件
            this.dispath('olForm', 'changeOlFromValue', [this, this.activeNames[0]]); //发送到表单
        }
    }
}
</script>