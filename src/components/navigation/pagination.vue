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
    v-for="(item,index) in start"
    @click="changeNum(item)"
  >
      {{item}}
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

    data () {
      return {
        current: this.paginaton.current,
        start:[],
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
      changeNum(curr){
        this.current = curr;
          //pageSize: 5,
        let left = Math.max(1 , curr-2);
        //最右侧页码
        let right = Math.min( left+4 , this.paginaton.totle);
        //最左侧页码
        left = Math.max(1 , right-4);

        this.start.length = 0;
        for(let i = left; i <= right; i++){
          this.start.push(i);
        }

         this.iconshow()

      },
      iconshow(){
        let offset = Math.floor(this.paginaton.pageSize/2);
        this.leftShow = this.start[0] < offset? false :true;
        this.rigthShow =  this.start[this.start.length-1]  < this.paginaton.totle ? true : false
      },

      pre(num){
        let page;
        page = (this.current+num <= 0) || (this.current+num >=this.paginaton.totle) ? 0 : num;
        this.changeNum(this.current + page)
      }
    },
  }
</script>