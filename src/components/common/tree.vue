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
        chose(data){
            this.choseArray.push(data)
            this.deep(data)
        },

        deep(data){


            }
    },

}


</script>