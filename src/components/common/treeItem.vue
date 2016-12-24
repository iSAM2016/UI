<style lang = "sass">

</style>
<template>
    <ul 
      v-if="caspanel && caspanel.length" 
      :class="">

       <li 
          v-for="item in caspanel"
          @click.stop="openchild(item)"

        >{{ item.label }}
       
            <treeItem 
                v-show="item.show"
                :caspanel="item.children"> 
            </treeItem>
        </li>
    </ul>
</template>
<script>
export default {
  name:"treeItem",
  props: {
    caspanel: {
      type:Array,
      require:true,
    },
  },

  data: function () {
    return {
    }
  },

  components: {
        
  },

  methods: {
   openchild(item){
    event.stopPropagation()
     item.show = !item.show
     console.log(item.show)
     this.$set(item,"show", item.show)
   }
  },


}

</script>