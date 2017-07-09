<template>
<div>
<!-- 例子 -->
<h3>联机选择器</h3>
<showmark>
<textarea class="myshowmark">
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
</script>
```
<ol-cascader 
  :cascader="cascader">
</ol-cascader>
</textarea>
</showmark>

<!-- 接口 -->
<h3>接口</h3>
<h4>props</h4>
<document>
<textarea class="mydocument">
```html   
| 参数          | 说明                            |   类型  | 可选值               | 默认值 |     
| ------------- | ------------------------------- |-------- |--------------------- |--------|
| cascader      | 组件参数 详细看以下文档         |  object |                      |        |
```  

```html   
| 参数          | 说明                            |   类型  | 可选值               | 默认值 |     
| ------------- | ------------------------------- |-------- |--------------------- |--------|
| cascader      | 组件参数 详细看以下文档         |  object |                      |        |
```    
</textarea>
</document> 
</div>         
</template>
<script>
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
</script>