<template>
    <div class="ex-content">
<h3>模拟框</h3>
<showMark>
<textarea class="ol-mark-text">
```html
    <ol-button type="info" @click.native="opmodel">model</ol-button>

export default {
    data () {
        return {
            data:1212
        }
    },
    components: {
        olModal,
        olButton,
        showMark,
        document
    },
    mounted() {
    },
    methods: {
        opmodel () {
            this.$Modal('确定退出吗?','').then(()=>{
            });
           /* {
                    type: '', //[按钮类型]
                    size: '', // [按钮尺寸]
                    color:'', // [按钮颜色]
             }*/
        }
    }

```
</textarea>
<ol-button type="info" @click.native="opmodel">model</ol-button>
</showMark>
</div>
</template>

 
<!-- 接口 -->
<h3>说明文档</h3>
<h4>API</h4>
<document>
<textarea class="ol-mark-document">
| 参数          | 说明              |  类型   | 可选值                                        | 默认值  |     
| ------------- | ------------------| ------  |-------------------------------------------    |-------- |
| content       |  弹窗内容         | string  |                                               | content |    
| title         |  弹窗标题         | string  |                                               | 标题    |
| options       |  props 见下表     | object  |                                               | --      |

</textarea> 
</document> 

<h4>options</h4>
<document>
<textarea class="ol-mark-document">
| 参数          | 说明              |  类型   | 可选值                                        | 默认值  |     
| ------------- | ------------------| ------  |-------------------------------------------    |-------- |
| size          |  按钮尺寸         | string  | small   large  default                        |  default|
| color         |  按钮颜色         | string  |                                               |  --     |
</textarea> 
</document> 

<script>
import { olModal, olButton }from '../index';
import showMark from '../showMark.vue';
import document from '../document.vue';
export default {
    data () {
        return {
            data:1212
        }
    },
    components: {
        olModal,
        olButton,
        showMark,
        document
    },
    mounted() {
    },
    methods: {
        opmodel () {
            this.$Modal('确定退出吗?','我是title')/*.then(()=>{
            });*/
           /* {
                    type: '', //[按钮类型]
                    size: '', // [按钮尺寸]
                    color:'', // [按钮颜色]
             }*/
        }
    }
}
</script>


