<style  lang = "stylus" >
</style>
<template>
  <section>

      <h3>switch</h3>
<showMark>
<textarea  class="ol-mark-text">
```html  
  <ol-tag value="tag"></ol-tag>
  <ol-tag type="info" value="tag1"></ol-tag>
  <ol-tag type="warning" value="tag2"></ol-tag>
  <ol-tag type="success" value="tag3"></ol-tag>
  <ol-tag type="danger" value="tag4" icon=""></ol-tag>
  
```
</textarea>
<ol-tag value="tag"></ol-tag>
<ol-tag type="info" value="tag1"></ol-tag>
<ol-tag type="warning" value="tag2"></ol-tag>
<ol-tag type="success" value="tag3"></ol-tag>
<ol-tag type="danger" value="tag4" icon=""></ol-tag>
</showMark>


<h3>API</h3>
<document>
<textarea  class="ol-mark-document">
| 参数          | 说明       | 类型    |  可选值                                    | 默认值|
| ------------- | ---------- | ------- | -----------------------------------------  | ----- |
| type          |  类型      | string  |  primary ghost warning danger success info |primary|
| value         |  内容      | string  |                                            |  ---  |
| icon          |  icon      | string  |                                            |  ---  |
</textarea>
</document> 
   
  </section>
</template>
<script>
import { olTag }from '../index'
import  showMark from '../showMark.vue'
import  document from '../document.vue'
  export default {
    components: { 
      olTag,
      showMark,
      document
    },
    data () {
      return {
        totalTime: 0,
      }
    },
  }

</script>