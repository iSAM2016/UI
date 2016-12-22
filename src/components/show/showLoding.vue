<style  lang = "sass" >


</style>
<template>
  <section>
         

    <div>
      <h4>
        #标签
      </h4>
        <ol-loding :loading="loading"></ol-loding>
        <ol-loding :loading="loading"></ol-loding>
    </div>  
<br />

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
        loading: {
          color: '#2db7f5'
        },
      }
    },
    
    events: {
      
    }
  }

</script>