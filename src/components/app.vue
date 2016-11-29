<style  lang = "sass" >
@import '../styles/custom-bootstrap.css'; 

@import '../styles/Font-Awesome/css/font-awesome.min.css'; 



 
  
</style>
<template>
  <div >
       <router-view></router-view> 
  </div>
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