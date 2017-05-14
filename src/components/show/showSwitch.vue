<style  lang = "stylus" >
</style>
<template>
  <section>
    <div>
      <h4>
        #标签
      </h4>
        <ol-switch :switchs="switchA" @change="change"/>
        <ol-switch :switchs="switchB" />
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