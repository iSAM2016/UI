<template>
    <div class="ex-content">
        <ol-button type="info" @click.native="opmodel">model</ol-button>
    </div>
</template>
<script>
import { olModal, olButton }from '../index'
export default {
    data () {
        return {
            data:1212
        }
    },
    components: {
        olModal,
        olButton
    },
    mounted() {
        
    },


    methods: {
        opmodel () {
            this.$Modal('title','非法操作',{
                    callBack: action => {
                        console.log(this.data);
                    }
                },
               {
                    text: '确定',//[按钮text]
                    type: '', //[按钮类型]
                    size: '', // [按钮尺寸]
                    color:'', // [按钮颜色]
             });
        }
    }
}
</script>