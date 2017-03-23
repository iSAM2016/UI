<style lang = "stylus">
.ol-treeItem {
  display: block;
    list-style: none;
    width: 100%;
    padding: 0;
    margin: 0;
      
      .ol-treeItem-li{
        padding: 0 2rem 0 2rem;
      }
}

</style>
<template>

  <ul 
    v-if="treeData && treeData.length" 
    class="ol-treeItem">
      <li 
        v-for="item in treeData"
        @click.stop="openchild(item)"
        class="ol-treeItem-li"
      >
        <radio 
          :radio='item.radio' 
          @change="selectItem(item, parent)"
        ></radio>
        {{ item.label }}
        <treeItem 
          v-if="item.show"
          :treeData="item.children"
          :parent= item
          @selectItem="chose"
        ></treeItem>
      </li>
  </ul>
</template>
<script>
import radio from '../form/radio'
export default {
  name:"treeItem",
  props: {
    treeData: {
      type:Array,
      require:true,
    },
    parent:{
      type: Object
    }
  },
  data() {
    return {
      store:[], // 存储公共数据
      saveObj:{}
    }
  },
  components: {
        radio
  },
  methods: {

    // 显示列表
    openchild(item) {
      event.stopPropagation()
      if(!item.children) return true;
       item.show = !item.show
       this.$set(item,"show", item.show)
    },

    // 选中项目
    selectItem(item, parent) {
      this.$emit("selectItem", item, parent)
    },
    // 接收项目
    chose(item, parent) {
      this.store.push(item);
      this.saveObj['label'] = parent.label;
      this.saveObj.children = this.store;
      this.$emit("selectItem", this.saveObj, this.parent)
    },
  },
  computed: {
  },
}
</script>