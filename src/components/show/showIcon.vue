<style  lang = "sass" >


</style>
<template>
  <section>
    <div>
      <h4>
        #标签
      </h4>
       
    </div>  
  

   <span 
      class="step size-32"
      v-for="item in arrIcon"  
   >
      <i class="icon" :class="item"></i>
    </span>

   
      
   
  </section>
</template>
<script>
import arrIcon from '../../js/icon'
console.log(arrIcon.length)

  export default {
    components: { 
      
    },


    data () {
      return {
        arrIcon: arrIcon       
      }
    },
    
    methods: {
      change(date,dates){
        console.log(date)
      }
    }
  }

</script>