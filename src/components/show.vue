<style  lang = "sass" >
#show{
  width: 100%;
  height: calc( 100% );
  background-color: #2d8aff;
}
header{
  padding: 2rem;
  line-height: 3.2rem;
  span{
    display: table-cell;
    color: white;
    font-size: 2rem;

  }
}

.icon{
  height: 3.2rem;
  width: 3.2rem;
  margin-right: 1rem;
  background: url(../img/icon.png) no-repeat center center;
  background-size: cover;

}

#content{
  width: 31rem;
  font-size: 2rem;
  margin:  8rem auto;
  text-align: center;
  color: #fff;

    h1{
      font-size: 8rem;
    }

}

</style>
<template>
  <div id="show">
       <header>
          <span class="icon"></span> <span>&nbsp;&nbsp;olive</span>
       </header>
        
        <section id="content">
          <h1>olive</h1>
          <h4>一套VUE组件</h4>
          <div class="button">
           <router-link to="/index" >
               
                  <span>开始</span>
              
           </router-link>
            
          </div>
        </section>

               
            
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