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





import{ olpagination}from '../index'

  export default {
    components: { 
      olpagination
    },


    data () {
      return {
        paginaton:{
          current: 4,
          totle: 10,
          pageSize: 5,
          offset: 2,
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