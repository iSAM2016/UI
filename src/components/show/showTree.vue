<template>
    <ol-tree :tree-data="treeData"></ol-tree>
</template>
<script>
/**
 * expand 展开
 * checked 选中
 * title  名称
 * key 区分树组件
 * children 叶子节点数据
 */
import {
    olTree
} from '../index.js'

export default {
    data () {
        return {
            treeData: [{
                expand: false,
                checked: false,
                title: '根',
                key: 'root',
                children: [{
                    expand: false,
                    checked: false,
                    title: '叶子',
                    key: 'leaf',
                    children: [{
                        expand: false,
                        checked: false,
                        title: '叶子1',
                        key: 'leaf1'
                    }]
                }, {
                    expand: false,
                    checked: false,
                    title: '叶子',
                    key: 'leaf'
                }, {
                    expand: false,
                    checked: false,
                    title: '叶子',
                    key: 'leaf'
                }]
            }]
        }
    },
    components: {
        olTree
    }
}
</script>
<style lang="stylus">
    
</style>