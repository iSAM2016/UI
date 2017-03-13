<template>
    <section class="img-box">
        <img v-for="img in imgs" v-preview="img" :src="img">
         <div 
           v-for="img in imgs"
           v-preview="img" 
           class="doc-preview-imgbox" 
           :style="{ 'background-image':  'url(' + img + ')'}"
           ></div> 
    </div>
</section>
</template>
<script>
import { olTag }from '../index'

  export default {
    components: { 
      olTag
    },
    data () {
      return {
          imgs: ['http://covteam.u.qiniudn.com/ka2.jpg', 'http://covteam.u.qiniudn.com/poster.png']
        }
    },
    events: {
    }
  }
</script>
<style  lang = "sass" >
    .img-box{
        width: 400px;
        img {
            width: 100%;
        }
    }
    .doc-preview-imgbox{
      height: 260px;
      background: no-repeat center center; 
      background-size:cover;
    }
</style>