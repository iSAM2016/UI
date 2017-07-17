<style  lang = "stylus" ></style>
<template>
  <section>
<h3>选择框单独使用</h3>
<showMark>
<textarea class="ol-mark-text">
```html
<ol-checkbox label="我已阅读用户协议" name="read" @changing='show'></ol-checkbox>

<ol-checkbox label="同意" name='examination' :checked="true" @changing='show'></ol-checkbox>
```
</textarea>
  
<ol-checkbox label="我已阅读用户协议" name="read" @changing='show'></ol-checkbox>
<ol-checkbox label="同意" name='examination' :checked="true" @changing='show'></ol-checkbox>
</showMark>


<h3>选择框在表单使用</h3>
<showMark>
<span>选择框在表单使用，不要使用changing方法</span>
<textarea class="ol-mark-text">
```html
<ol-checkbox-group>
<ol-checkbox label="我已阅读用户协议" name="read"></ol-checkbox>
<ol-checkbox label="同意" name='examination'></ol-checkbox>
<ol-checkbox label="中国" name='china' :checked="true"></ol-checkbox>
</ol-checkbox-group>
```
</textarea>
 <ol-checkbox-group>
      <ol-checkbox label="我已阅读用户协议" name="read"></ol-checkbox>
      <ol-checkbox label="同意" name='examination'></ol-checkbox>
      <ol-checkbox label="中国" name='china' :checked="true"></ol-checkbox>
    </ol-checkbox-group>
</showMark>

<!-- 接口 -->
<h3>说明文档</h3>
<h4>API</h4>
<document>
<textarea class="ol-mark-document">
| 参数          | 说明                            |   类型  | 可选值               | 默认值  |     
| ------------- | ------------------------------- |-------- |--------------------- |-------- |
| label         |  选择框的标题                   |  string |                      |    --   |
| checked       |  是否选择                       |  boolean| true,false           |  false  |
| disabled      |  是否禁用                       |  boolean| true,false           |  false  |
</textarea>
</document>

<h4>event</h4>
<document>
<textarea class="ol-mark-document">
| 事件名称      | 说明                            | 回调参数              |      
| ------------- | ------------------------------- |-----------------------|
| changing      | 选中选择框触发的事件            | 返回选择框的false true|             
</textarea>
</document>


  </section>
</template>
<script>
import {olCheckbox} from '../index';
import showMark from '../showMark.vue';
import document from '../document.vue';
  export default {
    data () {
      return {
      }
    },
    components: {
      olCheckbox,
      showMark,
      document
    },
    methods: {
      show(obj){
        console.log(obj)
      }
    }
  }
</script>