<style lang="sass" >
.ol-tg-wrapper{
  position: relative; 
  display: inline-block;
  padding: .1rem  .6rem;
  text-align: center;
  vertical-align: middle;
  line-height: 2;

}




.ol-tg-wrapper.primary {
    color: #fff;
    background-color: #57c5f7;
    border-color: #57c5f7;
    &:hover,
    &:focus {
        background-color: #81d8ff;
        color: #fff;
    }
}
.ol-tg-wrapper.ghost {
    color: #666;
    background-color: #f7f7f7;
    border-color: #d9d9d9;
}
.ol-tg-wrapper.warning {
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
.ol-tg-wrapper.danger {
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
.ol-tg-wrapper.success {
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
.ol-tg-wrapper.info {
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
.ol-tg-wrapper:focus, .ol-tg-wrapper:hover {
    color: #57c5f7;
    background-color: #fff;
    border-color: #57c5f7;
}

.ol-tg-icon{
  font-size: 0.8rem
}

</style>
<template>
     <div
        class="ol-tg-wrapper"
        :class="classList"
     >
       {{ value }}
       <i 
        class="ol-tg-icon"
        :class="icon"
        v-if="icon"
        ></i>
     </div>
</template>
<script>
  export default {
    mounted (){
  
    },
    props:{
        type:{
          type: String,
          default: ()=> "primary"
        },

        value:{
          type: String,
          default: ()=> ""
        },

       
         icon:{
          type:  String,
          default: ()=> ""
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
          
         

          return list
       }
    },

    data () {
      return {
       
      }
    },
    
    events: {
      
    },

    methods:{
     
    }
  }

</script>
