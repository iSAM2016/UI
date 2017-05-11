<style  lang = "stylus" >
.top{
  margin-top: 80px
}
</style>
<template>
  <section>
    <div>
      <h4>
        #标签
      </h4>
        <ol-slider :value="slider" class="top" @change="change"/>
        {{ value }}

        <ol-slider :value="slider1" class="top" />
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