<style lang="sass" >

.ol-checkbox-wrapper {
   cursor: pointer;
   display: inline-block;
   font-size: 1rem;
   line-height: 4rem
}
.ol-checkbox-inner{
  position: relative;
  display: inline-block;
  height: 1.2rem;
  width: 1.2rem;
  border: 1px solid #e6e6e6;
  margin-right: .4rem;
  border-radius: 4px;
  top:1.5rem;
      &:hover{
        border: 1px solid #2db7f5;
      }
}

.ol-checkbox-inner-icon{
    position: absolute;
    color: #fff;
    font-size: .8rem;
    left: 38%;
    top: 50%;
    width: .8rem;
    height: .8rem;
    margin-top: -.3rem;
    margin-left: -.4rem;
    line-height: .8rem;
    text-align: center;
    transition: background .2s;

}

.ol-checkbox-inner.selected {
    background: #2db7f5;
    border: 1px solid #2db7f5;
    &:hover {
        opacity: 0.8;
    }
}
.ol-checkbox-input{
  opacity: 0;

}

.ol-checkbox-inner.disabled {
    background: #eaeaea;
}


</style>
<template>
 <label for="">
   <div class="ol-checkbox-wrapper">
     
    <span 
      class="ol-checkbox-inner"
      :class="{
        'selected': this.checkbox.checked,
        'disabled': checkbox.disabled
        }"
      @click="changeAction" >

        <i class="ol-checkbox-inner-icon icon-ok ">
        </i>  

        <input 
          type="checkbox"
          :checked ="checkbox.checked"
          class="ol-checkbox-input"
          
        >

    </span>
        <span>{{ checkbox.text }}</span>
   </div>
 </label>
</template>
<script>

  export default {
    mounted (){
     
    },
    props:{
        checkbox:{
          type: Object,
          text: {
              type: String,
              default: ()=> "checkbox"
          }
        },
       
    },
    methods:{
      changeAction(){
         if (this.checkbox.disabled) return 
       this.checkbox.checked = !this.checkbox.checked
      }
    }
    
}
</script>