<style  lang = "sass" >


</style>
<template>
  <section>
         

    <div>
      <h4>
        #标签
      </h4>
        <ol-progress  @change="change"/>
       
      
    </div>  

  </section>
</template>
<script>
import { olProgress }from '../index'

  export default {
    components: { 
      olProgress
    },

    data () {
      return {
        slider:{ "value": 0, "min": 10, "max": 100, "step": 0 },
        slider1:{ "value": 0, "min": 10, "max": 100, "step": 10 },
        value:0
      }
    },
    
    methods: {
      change(value){
        this.value = value
      }
    }
  }

</script>