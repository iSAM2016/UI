<style  lang = "stylus" >
</style>
<template>
  <section>
  <h3>switch</h3>
<showMark>
<textarea  class="ol-mark-text">
```html  
 <ol-switch v-model="checked" :size='size' @change="change"/>
  
```
</textarea>
<ol-switch v-model="checked" :size='size' @change="change"/>
</showMark>

<h3>API</h3>
<document>
<textarea  class="ol-mark-document">
| 参数          | 说明          | 类型    |  可选值                            | 默认值|
| ------------- | ------------- | ------- | -----------------------------------| ----- |
| v-model       |  是否被选中   | Boolean |                                    | false |
| :size         |  尺寸         | string  |   small  default                   |default|
</textarea>
</document> 

<h4>event</h4>
<document>
<textarea class="ol-mark-document">
| 事件名称      | 说明                            | 回调参数              |      
| ------------- | ------------------------------- |-----------------------|
| change        | 点击改变                        | 改变的数值            |             
</textarea>
</document>
  </section>
</template>
<script>
import { olSwitch }from '../index';
import  showMark from '../showMark.vue'
import  document from '../document.vue'
  export default {
    components: { 
      olSwitch,
      showMark,
      document
    },
    data () {
      return {
        "checked": false, "size": "small" 
      }
    },
    methods: {
      change(value){
        console.log(value)
      }
    }
  }

</script>