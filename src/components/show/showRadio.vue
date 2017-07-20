<style  lang = "stylus" ></style>
<template>
  <section>
      <h3>单选</h3>
<showMark>
<textarea  class="ol-mark-text">
```html  
<ol-RadioGroup v-model="radio">
  <ol-radio  label="1">备选1</ol-radio>
  <ol-radio  label="2">备选2</ol-radio>
  <ol-radio  label="3" :disabled='true'>备选3</ol-radio>
</ol-RadioGroup>

export default {
    components: { 
    olRadio,
    olRadioGroup
  },
  data () {
    return {
      radio: '1'
    }
  },
  methods: {
  }
}
```
</textarea>
<ol-RadioGroup v-model="radio">
  <ol-radio  label="1">备选1</ol-radio>
  <ol-radio  label="2">备选2</ol-radio>
  <ol-radio  label="3" :disabled='true'>备选3</ol-radio>
</ol-RadioGroup>
</showMark>

<h3>API</h3>
<h4>ol-RadioGroup </h4>
<document>
<textarea  class="ol-mark-document">
| 参数          | 说明                             | 类型    |  可选值           | 默认值|
| ------------- | ------------- ------------------ | ------- | ----------------  |  ---- |
|  v-model      |  v-model是默认单选按钮的默认选择 | string  |                   | ---   |
</textarea>
</document>

<h4>ol-radio </h4>
<document>
<textarea  class="ol-mark-document">
| 参数          | 说明                             | 类型    |  可选值           | 默认值|
| ------------- | ------------- ------------------ | ------- | ----------------  |  ---- |
|  label        |  radio 的值                      | string  |                   | ---   |
|  :disable     |  是否禁用                        | Boolean |                   |false  |
</textarea>
</document> 

  </section>
</template>
<script>
import { olRadio, olRadioGroup }from '../index';
import  showMark from '../showMark.vue';
import  document from '../document.vue';
export default {
  components: { 
    olRadio,
    olRadioGroup,
    showMark,
    document
  },
  data () {
    return {
      radio: '2'
    }
  },
  methods: {
  }
}
</script>