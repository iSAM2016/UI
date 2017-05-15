<template>
    <div class="ol-checkbox-group">
        <slot></slot>
    </div>
</template>
<script>
import {catIn, MIXIN} from '../utils.js'
export default {
    name: 'olCheckBoxGroup',
    componentName: 'olCheckBoxGroup',
    mixins: [MIXIN],
    data() {
        return {
            checkDatas: []
        }
    },
    props: {
    },
    components: {
    },
    methods: {
        addDatas(obj, key) {
            if (this.checkDatas.length === 0) {
                this.checkDatas.push(obj);
                return;
            }
            let isSave = true;
            this.checkDatas.forEach(item => {
                if (item[key] !== undefined) { // 存在数据 
                    item[key] = obj[key];
                    isSave = false;
                }
            })
            if (isSave)  {
                this.checkDatas.push(obj);
            }
            this.$emit('changing', obj, this); // 发送到父组件
            this.dispath('olForm', 'changeOlFromValue', [this, this.checkDatas]); //发送到表单
        }
    }
}
</script>