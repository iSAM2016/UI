<style lang = "sass">
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
          :radio = 'item.radio' 
          @change = "change(item.children,item,parent)"
        ></radio>
        {{ item.label }}
        <treeItem 
          v-if="item.show"
          :treeData="item.children"
          :parent= item
          @select = "chose"
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

  data: function () {
    return {
    }
  },

  components: {
        radio
  },

  methods: {
    openchild(item){
      event.stopPropagation()
      if(!item.children) return true;
       item.show = !item.show
       this.$set(item,"show", item.show)
    },

    change(children,item,parent){
      let that = this;
      
      if(!children){ 
          that.$emit("select",item,parent)
        return 
      }

        that.$emit("select",item,parent)
        ///this.deep( children)
    },

    chose( data,parent ){
        console.log(data)
          this.$emit("select",data,parent)
    },

    deep(children){

      if(!children){ 
        return 
      }

        children.forEach(source =>{
                if( !source.radio.checked){
                     source.radio.checked = true
                     this.deep(source["children"])

                }else{
                     source.radio.checked = false
                     this.deep(source["children"])
                } 
        })
    }
  },

  computed: {
     
  },

}

</script>