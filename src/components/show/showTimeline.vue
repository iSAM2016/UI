<style  lang = "stylus" >
</style>
<template>
  <section >

 <h3>timeline</h3>
<showMark>
<textarea  class="ol-mark-text">
```html  
  <ol-timeline :timeline="timeline"></ol-timeline>

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
```
</textarea>
<ol-timeline :timeline="timeline"></ol-timeline>
</showMark>


<h3>API</h3>
<h4>props</h4>
<document>
<textarea  class="ol-mark-document">
| 参数          | 说明          | 类型    |  可选值                            | 默认值|
| ------------- | ------------- | ------- | -----------------------------------| ----- |
| :timeline     |  见下表       | array   |                                    | ---   |
</textarea>
</document> 


<h4>timeline</h4>
<document>
<textarea  class="ol-mark-document">
| 参数          | 说明          | 类型    |  可选值                            | 默认值|
| ------------- | ------------- | ------- | -----------------------------------| ----- |
| state         |  类型         | string  |   warning failed successs info     | ---   |
| text          |  内容         | string  |                                    | ---   |
</textarea> 
</document> 

  </section>
</template>
<script>
import { olTimeline }from '../index'
import  showMark from '../showMark.vue'
import  document from '../document.vue'
  export default {
    components: { 
        olTimeline,
        showMark,
        document
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