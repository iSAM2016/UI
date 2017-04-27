<style lang="stylus" >

.ol-alert{
    position: relative;
    width: 100%;
    margin-bottom: .2rem;
    text-align: left;
    border: 0 solid transparent;
    background-image: none;
    background-color: #fff;
    cursor: pointer;
    white-space: normal;
    padding: .4rem  1.4rem;
    line-height: 2.4;
    border-radius: 4px;
    outline: none;
    transition: background 0.2s;
    touch-action: manipulation;
        
}

.ol-alert-icon{
    display: table-cell;
    font-size: 2rem;
    padding-right: 1rem; 
    vertical-align: middle; 
    line-height: 2rem; 
     &.samll{
        font-size: 1.4rem;
        line-height: 1.4rem; 
     }   
  }

.ol-alert-content{
    display: table-cell;

      .ol-alert-title{
         font-weight: bolder;
      }

      .ol-alert-word{

      }

}

 .ol-alert-close{
    position: absolute;
    right: .6rem;
    top:.5rem;  
  }


.ol-alert.warning {
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
.ol-alert.failed {
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
.ol-alert.success {
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
.ol-alert.info {
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
.ol-alert:focus, .ol-alert:hover {
    color: #57c5f7;
    background-color: #fff;
    border-color: #57c5f7;
}

</style>
<template>
  <div
      class='ol-alert-recourse'
  >
      <div
        v-for="item in alerts"
        class='ol-alert'
        :class="item.state"
        v-if="item.show"
      >

        <i class=" ol-alert-icon" :class='{
          "ion-ios-checkmark": item.state === "success",
          "ion-android-cancel": item.state === "failed",
          "ion-information-circled": item.state === "info",
          "ion-android-alert": item.state === "warning",
          "samll": !item.content
          }'></i>
        <div class="ol-alert-content " >
           <span class="ol-alert-title">{{ item.title }}</span>
           <p class="ol-alert-word" v-if="item.content">{{ item.content }}</p>
        <i class="icon-file-alt ol-alert-close"
            @click="closefn(item)"
        ></i>
       </div>
      </div>
  </div>
</template>
<script>
  export default {
    mounted (){
     
    },
    props:{
        alerts:{
          type: Array,
          require: true
        },

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
        closefn(item){
          item.show = false
        }
    }
}
</script>
