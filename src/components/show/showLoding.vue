<style  lang = "stylus" >
</style>
<template>
  <section>
      <h3>loading</h3>
<showMark>
<textarea  class="ol-mark-text">
```html  
  <ol-loding :color="color"></ol-loding>
  <ol-loding :color="color"></ol-loding>
  
```
</textarea>
  <ol-loding :color="color"></ol-loding>
  <ol-loding :color="color"></ol-loding>
</showMark>

<h3>API</h3>
<document>
<textarea  class="ol-mark-document">
| 参数          | 说明          | 类型    |  可选值                | 默认值|
| ------------- | ------------- | ------- | -----------------------| ----- |
| color         |  颜色         | string  |                        |#2db7f5|
</textarea>
</document> 

  </section>
</template>
<script>
import { olLoding }from '../index'
import  showMark from '../showMark.vue'
import  document from '../document.vue'
  export default {
    components: { 
      olLoding,
      showMark,
      document
    },
    data () {
      return {
          color: '#2db7f5'
      }
    },
  }

</script>