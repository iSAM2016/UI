<style  lang = "sass" ></style>
<template>
  <section>
    <div>
      <h4>#标签</h4>
      <olBreadcrumb :list ="list" @change="change"></olBreadcrumb>
    </div>

  </section>
</template>
<script>
import{ olBreadcrumb }from '../index'

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

</script>