<style  lang = "stylus" >
</style>
<template>
  <section>
  <h3>进度条</h3>
<showMark>
<textarea  class="ol-mark-text">
```html  
 <ol-progress  :pregress = pregress @change="change"/>
   export default {
    components: { 
      olProgress
    },
    data () {
      return {
        pregress:{ "start": 10},
      }
    },
    methods: {
      change(value){
        this.value = value
      }
    }
  
```
</textarea>
 <ol-progress  :pregress = pregress @change="change"/>
</showMark>


<h3>API</h3>
<h4>props</h4>
<document>
<textarea  class="ol-mark-document">
| 参数          | 说明          | 类型    |  可选值                                        | 默认值|
| ------------- | ------------- | ------- | ---------------------------------------------- | ----- |
| pregress      | 见下表        | object  |                                                | ---   |
</textarea>
</document> 

<h4>pregress</h4>
<document>
<textarea  class="ol-mark-document">
| 参数          | 说明          | 类型    |  可选值                                        | 默认值|
| ------------- | ------------- | ------- | ---------------------------------------------- | ----- |
| start         | 开始的位置    | number  |                                                | ---   |
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
import { olProgress }from '../index'
import  showMark from '../showMark.vue'
import  document from '../document.vue'
export default {
  components: { 
    olProgress,
    showMark,
    document
  },
  data () {
    return {
      pregress:{ "start": 10},
    }
  },
  methods: {
    change(value){
      this.value = value
    }
  }
}

</script>