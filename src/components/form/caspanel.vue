<style lang = "sass">

</style>
<template>
<div ref = "kl">
  
  
    <ul 
      v-if="caspanel && caspanel.length" 
      :class="">
        <Casitem
            v-for="item in caspanel"
            :data="item"
            @click="handleClickItem(item)"
            >
        </Casitem>
    </ul>
    <Caspanel 
   
         v-if="sublist && sublist.length" 

        :caspanel="sublist"> 
    </Caspanel>
</div>
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
      data: [],
      sublist:[]
    }
  },
    components: {
        Casitem
    },
 

  methods: {
   handleClickItem(item){
    console.log(this.item !== item)
       //this.sublist =  0;
      if( this.item !== item){
       this.item = item
      
       this.sublist =  item.children;
      }else{
this.sublist.length =  0;
      }
      // this.$el.removeChild(this.$el.childNodes[1])
        //console.log(event.target.parentNode.lastChild)
   }
  },


}


</script>