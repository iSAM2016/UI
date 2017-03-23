<style  lang = "stylus" >


</style>
<template>
  <section>
    <div>
         <h4>
              #下拉按钮
         </h4>
         <div>
           <ol-drop-button text="操作">
              <ol-button>编辑</ol-button>
              <ol-button>审核</ol-button>
              <ol-button>删除</ol-button>
           </ol-drop-button>  
         </div>
          <div>
                <ol-drop-button type="info" text="操作">
                  <ol-button>编辑</ol-button>
                  <ol-button>审核</ol-button>
                  <ol-button>删除</ol-button>
               </ol-drop-button>   
            
          </div>

           <div>
                <ol-drop-button type="disabled" text="操作" :disabled="true">
                  <ol-button>编辑</ol-button>
                  <ol-button>审核</ol-button>
                  <ol-button>删除</ol-button>
               </ol-drop-button>   
            
          </div>
    </div>
   
  </section>
</template>
<script>
import {olButton, olDropButton  }from '../index'

  export default {
    components: { 
      olButton,
      olDropButton
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