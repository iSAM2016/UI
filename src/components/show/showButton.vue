<style  lang = "sass" ></style>
<template>
  <section>
    <ol-button>默认按钮</ol-button>
    <ol-button type="primary">推荐</ol-button>
    <ol-button type="ghost">ghost</ol-button>
    <ol-button type="success">success</ol-button>
    <ol-button type="info">information</ol-button>
    <ol-button type="danger">danger</ol-button>
    <ol-button type="warning">waring</ol-button>
    <ol-button type="warning"> <i class="icon ion-alert"></i>
      waring
    </ol-button>
    <ol-button :disabled ='true'>disabled</ol-button>

    <div>
      <h4>#按钮尺寸</h4>
      <ol-button  size="large" type="primary">推荐</ol-button>
      <ol-button   type="primary">推荐</ol-button>
      <ol-button  size="small" type="primary">推荐</ol-button>
    </div>

    <div>
      <h4>#图标</h4>

      <ol-button  icon="icon-file-alt " type="primary"></ol-button>

      <ol-button   type="primary"> <i class="icon-file-alt"></i>
        推荐
      </ol-button>

    </div>

    <div>
      <h4 >#组合按钮</h4>

      <ol-button-group>
        <ol-button>common</ol-button>
        <ol-button>common</ol-button>
        <ol-button>common</ol-button>
        <ol-button>common</ol-button>
        <ol-button>common</ol-button>
      </ol-button-group>

    </div>

    <div>
      <marked>

        <textarea class="ex-mark-text">
          ### 按钮类       
```html
          <ol-button>默认按钮</ol-button>
          <ol-button type="primary">推荐</ol-button>
          <ol-button type="ghost">ghost</ol-button>
          ```
        </textarea>
      </marked>

      <markshow>
        <div class="ol-mark-text">
``` html
  <ol-button>默认按钮</ol-button>
  <ol-button type="primary">推荐</ol-button>
  <ol-button type="ghost">ghost</ol-button>
  <ol-button type="success">success</ol-button>
  <ol-button type="info">information</ol-button>
  <ol-button type="danger">danger</ol-button>
  <ol-button type="warning">waring</ol-button>
  <ol-button :disabled ='true'>disabled</ol-button>

```
        </div>
      </markshow>
    </div>

  </div>
</section>
</template>
<script>
import { olButton, olButtonGroup }from '../index'
import  marked from './mark.vue'
import  markshow from '../personalInforTitle.vue'
import test from './test.vue'

  export default {
    components: { 
      olButton,
      olButtonGroup,
      marked,
      markshow
    },
  

    

    data () {
      return {
        totalTime: 0,
      }
    },
    
    events: {
      
    }
  }

</script>