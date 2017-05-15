<style  lang = "stylus" >
</style>
<template>
  <section>
    <div>
      <h4>
        #标签
      </h4>
        <ol-switch v-model="checked" :size='size' @change="change"/>
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
        "checked": false, "size": "small" 
      }
    },
    
    methods: {
      change(value){
        console.log(value)
      }
    }
  }

</script>