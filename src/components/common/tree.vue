<style lang = "sass">
.ol-tree {
    display: block;
    list-style: none;
}
</style>
<template>
   <div
        class="ol-tree"

    >
    {{ choseArray }}
    <p></p>
    {{isexistArray}}
    <p>
        
    </p>
        <treeItem
            class="item"
            :treeData="trees"
            @select = "chose"
            >
        </treeItem>
   </div>
</template>
<script>
import {catIn} from '../utils.js'
import treeItem from './treeItem'
 

export default {
   props: {
        trees: {
            type: Array,
            required: true
        }
    },

    data () {
        return {
         
            valueShow: true,
            open: false,
            choseArray:[],
            isexistArray:[],
            display: '',
            
        }
    },
    components: {
        treeItem,
       
    },

    mounted(){
    },

    computed: {
        list(){
          
      }
    },

    methods: {
        chose(data,parent){
            //添加数据
            //有子节点 : 没有子节点
            if( data.children ){
console.log(data.radio.checked)
                this.deep(data.children,data.radio.checked)
            }else{
                this._isadd(data, data.radio.checked )
            }

            if(parent){//有父节点 //首先统计他的子节点
                this.isexistArray.length = 0
                this.parentDeep(parent.children)
                this._isAllChildren(parent)
            }
        },

        deep(children,isSelect){
            if(!children){ 
                return 
            }
            children.forEach(source =>{
                    if( source.children){
                         source.radio.checked = isSelect ? true : false;
                         this.deep(source.children,isSelect)

                    }else{
                         this._isadd(source,isSelect)
                    } 
            })
        },

        parentDeep(children){
            let that = this;
             if(!children){ 
                return 
            }

            children.forEach(source =>{
                    if( source.children){
                         this.parentDeep(source.children)

                    }else{
                        if(!that.isexistArray.includes(source)){
                            this.isexistArray.push(source)
                        }
                    } 
            })
        },

        _isadd(data ,isSelect){

            if(isSelect){//存在
                data.radio.checked = true
                if(!this.choseArray.includes(data)){
                    this.choseArray.push(data)
                }

            }else{
                data.radio.checked = false 
                this.choseArray.splice(this.choseArray.findIndex(item=>item === data),1)
            }
        },

        _isAllChildren(paent){//
            let that = this
            let key = this.isexistArray.some( item=>{
                    return !that.choseArray.includes(item)
            })
          
            key ? this.select(paent,false) : this.select(paent,true)
        },

        select(paent,key){
             paent.radio.checked = key ? true :false
        }

    },

}


</script>