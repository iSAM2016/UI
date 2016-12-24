<style  lang = "sass" >
@import '../styles/custom-bootstrap.css'; 
@import '../styles/ionicons/ionicons.min.css'; 
 
</style>
<template>

       <router-view></router-view> 
  
</template>
<script>
  export default {
     vuex: {
      getters: {
       // userId: ({ mResorce })=> mResorce.datas
      },

      actions: {
            
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
   
    created() {

    }

  }


</script>