<style  lang = "sass" >
  
    .step {
      display: inline-block;
      line-height: 1;
      position: relative;
      width: 10%;
    }

    .step i {
      -webkit-transition: opacity .3s;
      -moz-transition: opacity .3s;
      -ms-transition: opacity .3s;
      -o-transition: opacity .3s;
      transition: opacity .3s;
    }

    .step:hover i { opacity: .3; }
    #biao1{
      height: 0;
    }
</style>
<template>
  <section>
    <div>
      <h4>#icon</h4>

    </div>
    <span 
      class=" ol-icons step size-32"
      v-for="item in arrIcon"
      @click="select(item)"
   > <i class="icon" :class="item"></i>
    </span>
    <textarea id="biao1">用户定义的代码区域</textarea>
  </section>
</template>
<script>
import arrIcon from '../../js/icon'

  export default {
    components: { 
      
    },

    data () {
      return {
        arrIcon: arrIcon       
      }
    },
    
    methods: {
      select(copyText){
       let Url2=document.getElementById("biao1");
        Url2.value =copyText 
        Url2.select(); // 选择对象
        document.execCommand("Copy"); // 执行浏览器复制命令
        alert(copyText);
      }
    }
  }

</script>