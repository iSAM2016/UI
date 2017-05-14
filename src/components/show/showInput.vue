<style  lang = "stylus" >
</style>
<template>
  <section>
    <div>
      <h4>
        #标签
      </h4>
       <ol-input :textfield = 'user0'></ol-input>
       <br>
       <ol-input :textfield = 'user'></ol-input>
       <ol-input :textfield = 'user1'></ol-input>
       <ol-input :textfield = 'user2'></ol-input>
       <ol-input :textfield = 'user3'></ol-input>
       <ol-input :textfield = 'user4'></ol-input>
    </div>  
    
    <div>
      <h4>
        #密码
      </h4>
        <ol-input 
          :textfield = 'passworld'
          
          >
          </ol-input>
    </div>

     <div>
      <h4>
        #输入框
      </h4>
         <ol-input 
          :textfield = 'user'
          @changing ="inputing"
        ></ol-input>
    </div>   

     <div>
      <h4>
        #验证
      </h4>
         <ol-input 
          :textfield="form.user" 
          :limit="limits.length"
        ></ol-input>
        <ol-input 
          :textfield="form.user1" 
          :limit="limits.email"
        ></ol-input>


    </div>      

  
      
   
  </section>
</template>
<script>
import { olInput }from '../index'

  export default {

    data () {
      return {
        user0: {
            value:'',
            placeHolder: 'disabled',
            state: 'disabled',
            tip: '',
            disabled: true, 
          },
          user: {
            value: '',
            placeHolder: 'default here',
            state: 'default',
            tip: '' 
          },
           user1: {
            value: '',
            placeHolder: 'primary',
             state: 'primary',
            tip: '' 
          },
           user2: {
            value: '',
            placeHolder: 'danger',
             state: 'danger',
            tip: '' 
          },
          user3: {
            value: '',
            placeHolder: 'success',
             state: 'success',
            tip: '' 
          },

          user4: {
            value: '',
            placeHolder: 'warning',
             state: 'warning',
            tip: '' 
          },

          passworld: {
              value: 112121212,
              placeHolder: '',
               state: 'default',
              tip: '',

          },

          limits: {
              length: {
                  type: 'Length',
                  min: 6,
                  max: 12
              },
              email: {
                  type: 'Email'
              },
              phone: {
                  type: 'Phone'
              },
              number: {
                  type: 'Number'
              }
          },

           form: {
                user: {
                    value: '',
                    placeHolder: '长度',
                    title: '用户名:',
                    state: 'default',
                    tip: ''
                },
                 user1: {
                    value: '',
                    placeHolder: 'email',
                    title: 'email:',
                    state: 'default',
                    tip: ''
                }

            },
        
      }
    },

    components: { 
      olInput
    },

    methods:{
      inputing( value ){
        console.log(  value )
      }
    },

    computed:{

    },
  }
    
    


</script>



