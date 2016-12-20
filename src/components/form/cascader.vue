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
    >
       
        <caspanel
        class="item"
        :caspanel="treeData"></caspanel>
   </div>
</template>
<script>
import {catIn} from '../utils.js'
import caspanel from './caspanel'


let  data  = [{
    // label 是级联选项展示值
    label: '中国',

    // value 是对象自定义属性
    value: 'china',
    // 也可以自定义其他属性
   

    // 该对象的子选项数组
    children: [{
        value: 'sichuan',
        label: '四川',
        children: [{
            value: 'chegndu',
            label: '成都'
        }, {
            value: 'deyang',
            label: '德阳'
        }]
    }]
},{
    // label 是级联选项展示值
    label: '美国',

    // value 是对象自定义属性
    value: 'usa',
    // 也可以自定义其他属性
   

    // 该对象的子选项数组
    children: [{
        value: 'sichuan',
        label: '纽约',
        children: [{
            value: 'chegndu',
            label: '白宫'
        }, {
            value: 'deyang',
            label: '五角大楼'
        }]
    }]
}]



export default {
   props: {
        cascader: {
            type: Object,
            required: true
        }
    },

    data () {
        return {
         
            show: true,
            valueShow: true,
            open: false,
            search: '',
            display: '',
            treeData: data
        }
    },
    components: {
        caspanel
    },

    mounted(){
      
        //window.addEventListener('click',, false)
    },

    computed: {
      
    },

    methods: {
      
        
      
    },

}


</script>