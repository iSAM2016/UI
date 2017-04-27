<template>
  <div>
    <ol-nav type="tabs" v-model="activeNname">
      <ol-nav-pane name="fist">Home</ol-nav-pane>
      <ol-nav-pane name="second">SVN</ol-nav-pane>
      <ol-nav-pane name="three">iOS</ol-nav-pane>
      <ol-nav-pane name="four">Java</ol-nav-pane>
    </ol-nav>
    <!--   <ul class="nav nav-tabs">
    <li class="active">
      <a href="#">Home</a>
    </li>
    <li>
      <a href="#">SVN</a>
    </li>
    <li>
      <a href="#">iOS</a>
    </li>
    <li class="dropdown">
      <a class="dropdown-toggle" data-toggle="dropdown" href="#">
        Java
        <span class="caret"></span>
      </a>
      <ul class="dropdown-menu">
        <li>
          <a href="#">Swing</a>
        </li>
        <li>
          <a href="#">jMeter</a>
        </li>
        <li>
          <a href="#">EJB</a>
        </li>
        <li class="divider"></li>
        <li>
          <a href="#">分离的链接</a>
        </li>
      </ul>
    </li>
    <li>
      <a href="#">Java</a>
    </li>
    <li>
      <a href="#">PHP</a>
    </li>
  </ul>
  -->
  <!--     <p>标签式的导航菜单</p>
<olNav>
  <ul class="nav nav-tabs">
    <li class="active">
      <a href="#">Home</a>
    </li>
    <li>
      <a href="#">SVN</a>
    </li>
    <li>
      <a href="#">iOS</a>
    </li>
    <li class="dropdown">
      <a class="dropdown-toggle" data-toggle="dropdown" href="#">
        Java
        <span class="caret"></span>
      </a>
      <ul class="dropdown-menu">
        <li>
          <a href="#">Swing</a>
        </li>
        <li>
          <a href="#">jMeter</a>
        </li>
        <li>
          <a href="#">EJB</a>
        </li>
        <li class="divider"></li>
        <li>
          <a href="#">分离的链接</a>
        </li>
      </ul>
    </li>
    <li>
      <a href="#">Java</a>
    </li>
    <li>
      <a href="#">PHP</a>
    </li>
  </ul>
</olNav>
<p>胶囊</p>
<olNav>

  <ul class="nav nav-pills">
    <li class="active">
      <a href="#">Home</a>
    </li>
    <li>
      <a href="#">SVN</a>
    </li>
    <li>
      <a href="#">iOS</a>
    </li>
    <li>
      <a href="#">VB.Net</a>
    </li>
    <li>
      <a href="#">Java</a>
    </li>
    <li>
      <a href="#">PHP</a>
    </li>
  </ul>
</olNav>
<p>垂直的胶囊式导航菜单</p>
<olNav>
  <ul class="nav nav-pills nav-stacked">
    <li class="active">
      <a href="#">Home</a>
    </li>
    <li>
      <a href="#">SVN</a>
    </li>
    <li>
      <a href="#">iOS</a>
    </li>
    <li>
      <a href="#">VB.Net</a>
    </li>
    <li>
      <a href="#">Java</a>
    </li>
    <li>
      <a href="#">PHP</a>
    </li>
  </ul>
</olNav>
<p>两端对齐的导航元素</p>
<olNav>
  <ul class="nav nav-pills nav-justified">
    <li class="active">
      <a href="#">Home</a>
    </li>
    <li>
      <a href="#">SVN</a>
    </li>
    <li>
      <a href="#">iOS</a>
    </li>
    <li>
      <a href="#">VB.Net</a>
    </li>
    <li>
      <a href="#">Java</a>
    </li>
    <li>
      <a href="#">PHP</a>
    </li>
  </ul>
</olNav>
-->
</div>
</template>
<script>
import { olNav, olNavPane }from '../index'

export default {
  data: function () {
    return {
      activeNname: 'first'
    }
  },
  components: { 
    olNav,
    olNavPane
  },
  methods: {
   change(path){
   }
  },
}
</script>
<style lang="stylus" rel='stylesheet/stylus'>@import '../../styles/mixin'</style>