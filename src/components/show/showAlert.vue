<style  lang = "sass" >
 

</style>
<template>
  <section >
    <ol-alert :alerts='alerts'></ol-alert>

  </section>
</template>
<script>
import { olAlert }from '../index'

  export default {
    components: { 
     olAlert
    },

    data () {
        return {
            alerts: [{
                show: true,
                state: 'success',
                title: '成功提示的文案',
                content: '成功提示的辅助性文字介绍成功提示的辅助性文字介绍成功提示的辅助性文字介绍成功提示的辅助性文字介绍'
            }, {
                show: true,
                state: 'info',
                title: '提示的文案',
                content: ''
            }, {
                show: true,
                state: 'warning',
                title: '警告提示的文案',
                content: ''
            }, {
                show: true,
                state: 'failed',
                title: '失败提示的文案',
                content: ''
            }]
        }
    
    }
  }

</script>