<template>
<div>
<!-- 例子 -->
<h3>联机选择器</h3>
<showMark>
<textarea class="ol-mark-text">
```html
<ol-cascader 
    :cascader="cascader">
</ol-cascader>


let options = [{
    // label 是级联选项展示值
    label: '中国',
    show:false,
    // value 是对象自定义属性
    value: 'china',
    // 也可以自定义其他属性
    children: [{show:false,
        value: 'sichuan',
        label: '四川',
        children: [{ show:false,
            value: 'chegndu',
            label: '成都'
        }, { show:false,
            value: 'deyang',
            label: '德阳'
        }]
    }]
},{
    label: '美国',
    value: 'usa',
    show:false,
    children: [{ show:false,
        value: 'sichuan',
        label: '纽约',
        children: [{ show:false,
            value: 'chegndu',
            label: '白宫'
        }, { show:false,
            value: 'deyang',
            label: '五角大楼'
        }]
    }]
}]
import { olCascader } from '../index.js'
export default {
    components: { 
     olCascader
    },
    data () {
        return {
            cascader: {
                options: options,
                valueArr: []
            }
        }
    }
}
```
</textarea>
<ol-cascader 
  :cascader="cascader">
</ol-cascader>
</showMark>

<!-- 接口 -->
<h3>接口</h3>
<h4>props</h4>
<document>
<textarea class="ol-mark-document">
| 参数          | 说明                            |   类型  | 可选值               | 默认值 |     
| ------------- | ------------------------------- |-------- |--------------------- |--------|
|:cascader      | 组件参数 详细看以下文档         |  object |                      |        |
</textarea>
</document> 

<h4>:cascader </h4>
<document>
<textarea class="ol-mark-document">
| 参数          | 说明                            |   类型  | 可选值               | 默认值 |     
| ------------- | ------------------------------- |-------- |--------------------- |--------|
|  options      | 组件参数 详细看以下文档         |  object |                      | ---    |
|  valueArr     | 选择的值                        |  array  |                      | ---    |
</textarea>
</document> 

<h4>options</h4>
<document>
<textarea class="ol-mark-document">
| 参数          | 说明                            |   类型  | 可选值               | 默认值 |     
| ------------- | ------------------------------- |-------- |--------------------- |--------|
|  label        |  标题                           |  string |                      | ---    |
|  show         |  是否显示                       |  Boolean|                      | true   |
|  children     |  子项（可以嵌套）见下表         |  array  |                      | ---    |
|  value        |  是对象自定义属性               |  string |                      | ---    |
</textarea>
</document> 

</div>         
</template>
<script>
let options = [{
    // label 是级联选项展示值
    label: '中国',
    show: false,
    // value 是对象自定义属性
    value: 'china',
    // 也可以自定义其他属性
    children: [{show:false,
        value: 'sichuan',
        label: '四川',
        children: [{ show:false,
            value: 'chegndu',
            label: '成都'
        }, { show:false,
            value: 'deyang',
            label: '德阳'
        }]
    }]
},{
    label: '美国',
    value: 'usa',
    show:false,
    children: [{ show:false,
        value: 'sichuan',
        label: '纽约',
        children: [{ show:false,
            value: 'chegndu',
            label: '白宫'
        }, { show:false,
            value: 'deyang',
            label: '五角大楼'
        }]
    }]
}]
import { olCascader } from '../index.js';
import  showMark from '../showMark.vue';
import  document from '../document.vue';
export default {
    components: { 
        olCascader,
        showMark,
        document
    },
    data () {
        return {
            cascader: {
                options: options,
                valueArr: []
            }
        }
    }
}
</script>