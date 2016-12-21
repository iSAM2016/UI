<style lang="sass" >
 @import '../../css/index'; 
.ol-timeline-recourse{
    position: relative;
}

.ol-timeline{
    position: relative;
    width: 100%;
    height: 4rem;
    list-style: none;
    text-align: left;
    background-color: #fff;
    cursor: pointer;
    white-space: normal;
    padding: .4rem  1.4rem;
    line-height: 2.4;
    outline: none;
        
}

.ol-timeline-word{
    font-size: 0.8rem;
}

.ol-timeline-icon{
    background-color: #fff;
    position: relative;
    z-index: 2;
    padding-right: 1rem;
}

.ol-timeline-line{
    display: inline-block;
    position: absolute;
    left: 19.6px;
    z-index: 1;
    top: 20px;
    width: 2px;
    height: 100%; 
    background-color: #ccc;  
  }

.ol-timeline .warning {
    color: #fa0;
}
.ol-timeline .failed {
    color: #f50;
}
.ol-timeline .successs {
    color: #87d068;
}
.ol-timeline .info {
    color: #57c5f7;
}

</style>
<template>
  <ul
      class='ol-timeline-recourse'
  >
      <li
        v-for="(item,index) in timeline"
        class='ol-timeline'
        
      >
         <i  class="icon-file-alt ol-timeline-icon"

            :class="item.state"
        ></i>
        <span class="ol-timeline-word">{{  item.text }}</span>
        <span class="ol-timeline-line" v-if="index+1 !== timeline.length"></span>              
      </li>
  </ul>
</template>
<script>

  export default {
    mounted (){
     
    },
    props:{
        timeline:{
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

      alertClass(){
          let list = []

          switch(this.alerts.state){
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

        return list
       
      }
    },

    methods: {
        
    }
}
</script>