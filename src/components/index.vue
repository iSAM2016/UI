<style lang= 'stylus'>
.ol-wap{
  width: 1200px;
  margin: 0 auto;
  clear: both;
}
.main-contant{
     line-height: 3.5;
     float: left;
     width: 1020px;
     padding-left: 14px;
     background-color:#fff;;
     -webkit-transition: all 0.5s;
     transition: all 0.5s;
}
.resact{
  padding: 0
}
.bar-left-side{
   float: left;
   width:180px;
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
      padding: .2rem 0;
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
</style>
<template>
  <section class="ol-wap">
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
</script>