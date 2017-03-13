<style  lang = "sass" >

@import '../styles/ionicons/ionicons.min.css'; 
 
</style>
<template>
<div>
  <router-view></router-view> 
  <ol-preview></ol-preview>
</div>
</template>
<script>
import olPreview from './global/preview';
  export default {
     vuex: {
      getters: {
      },
      actions: {
      }
    },
    components: {
       olPreview 
    },
    data () {
      return {
      }
    },
    methods:{
    },
    created() {
    }
  }
</script>