<style lang = "sass">
#loader8 {     
  margin: 30px 50px;     
  float: left;     
  font-size: 10px;     
  position: relative;     
  text-indent: -9999em;     
  border-top: 1.1em solid rgba(255, 128, 0, 0.1);     
  border-right: 1.1em solid rgba(255, 128, 0, 0.1);     
  border-bottom: 1.1em solid rgba(255, 128, 0, 0.1);     
  border-left: 1.1em solid rgba(255, 128, 0, 1);     
  -webkit-animation: load8 1.1s infinite linear;     
  animation: load8 1.1s infinite linear;     
}     
#loader8,     
#loader8:after {     
  border-radius: 50%;     
  width: 10em;     
  height: 10em;     
}     
@-webkit-keyframes load8 {     
  0% {     
    -webkit-transform: rotate(0deg);     
    transform: rotate(0deg);     
  }     
  100% {     
    -webkit-transform: rotate(360deg);     
    transform: rotate(360deg);     
  }     
}     
@keyframes load8 {     
  0% {     
    -webkit-transform: rotate(0deg);     
    transform: rotate(0deg);     
  }     
  100% {     
    -webkit-transform: rotate(360deg);     
    transform: rotate(360deg);     
  }     
}     
  
</style>
<template>
<div ref = "kl">
  <div id="loader8">
    
  </div>
  
</div>
</template>
<script>
export default {
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
   
 

  methods: {
   
  },


}


</script>