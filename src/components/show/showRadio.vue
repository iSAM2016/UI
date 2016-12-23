<style  lang = "sass" >
</style>
<template>
  <section>
    <div>
      <h4>
        #标签
      </h4>
       <div >
          <ol-radio 
            :radio="radio"
            @change = "change" 
          ></ol-radio>

           <ol-radio 
            :radio="radio1"
            @change = "change" 
          ></ol-radio>
         
       </div>
    </div> 

         <ol-RadioGroup :radios = "radios"/>
         
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
import { olRadio, olRadioGroup }from '../index'

  export default {
    components: { 
      olRadio,
      olRadioGroup
          },

    ready() {
        console.log(this.$route.auth + "user")
    },

    data () {
      return  {
                radio: {
                      // radio 的选择状态:Boolean
                      checked: false,
                      // radio 的展示文字: String
                      value: 'one'
                     },

                     radio1: {
                      // radio 的选择状态:Boolean
                      checked: false,
                      // radio 的展示文字: String
                      value: 'one'
                     },
                radios:[{
                      // radio 的选择状态:Boolean
                      checked: true,
                      // radio 的展示文字: String
                      value: 'B'
                     },{
                      // radio 的选择状态:Boolean
                      checked: false,
                      // radio 的展示文字: String
                      value: 'C'
                     },{
                      // radio 的选择状态:Boolean
                      checked: false,
                      // radio 的展示文字: String
                      value: 'D'
                     },{
                      // radio 的选择状态:Boolean
                      checked: false,
                      // radio 的展示文字: String
                      value: 'E'
                     },
                     {
                      // radio 的选择状态:Boolean
                      checked: false,
                      // radio 的展示文字: String
                      value: 'E'
                     },{
                      // radio 的选择状态:Boolean
                      checked: false,
                      // radio 的展示文字: String
                      value: 'E'
                     },

                     ]     
              }
    },
    
    methods: {
      change( key ) {
        
      }
    }
  }

</script>



