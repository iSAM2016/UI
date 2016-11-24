<style  lang = "sass" >


</style>
<template>
  <div>
       <h2>欢迎来到UI</h2>
       <router-link to="/index" tag="li">
          <a href="#"> 
              <span>目录</span>
          </a>
       </router-link>
               
       <router-view></router-view>              
  </div> 
</template>
<script>

  export default {
    components: { 
      
          },

    ready() {
        console.log(this.$route.auth + "user")
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