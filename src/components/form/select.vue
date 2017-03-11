<style lang = "sass">
.ol-select-container {
    position: relative;
    border: 1px solid #ccc;
    display: inline-block;
    min-width: 6rem;
    border-radius: .4rem;
    height: 2.4rem;
    line-height: 2.4rem;
    padding: 0 2rem 0 .5rem;
    vertical-align: bottom;
    width: 100%;
        &.disabled:hover{
            background: #efefef;
            border: 1px solid #ccc;
            color: #b7b7b7;
            cursor: not-allowed;
      }
}

.ol-select-container:hover {
    border: 1px solid #2db7f5;
}

.ol-select-options-container {
    position: absolute;
    min-width: 6rem;
    padding: 0;
    top: 2.6rem;
    left: -1px;
    background-color: #fff;
    z-index: 2;
    box-shadow: rgba(0, 0, 0, 0.117647) 0px 1px 6px, rgba(0, 0, 0, 0.117647) 0px 1px 4px;
    border-radius: 2px;
    max-height: 20rem;
    overflow-y: auto;
}

.ol-select-option {
    padding: 0 .5rem;
    width: 100%;
    font-size: .8rem;
    padding: .1rem .5rem;
    cursor: pointer;
    white-space: normal;
    text-overflow: ellipsis;
    overflow: hidden;
    transition: all .3s ease;
}

.ol-select-option.selected {
    background: #67cdfb;
    color: #fff;
}

.ol-select-option.disabled {
    background: #efefef;
    color: #b7b7b7;
    cursor: not-allowed;
}


.ol-select-option:hover {
    opacity: .7;
}

.ol-select-search-wrapper {
    
    top: 0;
    width: 100%;
}

.ol-select-search-input {
    width: 100%;
    padding: 0 .5rem;
    border: 0;
    opacity: .5;
    outline: none;
}
</style>
<template>
   <div
        class="ol-select-container"
        :class = "{'disabled': select.disabled}"
        @click = "openfn"
    >
        <span v-show="valueShow">{{displayValue}}</span>
        <div 
            class="ol-select-options-container" 
            v-show = "open"
        >
            <div class="ol-select-selected-value">
                <div class="ol-select-search-wrapper" v-show="show">
                    <input 
                        @focus="focusInput" 
                        @click="touchInput" 
                        @blur="leaveInput"
                        @change="changeInput" 
                        placeholder="搜索" 
                        type="text" 
                        v-model="search" 
                        class="ol-select-search-input"
                    >
                </div>
            </div>

            <div 
                class="ol-select-option"
                v-for="option in List"
                @click="setValue(option)"
                :class="{
                    'selected': option.selected,
                    'disabled': option.disabled
                }"
            >
                {{option.value}}
            </div>
            
        </div>
   </div>
</template>
<script>
import {catIn} from '../utils.js'
export default {
   props: {
        select: {
            type: Object,
            required: true
        }
    },

    data () {
        return {
            position: 'bottom',
            show: true,
            valueShow: true,
            open: false,
            search: '',
            display: ''
        }
    },

    beforeDestroy () {
        window.removeEventListener('click', this.hide)
    },
    components: {
        
    },

    mounted(){
        this.show = this.select.search 
        this.setDisplayValue(this.select.options)
        window.addEventListener('click', this.hide, false)
    },

    computed: {
        List(){
            if(this.search){
                const reg = new RegExp(this.search,"g");
                  let list = this.select.options.filter(item => {
                        return reg.test(item.value)
                    })

                    if (list.length === 0) {
                        return [{
                            selected: false,
                            disabled: true,
                            value: '无法找到',
                            id: ''
                        }]
                    }
                    return list
                } 
                 return this.select.options
        },

        displayValue(){
            if(this.select.multiple){
                let str = ""
                 this.select.value.forEach(item => {
                    str += item.value +","
                 })

                 return str
            }else {
                return this.select.value.value
            }
        }   
    },

    methods: {
        touchInput (e) {
            e.stopPropagation()
        },
        leaveInput (e) {
           
        },
        focusInput () {
            this.search = ''
        },
        changeInput (e) {
            e.stopPropagation()
          
        },

        setValue( option ){
            event.stopPropagation()
            if(option.disabled) return
            if(this.select.multiple){//多选
                if(this.select.value.includes( option )) { 
                    this.select.value.splice(this.select.value.findIndex(item => item === option ),1)
                        option.selected = false
                    
                }else{ 
                    this.select.value.push(option)
                    option.selected = true
                }

            }else {
                this.select.options.map(item =>{
                    item.selected = false
                })

                option.selected = true
                this.select.value = option;

            }
            this.search = ''
            this.open= false
        },
        setDisplayValue(options){
         let selected = this.select.options.filter( item =>{
             return item.selected
         } )

         this.select.value =  this.select.multiple ? selected : selected[0] || {}

           
        },
        openfn(){
             if( this.select.disabled ) return
             this.open= !this.open
        },

        hide (e) {
         
            if (!catIn(e.target, this.$el)) {
                this.open= false
                this.search = ''
            }
        },
        
      
    },

}
</script>