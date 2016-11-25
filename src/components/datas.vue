<style lang= 'sass'></style>
<template>
<div>
   
      <personalInfor></personalInfor>
  
    <section class="main-resource" >
    </section>
  </div>

</template>
<script>

import personalInfor from './personalInforTitle.vue'
  export default {
    components: { 
        personalInfor,
      
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