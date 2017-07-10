<style  lang = "stylus" >
</style>
<template>
  <section>
<h3>组件</h3>
<h4>日期选择器</h4>
<showMark>
<textarea class="ol-mark-text">
```html
 <ol-datepick 
    :value = 'value'
    @change = "change" />
    
 export default {
    components: { 
      olDatepick,
      showMark,
      document
    },
    data () {
      return {
        value:{
          chose: true,
          section: false
        },
        value1:{
          chose: false,
          section: true
        }
      }
    },
    methods: {
      change(date,dates){
        console.log(date)
      }
    }
  }

```
</textarea>
   <ol-datepick 
    :value = 'value'
    @change = "change" 
    :style="{marginBottom: '4px'}"/>

  <ol-datepick 
    :value = 'value1'
    @change = "change" />
</showMark>

<!-- 接口 -->
<h3>说明文档</h3>
<h4>props</h4>
<document>
<textarea class="ol-mark-document">
| 参数          | 说明                            |   类型  | 可选值               | 默认值  |     
| ------------- | ------------------------------- |-------- |--------------------- |-------- |
| value         |  看以下文档                     |  object |                      |    --   |
</textarea>
</document>


<h4>value</h4>
<document>
  <textarea class="ol-mark-document">
  | 参数          | 说明                            |   类型  | 可选值               | 默认值  |     
  | ------------- | ------------------------------- |-------- |--------------------- |-------- |
  | chose         |  是否显示年月日导航框           |  boolean|                      |    --   |
  | section       |  是否需要操纵按钮               |  boolean|                      |    --   |
  </textarea>
</document>

<h4>event</h4>
<document>
  <textarea class="ol-mark-document">
  | 事件名称      | 说明                            | 回调参数              |      
  | ------------- | ------------------------------- |-----------------------|
  | change        | 选择日期触发的事件              | 返回时间节点          |             
  </textarea>
</document>


</section>
</template>
<script>
import{ olDatepick }from '../index';
import showMark from '../showMark.vue';
import document from '../document.vue';
  export default {
    components: { 
      olDatepick,
      showMark,
      document
    },
    data () {
      return {
        value:{
          chose: true,
          section: false
        },
        value1:{
          chose: false,
          section: true
        }
      }
    },
    methods: {
      change(date,dates){
        console.log(date)
      }
    }
  }

</script>