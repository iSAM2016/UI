<template>
  <section>
  <!-- 例子 -->
<h3>组件</h3>
<showmark>
<textarea class="myshowmark">
```html
<ol-alert :alerts='alerts'></ol-alert>
```
<ol-alert :alerts='alerts'></ol-alert>
</textarea>
</showmark>

<!-- 接口 -->
<h3>API</h3>
<document>
<textarea class="mydocument">
```html   
| 参数          | 说明                            |   类型  | 可选值               | 默认值 |     
| ------------- | ------------------------------- |-------- |--------------------- |--------|
| alerts        | 警示列表数组{show,state...}     |  array  |                      |        |
| show          | 是否显示                        |  boolean|                      |        |
| state         | 警示类型                        |  string |                      |        |
| title         | 警示标题                        |  string |                      |        |
| content       | 警示内容                        |  string |                      |        |
```   
</textarea>
</document>
  </section>
</template>
<script>
import { olAlert } from '../index'
  export default {
    components: { 
     olAlert
    },
    data () {
        return {
            alerts: [{
                show: true,
                state: 'success',
                title: '成功提示的文案',
                content: '成功提示的辅助性文字介绍成功提示的辅助性文字介绍成功提示的辅助性文字介绍成功提示的辅助性文字介绍'
            }, {
                show: true,
                state: 'info',
                title: '提示的文案',
                content: ''
            }, {
                show: true,
                state: 'warning',
                title: '警告提示的文案',
                content: ''
            }, {
                show: true,
                state: 'failed',
                title: '失败提示的文案',
                content: ''
            }]
        }
    
    }
  }

</script>