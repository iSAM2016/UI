<style lang = "sass">
    .progress{
        height: 25px;
        background: #f3f3f3;
        padding: 2px;
        overflow: visible;
        border-radius: 20px;
       
        margin-top: 50px;
      }
      .progress .progress-bar{
        border-radius: 20px;
        position: relative;
        animation: animate-positive 2s;
      }
      .progress .progress-value{
        display: block;
        padding: 3px 7px;
        font-size: 13px;
        color: #fff;
        border-radius: 4px;
        background: #191919;
        border: 1px solid #000;
        position: absolute;
        top: -40px;
        right: -10px;
      }
      .progress .progress-value:after{
        content: "";
        border-top: 10px solid #191919;
        border-left: 10px solid transparent;
        border-right: 10px solid transparent;
        position: absolute;
        bottom: -6px;
        left: 26%;
      }
  
      .progress-bar.active{
          animation: reverse progress-bar-stripes 0.40s linear infinite, animate-positive 2s;
      }

      @-webkit-keyframes animate-positive{
        0%{
          width: 0;
        }
      }

       @keyframes animate-positive{
        0% { width: 0; }
      }


</style>
<template>
<div ref = "kl">
  <div class="progress">
          <div class="progress-bar progress-bar-info progress-bar-striped active" style="width: 85%;">
            <div class="progress-value">85%</div>
          </div>
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