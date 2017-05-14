<style lang = "stylus">

</style>
<template>
    <div class="ol-select-option" :class="{'disabled': disabled, 'selected': selected}"   @click="setValue()">
        {{ label }}
    </div>
</template>
<script>
import {catIn} from '../utils.js'
export default {
   props: {
        label: {
            type: String,
            required: true
        },
        value: {
            type: String,
            required: true
        },
        disabled: {
            type: Boolean,
            default: () => false
        },
    },

    data () {
        return {
        }
    },
    mounted(){
    },
    computed: {
        selected() {
            let isSelect = '';
            this.$parent.selectedArr.forEach(item => {
                isSelect = (item.label=== this.label && item.value === this.value); 
            })
            return isSelect;
        }
    },
    methods: {
        setValue() {
            if (!this.disabled) {
                this.$parent.selectedArr.length = 0;
                this.$parent.selectedArr.push({label: this.label, value: this.value});
            }
        }
    },
}
</script>