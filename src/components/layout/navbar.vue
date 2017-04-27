



<style lang = "sass">
.navbar{
  position: relative;
  min-height: 60px;
  margin-bottom: 10px;
  border: 1px solid transparent
  @include clearfix;
  @media (min-width: 1200px) {
    border-radius: 2x
  }

}

 /* heding */
 .navbar-header {
  @include clearfix;
  @media (min-width: 768px ) {
    float: left;
  }
 }


 /* body */

.navbar-collapse {
  overflow-x: visible;
  padding-right: 3px;
  padding-left: 2px;
  border-top: 1px sold transparent;
  box-shadow: inset 0 1px 0 rgba(225,255,255,.1)
  @include clearfix;
  -wekit-overflow-scrolling: touch
  &.in{
    overflow-y: auto;
  }
   &.collapse {
      display: block !important;
      height: auto !important;
      padding-bottom: 0; // Override default setting
      overflow: visible !important;
    }

    &.in {
      overflow-y: visible;
    }

    .navbar-fixed-top &,
    .navbar-static-top &,
    .navbar-fixed-bottom & {
      padding-left: 0;
      padding-right: 0;
    }
}

</style>
<template>
  <nav class="navbar navbar-default" role="navigation">
    <div class="container-fluid">
      <div class="navbar-header">
        <a class="navbar-brand" href="#">菜鸟教程</a>
      </div>
      <div>
        <ul class="nav navbar-nav">
          <li class="active">
            <a href="#">iOS</a>
          </li>
          <li>
            <a href="#">SVN</a>
          </li>
          <li class="dropdown">
            <a href="#" class="dropdown-toggle" data-toggle="dropdown">
              Java <b class="caret"></b>
            </a>
            <ul class="dropdown-menu">
              <li>
                <a href="#">jmeter</a>
              </li>
              <li>
                <a href="#">EJB</a>
              </li>
              <li>
                <a href="#">Jasper Report</a>
              </li>
              <li class="divider"></li>
              <li>
                <a href="#">分离的链接</a>
              </li>
              <li class="divider"></li>
              <li>
                <a href="#">另一个分离的链接</a>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  </nav>
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


</script
