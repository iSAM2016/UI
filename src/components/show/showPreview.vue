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
          imgs: ['https://isam2016.github.io/img/b83c93e92706785a25914bd4fcd6f0d2_b.jpg', 'https://isam2016.github.io/img/v2-62dee35e7ae332e2581d6f7e4d918a3c_r.jpg']
        }
    },
    events: {
    }
  }
</script>
<style  lang = "stylus" >
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