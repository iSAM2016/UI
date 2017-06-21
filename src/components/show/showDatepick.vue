<style  lang = "stylus" >
</style>
<template>
  <section>
    <div>
      <h4>
        #标签
      </h4>
        <ol-datepick 
            :value = 'value'
            @change = "change" />

             <ol-datepick 
            :value = 'value1'
            @change = "change" />
    </div>  

  </section>
</template>
<script>





import{ olDatepick }from '../index'

  export default {
    components: { 
      olDatepick
    },


    data () {
      return {
        value:{
          chose: true,
          section: false
        },
        value1:{
          chose: false,
          section: true
        }
      }
    },
    
    methods: {
      change(date,dates){
        console.log(date)
      }
    }
  }

</script>