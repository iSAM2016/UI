<style  lang = "sass" >


</style>
<template>
  <section>
         

    <div>
      <h4>
        #标签
      </h4>
        <ol-tag value="simple tag"></ol-tag>
        <ol-tag 
          type="info" 
          value="simple tag"
          >
        </ol-tag>

        <ol-tag 
          type="warning" 
          value="simple tag"
        >
        </ol-tag>

        <ol-tag 
          type="success" 
          value="simple tag"
        >
        </ol-tag>

        <ol-tag 
          type="danger" 
          value="simple tag" 
          icon="icon-envelope"
        >
        </ol-tag>
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
import { olTag }from './index'

  export default {
    components: { 
      olTag
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