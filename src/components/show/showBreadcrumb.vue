<style  lang = "stylus" ></style>
<template>
<section>
  <!-- 例子 -->
<h3>面包屑</h3>
<showMark>
<textarea class="ol-mark-text">
```html
<olBreadcrumb :list ="list" @change="change"></olBreadcrumb>

export default {
    components: { 
      olBreadcrumb
    },
    data () {
      return {
            list: [
             {
                  icon: 'ion-home',
                  value: '首页',
                  route: {
                      path: '/'
                  }
              }, {
                  icon: 'ion-document',
                  value: '订单',
                  route: {
                      path: '/form/checkbox'
                  }
              }, {
                  value: '订单查询',
                  route: {
                      path: '/navigation/breadcrumb'
                  }
            }]
       }
    },
    methods: {
      change(router){
        console.log(router)
      }
    }
  }
```
</textarea>
<olBreadcrumb :list ="list" @change="change"></olBreadcrumb>
</showMark>

<!-- 接口 -->
<h3>说明文档</h3>
<h4>props</h4>
<document>
<textarea class="ol-mark-document">
| 参数          | 说明                            |   类型  | 可选值               | 默认值 |     
| ------------- | ------------------------------- |-------- |--------------------- |--------|
| list          |   请看以下文档                  |  array  |                      |   --   |
</textarea>
</document>

<h4>list</h4>
<document>
<textarea class="ol-mark-document">
| 参数          | 说明                            |   类型  | 可选值               | 默认值 |     
| ------------- | ------------------------------- |-------- |--------------------- |--------|
| icon          |   图标                          | string  |                      |        |
| value         |   内容                          | string  |                      |        |
| route         |   跳转路由 {path: ''}           | object  |                      |   --   |
</textarea>
</document>

<h4>event</h4>
<document>
<textarea class="ol-mark-document">
| 事件名称      | 说明                            | 回调参数              |      
| ------------- | ------------------------------- |-----------------------|
| change        | 改变路由触发的事件              | 返回改变的路由名称    |             
</textarea>
</document>



  </section>
</template>
<script>
import{ olBreadcrumb }from '../index'
import  showMark from '../showMark.vue';
import  document from '../document.vue';
  export default {
    components: { 
      olBreadcrumb,
      showMark,
      document
    },
    data () {
      return {
            list: [
             {
                  icon: 'ion-home',
                  value: '首页',
                  route: {
                      path: '/'
                  }
              }, {
                  icon: 'ion-document',
                  value: '订单',
                  route: {
                      path: '/form/checkbox'
                  }
              }, {
                  value: '订单查询',
                  route: {
                      path: '/navigation/breadcrumb'
                  }
            }]
       }
    },
    methods: {
      change(router){
        console.log(router)
      }
    }
  }
</script>