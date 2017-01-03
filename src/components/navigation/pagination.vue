<style lang="sass" >
.ol-pagination{
    display: inline-block;
    width: 2rem;
    height: 2rem;
    line-height: 2;
    text-align: center;
    border: 1px solid #57c5f7;
    background-image: none;
    background-color: #fff;
    cursor: pointer;
   
    white-space: normal;
    vertical-align: middle;
    text-indent:5px;
    font-size: 1rem;
    border-radius: 2px;
    margin-right: 1rem;
    outline: none;
    transition: background 0.2s;
    touch-action: manipulation;

    &.notborder{
      border: none
    }
}



.ol-pagination.primary {
    color: #fff;
    background-color: #57c5f7;
    border-color: #57c5f7;
    &:hover,
    &:focus {
        background-color: #81d8ff;
        color: #fff;
    }
}



.ol-pagination:focus, .ol-pagination:hover {
    color: #57c5f7;
    background-color: #fff;
    border-color: #57c5f7;
}

.ol-pagination.active{
   color: #fff;
    background-color: #57c5f7;
}



.ol-pagination.ol-pagination-disabled{
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
<div>
  <span  class="ol-pagination notborder"  @click="pre(-1)"><i class="ion-chevron-left"></i></span>
  <span  
    class="ol-pagination " 
    v-show="leftShow"
    @click="changeNum(1)"
  >1</span>
  <span  class="ol-pagination notborder" v-show="leftShow">...</span>
  <span  
    class="ol-pagination "
    v-for="(item,index) in paginaton.pageSize"
    @click="changeNum(index+start)"
    >

      {{index+start}}
          </span>

     
  </span>
  <span class="ol-pagination notborder" v-show="rigthShow">...</span>
  <span 
      class="ol-pagination " 
      v-show="rigthShow"
      @click="changeNum(paginaton.totle)"
  >{{ this.paginaton.totle }}</span>
  <span class="ol-pagination notborder" @click="pre(1)"><i class="ion-chevron-right"></i></span>
</div>
</template>
<script>

  export default {
    mounted (){
     this.changeNum(this.paginaton.current)
    },
    props:{
        paginaton:{
          type: Object,
          pageSize:{
            type: Number,
            default: ()=> ""
          }
        },
    },

    components: { 
      
    },

    data () {
      return {
        start:this.paginaton.current,
        leftShow: true,
        rigthShow: true,
      }
    },
    computed: {
      iconClass(){
         let list = []
         if(!this.icon) return list
         list.push(this.icon) 
          return list 
      },
    },
    
    methods: {
      changeNum(num){
        console.log(num)
        let start = num - (this.paginaton.pageSize-1)/2;
          if( start <=0){
              start = 1
            }else if(num +(this.paginaton.pageSize-1)/2 >+  this.paginaton.totle){
              start = this.paginaton.totle - (this.paginaton.pageSize-1)
            }else{

          }

         this.start = start
console.log(this.start)
         this.iconshow()

      },
      iconshow(){
         if(this.start < (this.paginaton.pageSize-1)/2){
            this.leftShow = false

         }else{
           this.leftShow = true

         }

          if(this.start +  (this.paginaton.pageSize) >this.paginaton.totle){
              this.rigthShow = false
          }else{
           this.rigthShow = true
         }
      },
      pre(num){
        this.changeNum(this.start+num)
      }
    },
  }
</script>