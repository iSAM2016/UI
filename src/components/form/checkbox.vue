<style lang="stylus" >
.ol-checkbox-wrapper {
   cursor: pointer;
   display: inline-block;
   font-size: 1rem;
   line-height: 2
}
.ol-checkbox-inner{
  position: relative;
  display: inline-block;
  height: 1.2rem;
  width: 1.2rem;
  border: 1px solid #e6e6e6;
  margin-right: .4rem;
  border-radius: 4px;
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
    width: 100%;
    height: 100%;
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
        'selected': ischecked,
        'disabled': disabled
        }"
      @click="changeAction" >
        <i class="ol-checkbox-inner-icon ion-android-done"></i>  
        <input 
          type="checkbox"
          :checked ="ischecked"
          class="ol-checkbox-input">
    </span>
        <span>{{ label }}</span>
   </div>
 </label>
</template>
<script>

  export default {
    data() {
      return{
        ischecked: ''
      }
    },
    mounted (){
      this.ischecked = this.checked;
      if (this.checked && !this.disabled)  {
          this.pulldata();
      }
    },
    props:{
          label: {
              type: String,
              required: true,
              default: ()=> ""
          },
          name: {
              type: String,
              required: true,
              default: ()=> ""
          },
          checked:{
            type: Boolean,
            default: ()=> false
          },
          disabled:{
            type: Boolean,
            default: ()=> false
          }
    },
    methods:{
      changeAction(){
        if (this.disabled) return 
        this.ischecked = !this.ischecked;
        this.pulldata();
      },
      pulldata() {
        let obj = {};
        obj[this.name] = this.ischecked;
        this.$emit('changing', obj, this);
        if (this.$parent.$options.componentName === 'olCheckBoxGroup') {
            this.$parent.addDatas(obj, this.name);
        }
      }
    }
    
}
</script>