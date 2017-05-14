<style lang = "stylus">
.ol-input-content{
    position: relative;
    width: 100%;
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
     @click="click">
        <input
            class="ol-input"
            :class="styleList"
            :placeHolder = "placeHolder" 
            v-model="inputValue"
            :disabled="disabled"
             @input="changAction"
             @blur="inputAction"
       >

        <span class="ol-tip" v-if="tip">{{tip}}</span>
   </div>
</template>
<script>
import { MIXIN } from '../utils.js'
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
    mixins: [MIXIN],
    props: {
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
        disabled: {
             type:Boolean,
             default: ()=> false
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
    data() {
        return {
            inputValue: ''
        }
    },
    mounted() {
        this.inputValue = this.value;
    },
    methods: {
        changAction(e){
            this.$emit('changing', this.inputValue, this);
            this.dispath('olForm', 'changeOlFromValue', [this, this.inputValue]);
        },
        inputAction() {
            this.limitType()
        },
        setState (state, tip) {
            this.state = state
            this.tip = tip
        },
        cleanState () {
            this.tip = ''
            this.state = 'default'
        },
        limitLen () {
            if (this.limit.max) {
                console.log(12)
                if (this.inputValue.length > this.limit.max) {
                    return this.setState('warning', '输入最多' + this.limit.max + '字符')
                } else {
                    this.cleanState()
                }
            }
            if (this.limit.min) {
                if (this.inputValue.length < this.limit.min) {
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
            let check = TypeLimit.reg.test(this.inputValue)

            if (this.limit.type === 'Number') {
                check = this.numberCheck(this.inputValue)
            }

            if (this.limit.tip) {
                tip = this.limit.tip
            }
            
            if (!check) {
                this.setState(TypeLimit.state, tip)
            } else {
                this.cleanState()
            }
        },
        click(){
        this.$emit("click")
        
      }
    
      
    },

    computed: {
      styleList(){
         let list = []
         if(this.state)
         list.push(this.state) 
          
          return list 
      }
  }
}
</script>