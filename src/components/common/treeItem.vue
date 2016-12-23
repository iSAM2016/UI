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
            <radio :radio = 'item.radio'></radio>
            {{ item.label }}
            <treeItem 
                v-if="item.show"
                :treeData="item.children"> 
            </treeItem>
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
  },

  data: function () {
    return {
      checkbox: {
                
      },
    }
  },

  components: {
        radio
  },

  methods: {
   openchild(item){
    event.stopPropagation()
     item.show = !item.show
     this.$set(item,"show", item.show)
   }
  },

  computed: {
     
    },


}

</script>