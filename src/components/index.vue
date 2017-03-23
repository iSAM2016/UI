<style lang= 'stylus'>
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
   border-right: 1px solid #f3f3f3;
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
          <li class=" bar-left-side-item" v-for="item in $router.options.routes[0].children">
            <router-link :to=item.path tag="li" >
              <a href="#"> <i class="icon-file-alt bar-left-side-item-icon"></i>
                <span>{{ item.name }}</span>
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
    mounted() {
    },
    data () {
      return {
        totalTime: 0,
      }
    },
  }
</script>