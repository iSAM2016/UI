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
       
        <treeItem
            class="item"
            :treeData="list">
        </treeItem>
   </div>
</template>
<script>
import {catIn} from '../utils.js'
import treeItem from './treeItem'


let  deepCopy= function(source,that) { 
            let obj =  {
                    checked: false,
                }
    source.forEach(source =>{
        if(!!source["children"]){
            that.$set(source,"show", false)
            that.$set(source,"radio", obj)
            deepCopy(source["children"],that)
        }else{
          that.$set(source,"show", false)
           that.$set(source,"radio", obj)
          return true;
        } 
    })
        
   return source; 
}

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
            return deepCopy(this.trees,this)
      }
    },

    methods: {
      
        
      
    },

}


</script>