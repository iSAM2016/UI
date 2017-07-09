<style  lang = "stylus" ></style>
<template>
  <section>
<h3>选择框单独使用</h3>
<showMark>
<textarea class="ol-mark-text">
```html
<ol-checkbox label="我已阅读用户协议" name="read" @changing='show'></ol-checkbox>

<ol-checkbox label="同意" name='examination' :checked="true" @changing='show'>
```
</textarea>
  
</ol-checkbox><ol-checkbox label="我已阅读用户协议" name="read" @changing='show'></ol-checkbox>
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






    
  </section>
</template>
<script>
import {olCheckbox} from '../index';
import  showMark from '../showMark.vue';
import  document from '../document.vue';
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