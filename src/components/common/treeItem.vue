<template>
    <div>
        <li v-for="treeNode in treeData">
            <span 
                class="ol-tree-ion" 
                :class="{'ion-android-arrow-dropright': treeNode.expand, 'ion-android-arrow-dropdown': !treeNode.expand, 'ol-ion-hidden': (!treeNode.children || treeNode.children.length == 0)}"
                @click.stop="expandChild(treeNode)"
                ></span>
            <label  class="ol-checkbox-wrapper">
                <div class="ol-checkbox">
                    <span class="ol-checkbox-inner"
                          :class="{
                            'selected': treeNode.checked,
                            'disabled': treeNode.checkDisabled
                            }"
                    >
                    <i class="ol-checkbox-inner-icon ion-checkmark-round"></i>
                    <input type="checkbox"
                           :value="treeNode.checked"
                           class="ol-checkbox-input"
                           @change="changeAction(treeNode)"
                    >    
                    </span>
                </div>
            </label>
            <a>{{ treeNode.title }}</a>
            <ul class="ol-tree-child-node" v-if="treeNode.expand && treeNode.children && treeNode.children.length > 0">
                <tree-item :tree-data="treeNode.children" @printData="open"></tree-item>
            </ul>    
        </li>
    </div>
</template>
<script>
    export default {
        name: 'tree-item',
        props: {
            treeData: Array
        },
        methods:{
            open(){
                this.$emit('printData')
            },
            expandChild (treeNode) {
                treeNode.expand = !treeNode.expand
            },
            changeAction (treeNodeObj, checkState) {
                treeNodeObj.checked = checkState || !treeNodeObj.checked
                if (treeNodeObj.children) {
                    treeNodeObj.children.forEach((el) => {
                        el.expand = treeNodeObj.checked ? true : false;
                        this.changeAction(el, treeNodeObj.checked)
                    })
                }
                this.$emit('printData')
            }

        }
    }
</script>

<style lang="stylus">
.ol-tree-ion{
    display: inline-block
    width: .8rem;
    cursor: pointer;
}
.ol-ion-hidden{
    display: none;
}
</style>