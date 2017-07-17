<style  lang = "stylus" >
</style>
<template>
  <section>
    <div style="">
      <h4>
        #标签
      </h4>
      <div class="line" v-for="item in datas">{{item.name}}</div>
          <aside class="return_top" @click="backTop" v-if="showBackStatus">
            <i class="ion-android-arrow-up"></i>
        </aside>
    </div>  
<br />
  </section>
</template>
<script>
import { animate, showBack } from '../../components/utils';
import { getdata } from'./json.js';
  export default {
    components: { 
    },
    mounted() {
        this.datas = [...this.datas,...getdata()];
        showBack(status => {
            this.showBackStatus = status;
        })
    },
    data () {
      return {
        datas:[],
        showBackStatus: false,// 显示返回顶部的按钮
      }
    },
    methods: {
        backTop() {
            animate(document.body, {scrollTop: '0'}, 400, 'ease-out');
        },
    }
  }

</script>
 <style lang="stylus" rel='stylesheet/stylus'>
    .return_top
        position: fixed
        bottom: 3rem
        right: 1rem
        i
            font-size: 2rem
    .line
        width: 100%
        height: 40px;
        line-height:40px
        border-top: 1px solid #333        
</style>