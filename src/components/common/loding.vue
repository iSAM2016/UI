<style lang = "stylus">
.ol-loading {     
  margin: 2px 8px;     
 /*  float: left;    */  
  font-size: 10px;     
  position: relative;     
  text-indent: -9999em;     
  border:.4em solid transparent;     
    border-top: .2rem solid rgb(243, 243, 243);
    border-right: .2rem solid rgb(243, 243, 243);
    border-bottom: .2rem solid rgb(243, 243, 243);
    border-left: .2rem solid transparent;
  -webkit-animation: load8 1.1s infinite linear;     
  animation: load8 1.1s infinite linear;     
}     
.ol-loading,     
.ol-loading:after {     
  border-radius: 50%;     
  width: 3em;     
  height: 3em;     
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
<div class="ol-loading" :style="{ 'border-left': '.2rem solid ' + color }"></div>
</template>
<script>
export default {
  props: {
    color: {
      type:String,
      require:true,
        default (){
          return  '#2db7f5'
        } 
    }
  },
}


</script>