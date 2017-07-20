<style  lang = "stylus" >
.top{
  margin-top: 80px
}
</style>
<template>
  <section>

<h3>滑块</h3>
<showMark>
<textarea  class="ol-mark-text">
```html  
<ol-slider :value="slider" class="top" @change="change"/>
<ol-slider :value="slider1" class="top" />

export default {
    components: { 
      olSlider
    },
    data () {
      return {
        slider:{ "value": 0, "min": 10, "max": 100, "step": 0 },
        slider1:{ "value": 0, "min": 10, "max": 100, "step": 10 },
        value:0
      }
    },
    methods: {
      change(value){
        this.value = value
      }
    }
  }

```
</textarea>
<ol-slider :value="slider" class="top" @change="change"/>
<ol-slider :value="slider1" class="top" />
</showMark>


<h3>API</h3>
<h4>props</h4>
<document>
<textarea  class="ol-mark-document">
| 参数          | 说明          | 类型    |  可选值           | 默认值|
| ------------- | ------------- | ------- | ------------------| ----- |
| :value        | 见下表        | object  |                   | ---   |
</textarea>
</document> 


<h4>:value</h4>
<document>
<textarea  class="ol-mark-document">
| 参数          | 说明          | 类型    |  可选值           | 默认值|
| ------------- | ------------- | ------- | ------------------| ----- |
|  value        | 当前值        | number  |                   | ---   |
|  min          | 最小值        | number  |                   | ---   |
|  max          | 最大值        | number  |                   | ---   |
|  step         | 步值          | number  |                   | ---   |
</textarea>
</document> 

<h4>event</h4>
<document>
<textarea class="ol-mark-document">
| 事件名称      | 说明                            | 回调参数              |      
| ------------- | ------------------------------- |-----------------------|
| change        | 进度条的变化                    | 改变的数值            |             
</textarea>
</document>
  </section>
</template>
<script>
import { olSlider }from '../index';
import  showMark from '../showMark.vue';
import  document from '../document.vue';
  export default {
    components: { 
      olSlider,
      showMark,
      document
    },
    data () {
      return {
        slider:{ "value": 0, "min": 10, "max": 100, "step": 0 },
        slider1:{ "value": 0, "min": 10, "max": 100, "step": 10 },
        value:0
      }
    },
    methods: {
      change(value){
        this.value = value
      }
    }
  }

</script>