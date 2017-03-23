<style lang = "stylus">
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
        <p></p>
        <treeItem
            class="item"
            :treeData="treeData"
            @selectItem = "chose"
            ></treeItem>
    </div>
</template>
<script>
import {catIn} from '../utils.js'
import treeItem from './treeItem'
export default {
    name: 'tree',
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
            store:[], // 存储公共数据
            saveObj:{}
        }
    },
    components: {
        treeItem,
    },
    mounted(){
    },
    computed: {
        treeData() {
            return this.ergodic(this.trees);
        }
    },
    methods: {
        chose(item, parent) {
            console.log(JSON.stringify(item))
        },

        // 选中项目
        selectItem(item, children, parent){
            console.log(item)
             // paent.radio.checked = key ? true :false
        },

        // 遍历数据添加radio 和 show
        ergodic(datas){
            datas.forEach(source =>{
              if (source.children) {
                 this.$set(source,"show", false);
                 this.$set(source,"radio", {'checked': false});
                 this.ergodic(source["children"])
              }else{
                 this.$set(source,"show", false);
                 this.$set(source,"radio", {'checked': false});
              } 
            })
            return datas;
        },
        remove(datas){
            datas.forEach(source =>{
              if (source.children) {

              
                 this.ergodic(source["children"])
              
              }else{
                source.forEach((i) => {
                    
                })

              } 
            })
            return datas;
        }

    }

}
</script>