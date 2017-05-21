<style lang="stylus" >
.ol-drop-btn{
  position: relative; 
  display: inline-block;
    .rd-dropbtn-icon {
        margin-left: .3rem;
    }     
}

.ol-drop-button-list{
    position: absolute;
    top: 3rem;
    left: 50%;
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    background: #fff;
    padding: 0 .5rem;
    box-shadow: 0 0 .5rem #dedede;
    transform: translateX(-50%);
    border-radius: .2rem;
    z-index: 2;

}

.ol-drop-button-list .ol-btn {
  width: 100%;
  background: #fff;
  border-radius: 0;
  border: none;
  border-bottom: 1px solid #ccc;
  padding: .5rem .3rem;
}

.ol-drop-button-list .ol-btn:last-child {
  
  border-bottom: none;
  
}

@keyframes fadeInDown{
  form {
     opacity: 0;
     -webkit-transform: translate3d(-50%, -1rem, 0);
    transform: translate3d(-50%, -1rem, 0);
  }

  to{
     opacity: 1;
    -webkit-transform: translate3d(-50%, 0, 0);
    transform: translate3d(-50%, 0, 0);

  }
}

@keyframes fadeOutUp{
  from {
    opacity: 1;
    -webkit-transform: translate3d(-50%, 0, 0);
    transform: translate3d(-50%, 0, 0);
  }

  to {
    opacity: 0;
    -webkit-transform: translate3d(-50%, -1rem, 0);
    transform: translate3d(-50%, -1rem, 0);
  }
}


.fade-in-dowm-transition{
  animation-duration: .3s;
  animation-fill-mode: both;

}

.fade-in-dowm-enter-activ{
  animation-name: fadeInDown;
  
}

.fade-in-dowm-leave{
  animation-name: fadeOutUp;
  
}


.bounce-enter-active {
  animation: bounce-in .3s;
  animation-fill-mode: both;
}
.bounce-leave-active {
  animation: bounce-out .3s;
  animation-fill-mode: both;
}

@keyframes bounce-in {
 form {
     opacity: 0;
     -webkit-transform: translate3d(-50%, -1rem, 0);
    transform: translate3d(-50%, -1rem, 0);
  }

  to{
     opacity: 1;
    -webkit-transform: translate3d(-50%, 0, 0);
    transform: translate3d(-50%, 0, 0);

  }
}
@keyframes bounce-out {
 from {
    opacity: 1;
    -webkit-transform: translate3d(-50%, 0, 0);
    transform: translate3d(-50%, 0, 0);
  }

  to {
    opacity: 0;
    -webkit-transform: translate3d(-50%, -1rem, 0);
    transform: translate3d(-50%, -1rem, 0);
  }
}

</style>
<template>
      <button 
        class=" ol-drop-btn ol-btn default"
        @click="showbtton"
        :class="classList"
        >
         <span >{{text }}</span>
         <i class="icon-angle-down"></i>
        <transition name="bounce">
          
           <div 
               class="ol-drop-button-list"
               v-show="state.show"
               >
                 <slot ></slot>
           </div>
        </transition>

         </button>
       
</template>
<script>
import {catIn} from '../utils'
  export default {
    mounted (){
    window.document.body.addEventListener("click",this.leaveClose)
    },

    ready(){
      window.document.body.addEventListener('click', this.leaveClose)
    },
    props:{
        type:{
          type: String,
          default: ()=> "default"
        },

        text:{
          type: String,
          default: ()=> "default"
        },

       
         disabled:{
          type:  Boolean,
          default: ()=> false
        },

         
    },

    components: { 
      
    },

    computed: {
       classList () {
        let list = []
        if(this.type){
          list.push(this.type)
        }
        
        if(this.disabled){
          list.push("ol-btn-disabled")
        }

        return list
       }
    },

    data () {
      return {
        state: {
                show: false
            }
      }
    },
    
    events: {
      
    },

    methods:{
      leaveClose (e) {

            if (!this.state.show) return
            
            if( !catIn(e.target,this.$el)){
                this.state.show = false
            }
            
        },
      showbtton(){
        if( this.disabled) return
            this.state.show = !this.state.show
      },
    }
  }

</script>