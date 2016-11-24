<style  lang = "sass" >


</style>
<template>
  <div>
    454546565555555555556666666666666666666666666666655555555555
         <router-link to="/index" tag="li">
            <a href="#"> 
                <span>button</span>
            </a>
          </router-link>
                 
           <router-view></router-view>              
     
  </div> 
</template>
<script>
import 'bootstrap/dist/js/bootstrap.js'

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