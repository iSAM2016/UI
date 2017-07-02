<style  lang = "stylus" ></style>
<template>
  <section>
<h3>按钮</h3>
<showMark>
<textarea  class="ol-mark-text">
```html  
<ol-button>默认按钮</ol-button>
<ol-button type="primary">推荐</ol-button>
<ol-button type="success">success</ol-button>
<ol-button type="info">information</ol-button>
<ol-button type="danger">danger</ol-button>
<ol-button type="warning">waring</ol-button>
<ol-button type="warning">
  <i class="icon ion-alert"></i>waring</ol-button>
<ol-button :disabled ='true'>disabled</ol-button>
```
</textarea>
<ol-button>默认按钮</ol-button>
<ol-button type="primary">推荐</ol-button>
<ol-button type="success">success</ol-button>
<ol-button type="info">information</ol-button>
<ol-button type="danger">danger</ol-button>
<ol-button type="warning">waring</ol-button>
<ol-button type="warning"> <i class="icon ion-alert"></i>waring</ol-button>
<ol-button :disabled ='true'>disabled</ol-button>
</showMark>


<h3>按钮尺寸</h3>
<showMark>
<textarea  class="ol-mark-text">
```html
<ol-button  size="large" type="primary">推荐</ol-button>
<ol-button   type="primary">推荐</ol-button>
<ol-button  size="small" type="primary">推荐</ol-button>
```
</textarea>
<ol-button  size="large" type="primary">推荐</ol-button>
<ol-button   type="primary">推荐</ol-button>
<ol-button  size="small" type="primary">推荐</ol-button>
</showMark>

<h3>图标</h3>
<showMark>
<textarea  class="ol-mark-text">
```html
<ol-button  icon="ion-android-add " type="primary"></ol-button>
<ol-button   type="primary"> <i class="ion-android-locate"></i>
  推荐
</ol-button>
```
</textarea>
<ol-button  icon="ion-android-add " type="primary"></ol-button>
<ol-button   type="primary"> <i class="ion-android-locate"></i>
推荐
</ol-button>
</showMark>


<h3 >组合按钮</h3>
<showMark>
<textarea  class="ol-mark-text">
```html
<ol-button-group>
<ol-button>common</ol-button>
<ol-button>common</ol-button>
<ol-button>common</ol-button>
<ol-button>common</ol-button>
</ol-button-group>
```
</textarea>
<ol-button-group>
<ol-button>common</ol-button>
<ol-button>common</ol-button>
<ol-button>common</ol-button>
<ol-button>common</ol-button>
</ol-button-group>
</showMark>

<h3 >说明文档</h3>
<document>
<textarea  class="ol-mark-document">
| 参数          | 说明          | 类型    |  可选值                                        | 默认值|
| ------------- | ------------- | ------- | ---------------------------------------------- | ----- |
| type          | 按钮类型      | string  |   default success primary danger info warning  |default|
| size          | 按钮尺寸      | string  |   small   large                                |       |
| disabled      | 按钮禁用      | Boolean |   false true                                   |  false|
| icon          | icon          | string  |                                                |       |
| loading       | 下载          | Boolean |   false true                                   |  false|
</textarea>
</document> 
</section>
</template>
<script>
import { olButton, olButtonGroup }from '../index'
import  showMark from '../showMark.vue'
import  document from '../document.vue'
export default {
  components: { 
      olButton,
      olButtonGroup,
      showMark,
      document
    },
  }

</script>