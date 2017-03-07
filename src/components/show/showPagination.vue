<style  lang = "sass" >


</style>
<template>
  <section>
    <div>
      <h4>
        #标签
      </h4>
       
    </div>  
    <olpagination :paginaton='paginaton'></olpagination>

  </section>
</template>
<script>





import{ olpagination}from '../index'

  export default {
    components: { 
      olpagination
    },


    data () {
      return {
        paginaton:{
          current: 1,
          totle: 10,
          pageSize: 5,
         
        },
       
      }
    },
    
    methods: {
      change(date,dates){
        console.log(date)
      }
    }
  }

</script>