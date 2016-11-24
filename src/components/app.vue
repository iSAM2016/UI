<style  lang = "sass" >
 @import '../styles/custom-bootstrap.css'; 
 @import '../styles/scss/basestyle.scss';
 @import '../styles/Font-Awesome/css/font-awesome.min.css'; 
 @import '../styles/scss/main.scss';
body{
  @extend %bgf5

}

/* index.vue */

.custom-active-class{
   background-color: #324057;
}

.mydisabled{
    cursor: not-allowed;
    opacity: 0.5;
    filter: alpha(opacity=50);
    box-shadow: none;
}


.bar-left-side{
   /* position: absolute; */
   @extend %abs;
   left: 0;
   top: 0;
   width:180px;
   height: 100% ;
   margin-bottom: 0;
   z-index: 1000000;
   @extend %tl;
   @extend %f14;
   @extend %bg1f;

   .navbar-nav{
      .actives{
           @extend %bg32;

          a{
              @extend %bg32;
          }
      }
   }

}
 
.bar-left-side-item {
    @extend  %pct100;
    @extend  %lh3.5;
    @extend  %mm;
    
    a{
      @include slid-a


    }

}

.bar-left-side-item-icon {
    @extend  %gh;
    @extend %mr-1;

}

@media (max-width:768px) { 
    .bar-left-side{
        width: 0px;
        overflow: hidden;
        -webkit-transition: all 0.5s;
        transition: all 0.5s;
    }
    .main-resource{
        -webkit-transition: all 0.5s;
        transition: all 0.5s;
        margin: 0 1em 0 0;
        line-height: 3.5
    }

    .main-contant{
      -webkit-transition: all 0.5s;
        transition: all 0.5s;
        margin: 0 1em 0 0;
        line-height: 3.5
    } 

 }
@media (min-width:768px) { 

 }

/* 中型设备（台式电脑，992px 起） */
@media (min-width: 992px) { 


}

/* 大型设备（大台式电脑，1200px 起） */
@media (min-width: 1200px) { 
  
 }
 
  
</style>
<template>
  <div >
     
       <router-view></router-view> 
  </div>
</template>
<script>
import 'bootstrap/dist/js/bootstrap.js'
import store from '../vuex/store.js' // import 我们刚刚创建的 store
import  { getUserId } from  '../vuex/actions.js'
  export default {
     vuex: {
      getters: {
       // userId: ({ mResorce })=> mResorce.datas
      },

      actions: {
          getUserId
            
      }
    },
    components: { 
          },
    ready() {
       
    },
    data () {
      return {
       
        
      }
    },
    events: {
      
    },
    methods:{
       
    },
    store,
   
    created() {
        this.getUserId()

    }

  }


</script>