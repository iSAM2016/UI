<style  lang = "stylus" ></style>
<template>
    <section >
        <div style="height:50px"></div>

  <h3>tooltip</h3>
<showMark>
<textarea  class="ol-mark-text">
```html  

<ol-button type="primary">
    <ol-tooltip>这里是tooltip</ol-tooltip>
    鼠标移上来就会出现提示 按钮
</ol-button>

<span>
    <ol-tooltip>这里是tooltip</ol-tooltip>
    鼠标移上来就会出现提示
</span>
  
```
</textarea>
<ol-button type="primary">
    <ol-tooltip>这里是tooltip</ol-tooltip>
    鼠标移上来就会出现提示 按钮
</ol-button>
<span>
    <ol-tooltip>这里是tooltip</ol-tooltip>
    鼠标移上来就会出现提示
</span>
</showMark>
   
    </section>
</template>
<script>
import { olTooltip, olButton }from '../index'
import  showMark from '../showMark.vue'
  export default {
    components: { 
      olTooltip,
      olButton,
      showMark
    }
  }

</script>