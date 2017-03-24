<template>
   <div class="ol-tree">
       <ul class="ol-tree-node">
           <tree-item :tree-data="treeData" @printData="printData"></tree-item>
       </ul>
       {{  selectdData }}
   </div>
</template>
<script>

import treeItem from './treeItem.vue'

export default {
    name: 'tree',
    props: {
        treeData: Array
    },
    components: {
        treeItem
    },
    data() {
        return {
            selectdData: []
        }
    },
    mounted () {
            console.log(this.treeData);
    },
    methods: {
       /* deepCopy(treeNodeObj, obj) {
            for (var key in treeNodeObj) {
                if (typeof treeNodeObj[key] === 'object') {
                   obj[key] =  Object.prototype.toString.call(treeNodeObj[key]) === ' [object Array]' ? []: {}

                    this.deepCopy(treeNodeObj[key], obj[key]);
                } else {
                    obj[key] = treeNodeObj[key];
                }
            }
            return obj
        },*/
        printData(){
            this.selectdData = this.treeData;
            /*this.deepCopy(this.treeData, this.selectdData);*/
        }
    }
}
</script>
<style lang="stylus">
    .ol-tree li{
        line-heigth: 2
    }
    .ol-tree li ul {
        padding: 0 0 0 18px
    }
</style>