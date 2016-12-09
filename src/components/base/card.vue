<style lang="sass" >
  .ol-card {
    background: #fff;
    font-size: .8rem;
    padding: .5rem 1rem;
    margin-bottom: .5rem;
    border-radius: 2px;
}
.ol-card-title {
    font-size: 1rem;
    background: rgba(0,0,0,0.02);
    padding: .5rem;
    margin: 0 -1rem;
    margin: -.5rem -1rem .5rem -1rem;
    border-bottom: 1px solid rgba(0,0,0,0.1);
}

</style>
<template>
    <div
      class=" ol-card "
      :style="cardStyleList"
    >
      <div v-if="title" class="ol-card-title">{{ title }}</div>
      <slot></slot>
    </div>
</template>
<script>
  export default {
    mounted (){
  
    },
    props:{
        title:{
          title: String,
          
        },

        bgColor:{
          type: String,
          default: "#fff"
        },

        fontColor:{
          type: String,
          default: "#555"
        }
    },

    components: { 
      
    },

    computed: {
       cardStyleList () {
          let list = {}
          list["background-color"] = this.bgColor
          list["color"] = this.fontColor
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