<style lang = "stylus">
    .ol-progress{
        height: 25px;
        background: #f3f3f3;
        padding: 2px;
        overflow: visible;
        border-radius: 20px;
        margin-top: 50px;
      }
      .ol-progress .ol-progress-bar{
        height: 100%;
        border-radius: 20px;
        position: relative;
        animation: animate-positive 2s;
        background: #2db7f5;
      }
      .ol-progress .ol-progress-value{
        display: block;
        padding: 3px 7px;
        font-size: 13px;
        color: #fff;
        border-radius: 4px;
        background: #191919;
        border: 1px solid #000;
        position: absolute;
        top: -60px;
        right: -10px;
      }
      .ol-progress .ol-progress-value:after{
        content: "";
        border-top: 10px solid #191919;
        border-left: 10px solid transparent;
        border-right: 10px solid transparent;
        position: absolute;
        bottom: -6px;
        left: 26%;
      }
  
      .ol-progress-bar.active{
          animation: reverse ol-progress-bar-stripes 0.40s linear infinite, animate-positive 2s;
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
<div>
  <div class="ol-progress">
          <div class="ol-progress-bar ol-progress-bar-info ol-progress-bar-striped active" :style="{width: start +'%'}">
            <div class="ol-progress-value"> {{start}}%</div>
          </div>
        </div>
  
</div>
</template>
<script>
export default {
  props: {
    pregress: {
      type:Object,
    },
  },

  data: function () {
    return {
      start: this.pregress.start,
    }
  },

  methods: {
   
  },


}


</script>