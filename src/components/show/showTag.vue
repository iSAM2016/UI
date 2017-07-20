<style  lang = "stylus" >
</style>
<template>
  <section>
         

    <div>
      <h4>
        #标签
      </h4>
        <ol-tag value="simple tag"></ol-tag>
        <ol-tag type="info" value="simple tag"></ol-tag>

        <ol-tag type="warning" value="simple tag"></ol-tag>

        <ol-tag type="success" value="simple tag"></ol-tag>

        <ol-tag type="danger" value="simple tag" icon=""></ol-tag>
    </div>  

   
  </section>
</template>
<script>
import { olTag }from '../index'

  export default {
    components: { 
      olTag
    },
    data () {
      return {
        totalTime: 0,
      }
    },
  }

</script>