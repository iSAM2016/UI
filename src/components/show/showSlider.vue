<style  lang = "sass" >


</style>
<template>
  <section>
         

    <div>
      <h4>
        #标签
      </h4>
        <ol-slider :value="slider" @change="change"/>
        1212
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
import { olSlider }from '../index'

  export default {
    components: { 
      olSlider
    },

    data () {
      return {
        slider:{ "value": 100, "min": 10, "max": 100, "step": 5 },
      }
    },
    
    methods: {
      change(value){
        console.log(value)
      }
    }
  }

</script>