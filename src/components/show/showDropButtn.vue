<style  lang = "stylus" ></style>
<template>
  <section>
<h3>下拉按钮</h3>
<h4>普通</h4>
<showMark>
<textarea class="ol-mark-text">
```html
<ol-drop-button text="操作">
  <ol-button>编辑</ol-button>
  <ol-button>审核</ol-button>
  <ol-button>删除</ol-button>
</ol-drop-button>  
```
</textarea>
<ol-drop-button text="操作">
  <ol-button>编辑</ol-button>
  <ol-button>审核</ol-button>
  <ol-button>删除</ol-button>
 </ol-drop-button>  
</showMark>

<h4>不同类型</h4>
<showMark>
<textarea class="ol-mark-text">
```html
<ol-drop-button type="info" text="操作">
  <ol-button>编辑</ol-button>
  <ol-button>审核</ol-button>
  <ol-button>删除</ol-button>
</ol-drop-button>    
```
</textarea>
<ol-drop-button type="info" text="操作">
  <ol-button>编辑</ol-button>
  <ol-button>审核</ol-button>
  <ol-button>删除</ol-button>
</ol-drop-button>  
</showMark>

<h4>禁用</h4>
<showMark>
<textarea class="ol-mark-text">
```html
<ol-drop-button type="disabled" text="操作" :disabled="true">
  <ol-button>编辑</ol-button>
  <ol-button>审核</ol-button>
  <ol-button>删除</ol-button>
</ol-drop-button>    
```
</textarea>
<ol-drop-button type="disabled" text="操作" :disabled="true">
  <ol-button>编辑</ol-button>
  <ol-button>审核</ol-button>
  <ol-button>删除</ol-button>
</ol-drop-button>
</showMark>

 
<!-- 接口 -->
<h3>说明文档</h3>
<h4>API</h4>
<document>
<textarea class="ol-mark-document">
| 参数          | 说明              |  类型   | 可选值                                        | 默认值  |     
| ------------- | ------------------| ------  |-------------------------------------------    |-------- |
| type          |  下拉按钮的类型   | string  |  default success primary danger info warning  |default  |    
| text          |  下拉按钮的文案   | string  |                                               |default  |
| disabled      |  是否禁用         | boolean | true,false                                    |  false  |
</textarea> 
</document>       
   
  </section>
</template>
<script>
import {olButton, olDropButton  }from '../index'
import  showMark from '../showMark.vue';
import  document from '../document.vue';
  export default {
    components: { 
      olButton,
      olDropButton,
      showMark,
      document
    },
    ready() {
        console.log(this.$route.auth + "user")
    },
    data () {
      return {
        totalTime: 0,
      }
    },
  }

</script>