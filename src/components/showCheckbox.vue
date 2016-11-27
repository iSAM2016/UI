<style  lang = "sass" >


</style>
<template>
  <section>
         

    <div>
      <h4>
        #选择框
      </h4>
      
    
    </div>  
    <ol-checkbox :checkbox="checkbox">
      
    </ol-checkbox>

     <ol-checkbox :checkbox="checkbox1">
      
    </ol-checkbox>

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
import {olCheckbox} from '../index'
  export default {
  
    data () {
      return {
       checkbox: {
                checked: true,
                text: "我已阅读用户协议"
            },

        checkbox1: {
                checked: true,
                text: "同意"
            }     
      }
    },

    components: {
       olCheckbox
    },
    
    events: {
      
    }
  }

</script>