<style  lang = "sass" >


</style>
<template>
  <section>
    <ol-button>默认按钮</ol-button>            
    <ol-button type="primary">推荐</ol-button>               
    <ol-button type="ghost">ghost</ol-button>              
    <ol-button type="success">success</ol-button>              
    <ol-button type="info">information</ol-button>              
    <ol-button type="danger">danger</ol-button>              
    <ol-button type="warning">waring</ol-button>      
    <ol-button :disabled ='true'>disabled</ol-button>      

    <div>
      <h4>
        #按钮尺寸
      </h4>
        <ol-button  size="large" type="primary">推荐</ol-button>  
        <ol-button   type="primary">推荐</ol-button>    
        <ol-button  size="small" type="primary">推荐</ol-button>
    </div>  

    <div>
      <h4>
        #图标
      </h4>
         
        <ol-button  icon="icon-file-alt " type="primary"></ol-button>  

        <ol-button   type="primary"> <i class="icon-file-alt"></i> 推荐</ol-button>    
        
    </div>  

     <div>
      <h4>
        #组合按钮
      </h4>
         <pre>
         
         </pre>
        
          <ol-button-group>
              <ol-button>common</ol-button>
              <ol-button>common</ol-button>
              <ol-button>common</ol-button>
              <ol-button>common</ol-button>
              <ol-button>common</ol-button>
          </ol-button-group>
        
        
    </div>  

    <div>
        <h4>
          #loading
        </h4>
           <pre>
           
           </pre>
          
          <ol-button :loding="true">save</ol-button>
                
        
        
   </div>  
      
    </div>   
  </section>
</template>
<script>
import {olButton, olButtonGroup }from '../index'

  export default {
    components: { 
      olButton,
      olButtonGroup
          },

    ready() {
        console.log(this.$route.auth + "user")
    },

    data () {
      return {
        totalTime: 0,
      }
    },
    
    events: {
      
    }
  }

</script>