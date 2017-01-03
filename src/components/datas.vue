<style lang= 'sass'></style>
<template>
<div>
   
  
    <section class="main-resource" >
    </section>
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