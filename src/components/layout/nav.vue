<template>
  <ul class="ol-nav" :class="navtype">
  {{activeNname}}
    <slot></slot>
  </ul>
</template>
<script>
export default {
  props: {
    type:{
      type: String
    },
    layout: {
      type: String
    }
  },
  data: function () {
    return {
    }
  },
  computed: { 
    navtype () {
      let styleStr = '';
      let layoutStr = '';

      // 样式
      switch(this.type) {
        case 'tabs':
          styleStr = 'ol-nav-tabs'
        break;
        case 'pills':
          styleStr = 'ol-nav-pills'
        break;
      }

      // 对其方式
      switch(this.layout) {
        case 'stacked':
          layoutStr = 'ol-nav-stacked '
        break;
        case 'justified':
          layoutStr = 'ol-nav-justified'
        break;
      }
      console.log(this.type)
      return styleStr + ' '+ layoutStr;
    }

  },
  methods: {
    change(path){

    }
  },
}
</script>
<style lang="stylus" rel='stylesheet/stylus'>
  @import '../../styles/mixin'
/* 
 * bootstrop nav 
 * 表单式导航或标签
 */
.ol-nav
  margin-bottom: 0
  padding-left: 0
  list-style: none
  clear()
  >li 
    position: relative
    display: block
    >span 
      position: relative
      display: block
      line-height:  1.428571429 
      padding: 10px 15px
      text-decoration: none
      &:hover,
      &:focus 
        text-decoration: none
        background-color: rgba(125,125,125,.1)
    & .disabled >span 
      color: rgba(125,125,125,.1)
      &:hover,
      &:focus 
        color: rgba(125,125,125,.1)
        text-decoration: none
        background-color: transparent
        cursor: not-allowed
  .open >span 
    &,
    &:hover,
    &:focus
      background-color: #eee
      border-color: #428bca 

.ol-nav-tabs
  border-bottom: 1px solid #ddd
  >li
    float: left
    margin-bottom: -1px
    >span
      margin-right: 2px
      border: 1px solid transparent
      border-radius: 2px 2px 0 0
  & .active >span
    &,
    &:hover,
    &:focus
      color: #555
      background-color: #fff
      border: 1px solid #ddd
      border-bottom-color: transparent
      cursor:default
        

    /* 
    *pill 胶囊式
    */
.ol-nav-pills
    > li
      float: left
      margin-bottom: -1px
      >span
        border-radius: 4px
      + li
        margin-left: 2px  
    & .active >span
      &,
      &:hover,
      &:focus
        color: #fff
        background-color: #428bca

    // Stacked pills
.ol-nav-stacked 
    > li 
      float: none
      + li
        margin-top: 2px
        margin-left: 0 // no need for this gap between nav items

    /* 
    * 两端对其
    */     

.ol-nav-justified
    width: 100%
    >li
      float: none
      >span
        text-align: center
        margin-bottom: 5px
    >.dropdown .dropdown-menu 
      top: auto
      left: auto
     @media (min-width: 768px) 
      > li 
        display: table-cell
        width: 1%
        >span 
          margin-bottom: 0
          
.nav-tabs-justified 
    border-bottom: 0;
    >li>span
      margin-right: 0
      

.nav-tabs-justified 
    border-bottom: 0
    > li >span 
      // Override margin from .nav-tabs
      margin-right: 0
      border-radius: 2px
    > .active >span,
    > .active >span:hover,
    > .active >span:focus 
      border: 1px solid #333
    @media (min-width: 768px) 
      > li >span 
        border-bottom: 1px solid #333
        border-radius: 2px 2px 0 0
      
      > .active >span,
      > .active >span:hover,
      > .active >span:focus 
        border-bottom-color: #333

 
</style>