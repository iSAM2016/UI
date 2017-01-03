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
            data.children ?  this.deep(data.children) : this._isadd(data)


          if(parent){//有父节点 //首先统计他的子节点

                //this.parentDeep(parent.children)
            }
        },

        deep(children){
            if(!children){ 
                return 
            }
            children.forEach(source =>{
                    if( source.children){
                         this.deep(source.children)

                    }else{
                         this._isadd(source)
                    } 
            })
        },

        parentDeep(children){
             if(!children){ 
                return 
            }
            children.forEach(source =>{
                    if( source.children){
                         this.deep(source.children)

                    }else{
                         if(this.choseArray.includes(data)){
                            this.isexistArray(data)
                         }
                    } 
            })
        },

        _isadd(data){
            if(this.choseArray.includes(data)){//存在
                this.choseArray.splice(this.choseArray.findIndex(item=>item === data),1)
            }else{
                this.choseArray.push(data)
            }
        }

    },

}


</script>