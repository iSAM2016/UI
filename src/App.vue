
<style  lang = "stylus" >
@import './styles/ionicons/ionicons.min.css'; 
@import './styles/main'; 
</style>
<template>
<div>
   <router-view></router-view>  
   <ol-preview></ol-preview>   
</div>
</template>
<script>
 import olPreview from './components/global/preview';
  export default {
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

