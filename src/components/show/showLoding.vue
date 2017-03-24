<style  lang = "stylus" >
</style>
<template>
  <section>
    <div>
      <h4>
        #标签
      </h4>
        <ol-loding :loading="loading"></ol-loding>
        <ol-loding :loading="loading"></ol-loding>
    </div>  
<br />

  </section>
</template>
<script>
import { olLoding }from '../index'

  export default {
    components: { 
      olLoding
          },

    ready() {
    },
    data () {
      return {
        loading: {
          color: '#2db7f5'
        },
      }
    },
  }

</script>