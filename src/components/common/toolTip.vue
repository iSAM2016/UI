<style lang="stylus" >

.ol-tooltips{
    position: fixed;
    text-align: center;
    visibility: hidden;
    background-color: rgba(0,0,0,.3);
    padding: 0  6px;
    font-size: .8rem;
    line-height: 2.4;
    border-radius: 4px;
    outline: none;
    color: #fff;
    touch-action: manipulation;
}


</style>
<template>
  <div
      class='ol-tooltips'
  >
    <slot></slot>
  </div>
</template>
<script>
  export default {
    mounted (){
      let self = this;
      let top = this.$el.parentNode.getBoundingClientRect().top;
      let left = this.$el.parentNode.getBoundingClientRect().left;
      let parentWidth = this.$el.parentNode.offsetWidth;
      let height = this.$el.offsetHeight; 
      let width = this.$el.offsetWidth;
      this.$el.style.top = top - height  - 16 + "px";
      this.$el.style.left = left + (parentWidth - width)/2 + "px";
      // 为父元素绑定事件
      this.$el.parentNode.addEventListener("mouseover", function(){
        self.$el.style.visibility = 'visible';
      }, false);
      this.$el.parentNode.addEventListener("mouseout", function(){
        self.$el.style.visibility = 'hidden';
      }, false);
    },
    props:{
    },
    components: { 
    },
    data () {
      return {
        show:true
      }
    },
    computed: {
    },
    methods: {
    }
}
</script>