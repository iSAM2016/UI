<style lang="sass" >
 @import '../../css/index'; 

.ol-btn{
    display: inline-block;
    margin-bottom: 0;
    text-align: center;
    border: 1px solid transparent;
    background-image: none;
    background-color: #fff;
    cursor: pointer;
    white-space: normal;
    padding: .2rem  1.4rem;
    font-size: .8rem;
    line-height: 2.4;
    border-radius: 4px;
    outline: none;
    transition: background 0.2s;
    touch-action: manipulation;
}


.ol-btn.default {
    color: #666;
    background-color: #fff;
    border-color: #d9d9d9;
}
.ol-btn.primary {
    color: #fff;
    background-color: #57c5f7;
    border-color: #57c5f7;
    &:hover,
    &:focus {
        background-color: #81d8ff;
        color: #fff;
    }
}
.ol-btn.ghost {
    color: #666;
    background-color: #f7f7f7;
    border-color: #d9d9d9;
}
.ol-btn.warning {
    color: #fff;
    background-color: #fa0;
    border-color: #fa0;
    &:hover,
    &:focus {
        color: #fff;
        background-color: rgba(255, 170, 0, 0.7);
        border-color: #fa0;
    }
}
.ol-btn.danger {
    color: #fff;
    background-color: #f50;
    border-color: #f50;
    &:hover,
    &:focus {
        color: #fff;
        border-color: #f50;
        background-color: rgba(255, 85, 0, 0.7);
    }
}
.ol-btn.success {
    background-color: #87d068;
    border-color: #87d068;
    color: #fff;
    &:hover,
    &:focus {
        color: #fff;
        border-color: #87d068;
        background-color: rgba(135, 208, 104, 0.7);
    }
}
.ol-btn.info {
    color: #fff;
    border-color:#2db7f5;
    background-color: #2db7f5;
    &:hover,
    &:focus {
        color: #fff;
        border-color: #2db7f5;
        background-color: rgba(45, 183, 245, 0.7);
    }
}
.ol-btn:focus, .ol-btn:hover {
    color: #57c5f7;
    background-color: #fff;
    border-color: #57c5f7;
}


.ol-btn.ol-btn-small {
    padding: .2rem .3rem;
    min-width: initial;
    font-size: .8rem;
    line-height: 1rem;
    min-width: initial;
}
.ol-btn.ol-btn-large {
    padding: .2rem 1.5rem;
    font-size: 1.4rem;
}

.ol-btn-icon-only {
    font-size: 1rem;
    line-height: 2rem;
    vertical-align: baseline;
}

.ol-btn.ol-btn-icon {
    width: 2rem;
    min-width: initial;
    border-radius: 50%;
    height: 2rem;
    line-height: 2rem;
    padding: 0;
    i {
        margin-right: 0;
    }
}
@-webkit-keyframes loading {
  from {
    transform-origin: 50% 50%;
    -webkit-transform: rotate(0deg);
    transform: rotate(0deg);
  }

  to {
    transform-origin: 50% 50%;
    -webkit-transform: rotate(360deg);
    transform: rotate(360deg);
  }
}
@keyframes loading {
  from {
    transform-origin: 50% 50%;
    -webkit-transform: rotate(0deg);
    transform: rotate(0deg);
  }

  to {
    transform-origin: 50% 50%;
    -webkit-transform: rotate(360deg);
    transform: rotate(360deg);
  }
}

.ol-btn-loading {
    display: inline-block;
    animation: loading 1s infinite linear;
}

.ol-btn.ol-btn-disabled{
    color: #c3c3c3;
    background: #ececec;
    border-color: #cecece;
    cursor: not-allowed;
    &:hover {
        color: #a7a7a7;
        background: #ececec;
        border-color: #d9d9d9;
    }
}
</style>
<template>
  <button  
    class="ol-btn"
    :class="btnClass"

    >
     <i class="rd-btn-icon-only" 
        :class="iconClass" 
        v-if="icon"
      >
      </i>

      
    
       <span class="ol-btn-loading ion-load-a" 
          v-if="loading && !icon"></span>

      <span v-if="!icon">
            <slot></slot>
      </span>
  </button>
</template>
<script>

  export default {
    mounted (){
     
    },
    props:{
        type:{
          type: String,
          default: ()=> "default"
        },

        size:{
          type: String,
          default: ()=> "default"
        },

         color:{
          type: String,
          default: ()=> ""
        },

         disabled:{
          type:  Boolean,
          default: ()=> false
        },

         icon:{
            type:  String,
            default: ()=> ""
         },

         loading:{
          type:  Boolean,
            default: ()=> false
         }
    },

    components: { 
      
    },

    computed: {
      iconClass(){
         let list = []
         if(!this.icon) return list
         list.push(this.icon) 
          return list 
      },

      btnClass(){
           let list = []

          switch(this.type){
            case "default":
              list.push("default")
              break
            case "success":
              list.push("success")
              break
            case "primary":
              list.push("primary")
              break
            case "danger":
              list.push("danger")
              break
            case "info":
              list.push("info")
              break

           
            case "warning":
              list.push("warning")
              break 


           }

           switch(this.size){
            case "small":
              list.push("ol-btn-samll")
              break
            case "large":
              list.push("ol-btn-large")
              break

                
            }

             if (this.disabled) {
                list.push('ol-btn-disabled')
            }

          
            if (this.icon) {
                list.push('ol-btn-icon')
              }

            
         


        return list
       
    },

    data () {
      return {
        
      }
    },
    
    events: {
      
    }
  }
}
</script>