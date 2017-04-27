<style  lang = "stylus" >
.size-12 { font-size: 12px; }
.size-14 { font-size: 14px; }
.size-16 { font-size: 16px; }
.size-18 { font-size: 18px; }
.size-21 { font-size: 21px; }
.size-24 { font-size: 24px; }
.size-32 { font-size: 32px; }
.size-48 { font-size: 48px; }
.size-64 { font-size: 64px; }
.size-96 { font-size: 96px; }

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
      class=" ol-icons step size-24"
      v-for="item in arrIcon"
      @click="select(item)"
   > <i class="icon" :class="item"></i>
    </span>
    <textarea id="biao1">用户定义的代码区域</textarea>
  </section>
</template>
<script>
import arrIcon from '../../js/icon.js'

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