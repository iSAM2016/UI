<style  lang = "stylus" >
</style>
<template>
     <section>
<h3>分页</h3>
<showMark>
<textarea  class="ol-mark-text">
```html  
<olpagination :paginaton='paginaton'></olpagination>

  export default {
    components: { 
      olpagination
    },
    data () {
      return {
        paginaton:{
          current: 1,
          totle: 10,
          pageSize: 5,
         
        },
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
<olpagination :paginaton='paginaton'></olpagination>
</showMark>


<h3 >API</h3>
<h4>props</h4>
<document>
<textarea  class="ol-mark-document">
| 参数          | 说明          | 类型    |  可选值                 | 默认值|
| ------------- | ------------- | ------- | ------------------------| ----- |
| paginaton     | 见下表        | object  |                         | ---   |
</textarea>
</document> 

<h4>paginaton</h4>
<document>
<textarea  class="ol-mark-document">
| 参数          | 说明          | 类型    |  可选值                 | 默认值|
| ------------- | ------------- | ------- | ------------------------| ----- |
| current       | 当前页        | number  |                         | ---   |
| totle         | 总共页数      | number  |                         | ---   |
| pageSize      | 显示的项数    | number  |                         | ---   |
</textarea>
</document> 
    

  </section>
</template>
<script>
import{ olpagination}from '../index'
import  showMark from '../showMark.vue'
import  document from '../document.vue'
export default {
  components: { 
    olpagination,
    showMark,
    document
  },
  data () {
    return {
      paginaton:{
        current: 1,
        totle: 10,
        pageSize: 5,
      },
    }
  },
  methods: {
    change(date,dates){
      console.log(date)
    }
  }
}

</script>