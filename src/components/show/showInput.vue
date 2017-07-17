<style  lang = "stylus" >
  .item{
    margin-top: 10px
  }
</style>
<template>
  <section>
<h3>输入框</h3>
<h4>基本</h4>
<showMark>
<span>改动较大</span>
<textarea class="ol-mark-text">
```html
<ol-input placeHolder='请输入内容'></ol-input>
<ol-input class="item" v-model="form1.name"  placeHolder='请输入内容' state='primary' @changing ="inputing"></ol-input>
<ol-input class="item" v-model="form1.name"  placeHolder='请输入内容' state='danger'  @changing ="inputing"></ol-input>
<ol-input class="item" v-model="form1.name"  placeHolder='请输入内容' state='success' @changing ="inputing"></ol-input>
<ol-input class="item" v-model="form1.name"  placeHolder='请输入内容' state='warning' @changing ="inputing"></ol-input>
```
</textarea>
<ol-input placeHolder='请输入内容'></ol-input>
<ol-input class="item" v-model="form1.name"  placeHolder='请输入内容' state='primary' @changing ="inputing"></ol-input>
<ol-input class="item" v-model="form1.name"  placeHolder='请输入内容' state='danger'  @changing ="inputing"></ol-input>
<ol-input class="item" v-model="form1.name"  placeHolder='请输入内容' state='success' @changing ="inputing"></ol-input>
<ol-input class="item" v-model="form1.name"  placeHolder='请输入内容' state='warning' @changing ="inputing"></ol-input>
</showMark>

<h4>提示框</h4>
<showMark>
<textarea class="ol-mark-text">
```html
 <ol-input class="item" v-model="form1.name"  placeHolder='请输入内容' tip='我是提示语' :disabled='true'></ol-input>

```
</textarea>
 <ol-input class="item" v-model="form1.name"  placeHolder='请输入内容' tip='我是提示语' :disabled='true'></ol-input>
</showMark>


<h4>密码</h4>
<showMark>
<textarea class="ol-mark-text">
```html
<ol-input  v-model="form1.name"  placeHolder='请输入内容' state='primary' type='password'></ol-input>

```
</textarea>
<ol-input  v-model="form1.name"  placeHolder='请输入内容' state='primary' type='password'></ol-input>
</showMark>

<h4>验证</h4>
<showMark>
<textarea class="ol-mark-text">
```html
 长度<ol-input v-model="form1.name"  placeHolder='请输入内容' state='primary' :limit="limits.length"></ol-input>
手机<ol-input v-model="form1.name"  placeHolder='请输入内容' state='primary' :limit="limits.phone"></ol-input> 
email<ol-input v-model="form1.name"  placeHolder='请输入内容' state='primary' :limit="limits.email"></ol-input> 
number<ol-input v-model="form1.name"  placeHolder='请输入内容' state='primary' :limit="limits.number"></ol-input> 

```
</textarea>
 长度<ol-input v-model="form1.name"  placeHolder='请输入内容' state='primary' :limit="limits.length"></ol-input>
手机<ol-input v-model="form1.name"  placeHolder='请输入内容' state='primary' :limit="limits.phone"></ol-input> 
email<ol-input v-model="form1.name"  placeHolder='请输入内容' state='primary' :limit="limits.email"></ol-input> 
number<ol-input v-model="form1.name"  placeHolder='请输入内容' state='primary' :limit="limits.number"></ol-input> 
</showMark>
  </section>
</template>

<script>
import { olInput }from '../index';
import showMark from '../showMark.vue';
import document from '../document.vue';
/**
 * placeHolder: 'disabled'
 * state:  组件状态分类 共计五种
 * tip:  提示语
 * disabled:  禁用 
 */
  export default {
    data () {
      return {
        form1:{
          name: '123'
        },
        limits: {
            length: {
                type: 'Length',
                min: 6,
                max: 12
            },
            email: {
                type: 'Email'
            },
            phone: {
                type: 'Phone'
            },
            number: {
                type: 'Number'
            }
        },
      }
    },

    components: { 
      olInput,
      showMark,
      document
    },
    methods:{
      inputing( value ){
        console.log(  value )
      }
    },
    computed:{
    },
  }
</script>
