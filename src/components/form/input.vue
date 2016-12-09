<style lang = "sass">



.ol-input-content{
    position: relative;
    width: 100%;
    height: 4.7rem;
}
.ol-input{
        
    display: inline-block;
    height: 2.6rem;
    width: 100%;
    line-height: 2.6rem;
    text-align: left;
    vertical-align: middle;

    border: 1px solid transparent;;
    border-radius: 4px;
    padding-left: 8px;
    color: #666;
                
        &:focus, 
        &:hover {    
            border-color: transparent;;
        }

        &.default {
            border-color: #d9d9d9;
        }
        &.primary {
            border-color: #57c5f7;
           
        }
        &.ghost {
            border-color: #d9d9d9;
        }
        &.warning {
            border-color: #fa0;
           
        }
        &.danger {
            border-color: #f50;
           
        }
        &.success {
            border-color: #87d068;
          
           
        }
        &.info {
            border-color:#2db7f5;
           
        }
        &.disabled  {
                color: #888888;
                background-color: #f9f9f9;
                border-color: #e7e7e7;
            }
}
.ol-tip{
    position: relative;
    top:-1.6rem;
    display: inline-block;
    font-size: 12px;
    color: red;
    line-height: 1;
}

</style>
<template>
   <div
    class="ol-input-content"
        
   >
        <input
            class="ol-input"
            :class="styleList"
            
            :placeHolder = "textfield.placeHolder" 
            v-model="textfield.value"
            :disabled="textfield.disabled"
             @change="changAction"
             @blur="inputAction"
       >

        <span class="ol-tip" v-if="textfield.tip">{{textfield.tip}}</span>
   </div>
</template>
<script>

const TYPE_MAP = {
    Email: {
        reg: /^([\w-_]+(?:\.[\w-_]+)*)@((?:[a-z0-9]+(?:-[a-zA-Z0-9]+)*)+\.[a-z]{2,6})$/i,
        state: 'warning',
        tip: '请输入正确的邮箱地址'
    },
    Phone: {
        reg: /1[3-9][0-9]{9}$/,
        state: 'warning',
        tip: '请输入正确的手机号码'
    },
    Number: {
        reg: /^[0-9]*$/,
        state: 'warning',
        tip: '请输入数字'
    }
}

export default {
    props: {
        textfield: {
            type: Object,
            value:{
                type:String,
                default: ()=> ""
            },
            placeHolder:{
                type:String,
                default: ()=> "input here"
            },
            state:{
                 type:String,
                 default: ()=> "default"
            },
            tip: {
                 type:String,
                 default: ()=> ""
            },
           
        },
        limit: {
            type: Object,
            default () {
                return {
                    length: 0,
                    type: null
                }
            }
        },
        type:{
            type:String,
            default: ()=> "text"
        },
    },

    components: {
        
    },

    methods: {
        changAction(e){
            this.$emit('changing', this.textfield.value, this)
        },
        inputAction(){
                this.limitType()
            
        },
        setState (state, tip) {
            this.textfield.state = state
            this.textfield.tip = tip
        },
        cleanState () {
            this.textfield.tip = ''
            this.textfield.state = 'default'
        },
        limitLen () {
            if (this.limit.max) {
                console.log(12)
                if (this.textfield.value.length > this.limit.max) {
                    return this.setState('warning', '输入最多' + this.limit.max + '字符')
                } else {
                    this.cleanState()
                }
            }
            if (this.limit.min) {
                if (this.textfield.value.length < this.limit.min) {
                    return this.setState('warning', '输入至少' + this.limit.min + '字符')
                } else {
                    this.cleanState()
                }
            }
        },
        numberCheck (val) {
            if (!val) return true
            let num = Number(val)
            return !Number.isNaN(num)
        },
        limitType () {
            
            if (!this.limit.type) return
            if (this.limit.type === 'Length') return this.limitLen()
            if (!TYPE_MAP[this.limit.type]) return

            let TypeLimit = TYPE_MAP[this.limit.type]
            let tip = TypeLimit.tip
            let check = TypeLimit.reg.test(this.textfield.value)

            if (this.limit.type === 'Number') {
                check = this.numberCheck(this.textfield.value)
            }

            if (this.limit.tip) {
                tip = this.limit.tip
            }
            if (!check) {
                this.setState(TypeLimit.state, tip)
            } else {
                this.cleanState()
            }
        }
    
      
    },

    computed: {
      styleList(){
         let list = []
         if(this.textfield.state)
         list.push(this.textfield.state) 
          
          return list 
      }
  }
}
</script>