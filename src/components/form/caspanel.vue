<style lang = "stylus">

</style>
<template>
    <ul 
      v-if="caspanel && caspanel.length" 
      :class="">

       <li 
          v-for="item in caspanel"
          @click.stop="openchild(item)"

        >{{ item.label }}
       
            <Caspanel 
                v-show="item.show"
                :caspanel="item.children"> 
            </Caspanel>
        </li>
    </ul>
</template>
<script>
import Casitem from './casItem'
export default {
  name:"Caspanel",
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
        Casitem
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