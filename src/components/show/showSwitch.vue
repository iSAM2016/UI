<style  lang = "stylus" >


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