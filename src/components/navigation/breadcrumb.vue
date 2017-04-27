<style lang = "stylus">
  .ol-breadcrumb-container{
    position: relative;
    height: 3rem;
    line-height: 3rem;
    padding: 2px;
    overflow: hidden;
  }

 .ol-breadcrumb{
    display: inline-block;
    cursor: pointer;
 }

  .ol-breadcrumb-world,
  .ol-breadcrumb-router{
       display: inline-block;
  } 
     
  .ol-breadcrumb-router{
      text-align: right;
      width: 1rem;
      padding-right: .2rem;
    }

</style>
<template>
<div class="ol-breadcrumb-container">
  <span 
      class="ol-breadcrumb"
      v-for="(item,index) in list"
      @click='change(item.route.path)'
  >   
        <i class="icon-file-alt"></i>
        <span class='ol-breadcrumb-world'> {{ item.value }} </span>
        <span 
          class="ol-breadcrumb-router"
          v-show="index+1 !== list.length"
        >/</span>
  </span>
  
</div>
</template>
<script>
export default {
  props: {
    list: {
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

  methods: {
   change(path){
     this.$emit("change",path)
   }
  },


}


</script>