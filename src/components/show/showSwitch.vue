<style  lang = "sass" >


</style>
<template>
  <section>
         

    <div>
      <h4>
        #标签
      </h4>
        <ol-switch :value="switchA" @change="change"/>
        <ol-switch :value="switchB" />
        
        
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
import { olSwitch }from '../index'

  export default {
    components: { 
      olSwitch
    },

    data () {
      return {
        switchA: { "checked": false, "size": "small" },
        switchB: { "checked": false,  }
      }
    },
    
    methods: {
      change(value){
        console.log(value)
      }
    }
  }

</script>