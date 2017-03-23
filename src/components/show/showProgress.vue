<style  lang = "stylus" >


</style>
<template>
  <section>
    <div>
      <h4>
        #标签
      </h4>
        <ol-progress  :pregress = pregress @change="change"/>
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
        pregress:{  "start": 10},
        
      }
    },
    
    methods: {
      change(value){
        this.value = value
      }
    }
  }

</script>