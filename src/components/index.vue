<style lang= 'sass'>
  
</style>
<template>
   <section>
      <nav class="bar-left-side " role="navigation" >
          <div>
                <ul class=" ">
                      <li class=" bar-left-side-item" >
          
                      <router-link to="/index" tag="li">
          
                          <a href="#"> 
                          <i class="icon-file-alt bar-left-side-item-icon"></i>
                              <span>跳转</span>
                          </a>
                        </router-link>
                      </li>

                      <li class=" bar-left-side-item" >
          
                      <router-link to="/button" tag="li">
          
                          <a href="#"> 
                          <i class="icon-file-alt bar-left-side-item-icon"></i>
                              <span>
                                  Button &nbsp; 
                                  按钮
                              </span>
                          </a>
                        </router-link>
                      </li>

                      <li class=" bar-left-side-item" >
          
                      <router-link to="/dropbutton" tag="li">
          
                          <a href="#"> 
                          <i class="icon-file-alt bar-left-side-item-icon"></i>
                              <span>
                                  dropButton &nbsp; 
                                  
                              </span>
                          </a>
                        </router-link>
                      </li>
                      <li class=" bar-left-side-item" >
          
                      <router-link to="/tag" tag="li">
          
                          <a href="#"> 
                          <i class="icon-file-alt bar-left-side-item-icon"></i>
                              <span>
                                  tag &nbsp; 
                                  
                              </span>
                          </a>
                        </router-link>
                      </li>
                      
                        <li class=" bar-left-side-item" >
          
                      <router-link to="/table" tag="li">
          
                          <a href="#"> 
                          <i class="icon-file-alt bar-left-side-item-icon"></i>
                              <span>
                                  table &nbsp; 
                                  
                              </span>
                          </a>
                        </router-link>
                      </li>
                       <li class=" bar-left-side-item" >
          
                      <router-link to="/checkbox" tag="li">
          
                          <a href="#"> 
                          <i class="icon-file-alt bar-left-side-item-icon"></i>
                              <span>
                                  checkbox &nbsp; 
                                  
                              </span>
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