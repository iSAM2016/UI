<style  lang = "stylus" ></style>
<template>
    <section >
    <p>渲染分为数据渲染和组件渲染，如果使用form表单请看form 表单的例子</p>
  <h3>进度条</h3>
<showMark>
<textarea  class="ol-mark-text">
```html  
<ol-select :select="form.selectProvince"></ol-select>
<ol-select :select="form.selectProvince1"></ol-select>
<ol-select :select="form.selectProvince3"></ol-select>

export default {
    components: { 
     olSelect
    },
    data () {
      return {
        form: {
                selectProvince: {
                    multiple: true, // 是否多选
                    search: true,
                    key: 'selectProvince',
                    value: [],//value: 
                    options: [{
                        selected: true,
                        disabled: false,
                        value: '成都',
                        id: 1
                    }, {
                        selected: false,
                        disabled: false,
                        value: '北京',
                        id: 2
                    }, {
                        selected: false,
                        disabled: false,
                        value: '深圳',
                        id: 3
                    }]
                },
                  selectProvince1: {
                   
                    multiple: false, // 是否多选
                    search: false,
                    key: 'selectProvince',
                    value: [],//value: 
                    options: [{
                        selected: true,
                        disabled: false,
                        value: '成都',
                        id: 1
                    }, {
                        selected: false,
                        disabled: false,
                        value: '北京',
                        id: 2
                    }, {
                        selected: false,
                        disabled: true,
                        value: '深圳',
                        id: 3
                    }]
                },
                selectProvince3: {
                    disabled: true,
                    multiple: false, // 是否多选
                    search: false,
                    key: 'selectProvince',
                    value: [],//value: 
                    options: [{
                        selected: true,
                        disabled: false,
                        value: '成都',
                        id: 1
                    }, {
                        selected: false,
                        disabled: false,
                        value: '北京',
                        id: 2
                    }, {
                        selected: false,
                        disabled: true,
                        value: '深圳',
                        id: 3
                    }]
                }
            }
        }
    },
  }
```
</textarea>
<ol-select :select="form.selectProvince"></ol-select>
<ol-select :select="form.selectProvince1"></ol-select>
<ol-select :select="form.selectProvince3"></ol-select>
</showMark>

<h3>API</h3>
<h4>props</h4>
<document>
<textarea  class="ol-mark-document">
| 参数          | 说明          | 类型    |  可选值                                        | 默认值|
| ------------- | ------------- | ------- | ---------------------------------------------- | ----- |
| :select       | 见下表        | object  |                                                | ---   |
</textarea>
</document> 

<h4>:select</h4>
<document>
<textarea  class="ol-mark-document">
| 参数     | 说明                                 | 类型    |  可选值                 | 默认值|
| -------- | -----------------------------------  | ------- | ------------------------| ----- |
| multiple | 是否多选                             | Boolean |                         | false |
| search   | 是否支持搜索                         | Boolean |                         | false |
| key      |                                      |         |                         | ---   |
| value    | 最终选择的值                         |array    |                         | ---   |
| options  | 选项之集合,每个值为一个对象，见下表  |array    |                         | ---   |
</textarea>
</document> 

<h4>options 的子选项</h4>
<document>
<textarea  class="ol-mark-document">
| 参数     | 说明                                 | 类型    |  可选值                 | 默认值|
| -------- | -----------------------------------  | ------- | ------------------------| ----- |
| selected | 是否默认选中                         | Boolean |                         | false |
| disabled | 是否禁用                             | Boolean |                         | false |
| value    | 值                                   | array   |                         | ---   |
| id       | id                                   | number  |                         | ---   |
</textarea>
</document> 
</section>
</template>
<script>
import { olSelect }from '../index'
import  showMark from '../showMark.vue'
import  document from '../document.vue'
export default {
    components: { 
        olSelect,
        showMark,
        document
    },
    data () {
        return {
            form: {
                selectProvince: {
                    multiple: true, // 是否多选
                    search: true,
                    key: 'selectProvince',
                    value: [],//value: 
                    options: [{
                        selected: true,
                        disabled: false,
                        value: '成都',
                        id: 1
                    }, {
                        selected: false,
                        disabled: false,
                        value: '北京',
                        id: 2
                    }, {
                        selected: false,
                        disabled: false,
                        value: '深圳',
                        id: 3
                    }]
                },
                selectProvince1: {
                    multiple: false, // 是否多选
                    search: false,
                    key: 'selectProvince',
                    value: [],//value: 
                    options: [{
                        selected: true,
                        disabled: false,
                        value: '成都',
                        id: 1
                    }, {
                        selected: false,
                        disabled: false,
                        value: '北京',
                        id: 2
                    }, {
                        selected: false,
                        disabled: true,
                        value: '深圳',
                        id: 3
                    }]
                },
                selectProvince3: {
                    disabled: true,
                    multiple: false, // 是否多选
                    search: false,
                    key: 'selectProvince',
                    value: [],//value: 
                    options: [{
                        selected: true,
                        disabled: false,
                        value: '成都',
                        id: 1
                    }, {
                        selected: false,
                        disabled: false,
                        value: '北京',
                        id: 2
                    }, {
                        selected: false,
                        disabled: true,
                        value: '深圳',
                        id: 3
                    }]
                }
            }
        }
    }
}
</script>