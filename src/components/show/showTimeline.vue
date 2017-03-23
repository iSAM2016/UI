<style  lang = "stylus" >
 

</style>
<template>
  <section >
    <ol-timeline :timeline="timeline"></ol-timeline>
  </section>
</template>
<script>
import { olTimeline }from '../index'

  export default {
    components: { 
     olTimeline
    },

    data () {
        return {
            timeline: [{
                state: 'warning',
                text: '连接服务器 2016-06-16 20:01:12'
            },
            {   state:'info', 
                text: '准备上传文件 2016-06-16 20:01:13'
            },
            {   state: "failed",
                text: '上传失败 2016-06-16 20:01:14'
            },
            {   state: "success",
                text: '上传成功 2016-06-16 20:01:14'
            },
            ]
        }
    
    }
  }

</script>