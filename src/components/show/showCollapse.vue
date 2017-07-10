<template>
<section>

<h3>组件</h3>
<h4>collapse</h4>
<showMark>
<textarea class="ol-mark-text">
```html
<ol-collapse v-model="activeNames" >
        <ol-collapse-item title="自由 " name="1">
            <div>自由content</div>
            <div>我喜欢你</div>
        </ol-collapse-item>
        <ol-collapse-item title="民主 " name="2">
            <div>民主</div>
            <div>民主</div>
        </ol-collapse-item>
        <ol-collapse-item title="富强 " name="3">
            <div>富强</div>
            <div>去抢</div>
        </ol-collapse-item>
        <ol-collapse-item title="团结 " name="4">
            <div>团结</div>
        </ol-collapse-item>
    </ol-collapse>
```
</textarea>
<ol-collapse v-model="activeNames" >
        <ol-collapse-item title="自由 " name="1">
            <div>自由content</div>
            <div>我喜欢你</div>
        </ol-collapse-item>
        <ol-collapse-item title="民主 " name="2">
            <div>民主</div>
            <div>民主</div>
        </ol-collapse-item>
        <ol-collapse-item title="富强 " name="3">
            <div>富强</div>
            <div>去抢</div>
        </ol-collapse-item>
        <ol-collapse-item title="团结 " name="4">
            <div>团结</div>
        </ol-collapse-item>
    </ol-collapse>
</showMark>

<h4>alerts</h4>
<document>
<textarea class="ol-mark-document">
| 参数          | 说明                            |   类型  | 可选值               | 默认值 |     
| ------------- | ------------------------------- |-------- |--------------------- |--------|
| activeNames   | 默认显示的项目，内容为项目编号  |  array  |                      |  --    |
| title         | 项目标题                        |  string |                      |    --  |
| name          | 项目编号                        |  string |                      |  --    |
</textarea>
</document>
</section>

</template>
<script>
import { olCollapse }from '../index'
import showMark from '../showMark.vue';
import document from '../document.vue';
  export default {
    components: { 
        olCollapse,
        showMark,
        document
    },

    data () {
        return {
          activeNames: ['1']
        }
    }
  }
</script>