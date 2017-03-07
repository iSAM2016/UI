<style  lang = "sass" >

@import '../styles/ionicons/ionicons.min.css'; 
 
</style>
<template>
       <router-view></router-view> 
       <!-- <ol-notification></ol-notification> -->
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
      console.log(this.$myMethod(2))
    }

  }


</script>