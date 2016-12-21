<style  lang = "sass" >


</style>
<template>
  <section>
         

    <div>
      <h4>
        #标签
      </h4>
        <ol-loding></ol-loding>
    </div>  


    <div>
      <h4>
        #代码
      </h4>
        <pre>
          <code>
           html
          </code>
        </pre>
    </div>   

   
      
   
  </section>
</template>
<script>
import { olLoding }from '../index'

  export default {
    components: { 
      olLoding
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