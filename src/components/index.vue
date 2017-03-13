<style lang= 'sass'>
.main-resource,.main-contant{
     margin: 0 1rem 0 200px;; 
     line-height: 3.5;
     background-color:#fff;;
     -webkit-transition: all 0.5s;
     transition: all 0.5s;
}
.resact{
  padding: 0
}
.bar-left-side{
   position: absolute; 
   left: 0;
   top: 0;
   width:180px;
   z-index: 1000000;
   text-align:left;
   font-size:14px;
   background-color:white;
     .navbar-nav{
        .actives{
             background-color: #324057;

            a{
             background-color: #324057;
            }
        }
     }
}
.bar-left-side-item {
    width:100%;
    line-height:3.5;
    margin:0 auto;
    
    a{
       width:100%;
       height: 100%;
       display:inline-block;
       padding-left:10px;
       text-decoration:none;
       color:#999;
        &:hover{
            opacity:0.5; filer:alpha(opacity=50);
            color: #2d8aff;
            text-decoration: none;
            outline: none;
            cursor: pointer;
            -webkit-transition: color .3s ease;
            transition: color .3s ease;
        }
    }
}
.router-link-active{
      text-decoration:none;
      background:rgba(125,125,125,.1);

      a{
         color: #2db7f5;
      }
  }
.bar-left-side-item-icon {
    color:white;
   margin-right:1rem;
}
@media (max-width:768px) { 
    .bar-left-side{
        width: 0px;
        overflow: hidden;
        -webkit-transition: all 0.5s;
        transition: all 0.5s;
    }
    .main-resource{
        -webkit-transition: all 0.5s;
        transition: all 0.5s;
        margin: 0 1em 0 0;
        line-height: 3.5
    }

    .main-contant{
      -webkit-transition: all 0.5s;
        transition: all 0.5s;
        margin: 0 1em 0 0;
        line-height: 3.5
    } 

 }
@media (min-width:768px) { 
 }

/* 中型设备（台式电脑，992px */
@media (min-width: 992px) { 
}
/* 大型设备（大台式电脑，1200px */
@media (min-width: 1200px) { 
  
 }
</style>
<template>
  <section>
    <nav class="bar-left-side " role="navigation" >
      <div>
        <ul class="resact">
          <li class=" bar-left-side-item" >

            <router-link to="/index" tag="li" active-class="active">

              <a href="#"> <i class="icon-file-alt bar-left-side-item-icon"></i>
                <span>跳转</span>
              </a>
            </router-link>
          </li>
            <li class=" bar-left-side-item" >

            <router-link to="/icon" tag="li">

              <a href="#"> <i class="icon-file-alt bar-left-side-item-icon"></i>
                <span>
                  icon &nbsp; 
                </span>
              </a>
            </router-link>
          </li>
          <li class=" bar-left-side-item" >

            <router-link to="/button" tag="li">

              <a href="#"> <i class="icon-file-alt bar-left-side-item-icon"></i>
                <span>
                  Button &nbsp; 
                </span>
              </a>
            </router-link>
          </li>

          <li class=" bar-left-side-item" >

            <router-link to="/dropbutton" tag="li">

              <a href="#">
                <i class="icon-file-alt bar-left-side-item-icon"></i>
                <span>dropButton &nbsp;</span>
              </a>
            </router-link>
          </li>
          <li class=" bar-left-side-item" >

            <router-link to="/tag" tag="li">

              <a href="#">
                <i class="icon-file-alt bar-left-side-item-icon"></i>
                <span>tag &nbsp;</span>
              </a>
            </router-link>
          </li>

          <li class=" bar-left-side-item" >

            <router-link to="/table" tag="li">

              <a href="#">
                <i class="icon-file-alt bar-left-side-item-icon"></i>
                <span>table &nbsp;</span>
              </a>
            </router-link>
          </li>
          <li class=" bar-left-side-item" >

            <router-link to="/checkbox" tag="li">

              <a href="#">
                <i class="icon-file-alt bar-left-side-item-icon"></i>
                <span>checkbox &nbsp;</span>
              </a>
            </router-link>
          </li>
          <li class=" bar-left-side-item">
            <router-link to="/card" tag="li">

              <a href="#">
                <i class="icon-file-alt bar-left-side-item-icon"></i>
                <span>card &nbsp;</span>
              </a>
            </router-link>
          </li>
          <li class=" bar-left-side-item">
            <router-link to="/radio" tag="li">

              <a href="#">
                <i class="icon-file-alt bar-left-side-item-icon"></i>
                <span>radio &nbsp;</span>
              </a>
            </router-link>
          </li>

          <li class=" bar-left-side-item">
            <router-link to="/input" tag="li">

              <a href="#">
                <i class="icon-file-alt bar-left-side-item-icon"></i>
                <span>input &nbsp;</span>
              </a>
            </router-link>
          </li>

          <li class=" bar-left-side-item">
            <router-link to="/switch" tag="li">

              <a href="#">
                <i class="icon-file-alt bar-left-side-item-icon"></i>
                <span>switch &nbsp;</span>
              </a>
            </router-link>
          </li>
          <li class=" bar-left-side-item">
            <router-link to="/slider" tag="li">

              <a href="#">
                <i class="icon-file-alt bar-left-side-item-icon"></i>
                <span>slider &nbsp;</span>
              </a>
            </router-link>
          </li>
          <li class=" bar-left-side-item">
            <router-link to="/datepick" tag="li">

              <a href="#">
                <i class="icon-file-alt bar-left-side-item-icon"></i>
                <span>datepick &nbsp;</span>
              </a>
            </router-link>
          </li>
          <li class=" bar-left-side-item">
            <router-link to="/select" tag="li">

              <a href="#">
                <i class="icon-file-alt bar-left-side-item-icon"></i>
                <span>select &nbsp;</span>
              </a>
            </router-link>
          </li>
          <li class=" bar-left-side-item">
            <router-link to="/cascader" tag="li">

              <a href="#">
                <i class="icon-file-alt bar-left-side-item-icon"></i>
                <span>cascader &nbsp;</span>
              </a>
            </router-link>
          </li>
          <li class=" bar-left-side-item">
            <router-link to="/alert" tag="li">
              <a href="#">
                <i class="icon-file-alt bar-left-side-item-icon"></i>
                <span>alert &nbsp;</span>
              </a>
            </router-link>
          </li>
           <li class=" bar-left-side-item">
            <router-link to="/showTooltip" tag="li">
              <a href="#">
                <i class="icon-file-alt bar-left-side-item-icon"></i>
                <span>tooltip &nbsp;</span>
              </a>
            </router-link>
          </li>

          <li class=" bar-left-side-item">
            <router-link to="/loding" tag="li">

              <a href="#">
                <i class="icon-file-alt bar-left-side-item-icon"></i>
                <span>loding &nbsp;</span>
              </a>
            </router-link>
          </li>
          <li class=" bar-left-side-item">
            <router-link to="/timeline" tag="li">

              <a href="#">
                <i class="icon-file-alt bar-left-side-item-icon"></i>
                <span>timeline &nbsp;</span>
              </a>
            </router-link>
          </li>
          <li class=" bar-left-side-item">
            <router-link to="/upload" tag="li">

              <a href="#">
                <i class="icon-file-alt bar-left-side-item-icon"></i>
                <span>upload &nbsp;</span>
              </a>
            </router-link>
            <li class=" bar-left-side-item">
              <router-link to="/progress" tag="li">

                <a href="#">
                  <i class="icon-file-alt bar-left-side-item-icon"></i>
                  <span>progress &nbsp;</span>
                </a>
              </router-link>
            </li>
            <li class=" bar-left-side-item">
              <router-link to="/tree" tag="li">

                <a href="#">
                  <i class="icon-file-alt bar-left-side-item-icon"></i>
                  <span>tree &nbsp;</span>
                </a>
              </router-link>

            </li>
               <li class=" bar-left-side-item">
              <router-link to="/model" tag="li">

                <a href="#">
                  <i class="icon-file-alt bar-left-side-item-icon"></i>
                  <span>model &nbsp;</span>
                </a>
              </router-link>

            </li>
            <li class=" bar-left-side-item">
              <router-link to="/notifiction" tag="li">
                <a href="#">
                  <i class="icon-file-alt bar-left-side-item-icon"></i>
                  <span>notifiction &nbsp;</span>
                </a>
              </router-link>
            </li>
               <li class=" bar-left-side-item">
              <router-link to="/preview" tag="li">
                <a href="#">
                  <i class="icon-file-alt bar-left-side-item-icon"></i>
                  <span>preview &nbsp;</span>
                </a>
              </router-link>
            </li>
          </li>
          <li class=" bar-left-side-item">
            <router-link to="/breadcrumb" tag="li">
              <a href="#">
                <i class="icon-file-alt bar-left-side-item-icon"></i>
                <span>breadcrumb &nbsp;</span>
              </a>
            </router-link>

          </li>
          <li class=" bar-left-side-item">
            <router-link to="/pagination" tag="li">
              <a href="#">
                <i class="icon-file-alt bar-left-side-item-icon"></i>
                <span>pagination &nbsp;</span>
              </a>
            </router-link>

          </li>

        </ul>
      </div>
    </nav>
    <section  class="main-contant">
      <router-view></router-view>
    </section>
  </section>

</template>
<script>

  export default {
    components: { 
      
          },

    ready() {
        console.log(this.$route.auth + "user")
    },

    data () {
      return {
        totalTime: 0,
      }
    },
    
    events: {
      
    }
  }
</script>