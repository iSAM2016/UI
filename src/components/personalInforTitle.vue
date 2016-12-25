<style>
.ol-contents{
    position: relative;
    width: 100%;
    padding: .2rem;
    border: 1px solid #ccc;

   }

   .ol-contents{
    position: relative;
    width: 100%;
    padding: .2rem;
    border: 1px solid #ccc;

   }
</style>
<template>

    <!-- 头部 -->
    <ul class="nav nav-tabs">
        <li>
            <a href="#"  class=style.title>个人中心</a>
        </li>
        <li class="">
            <a href="#">通知</a>
        </li>

    </ul>

 <div class="ol-contents">
   <div class="ol-content-UI"></div>
   <div class="ol-content-code"></div>
 </div>

</template>
<script>

   
  export default {
    components: { 
      
          },

   

    data () {
      return {
        totalTime: 0,
      }
    },
    
    mounted() {
      $("#show").height($(window).height())
    }
  }

</script>