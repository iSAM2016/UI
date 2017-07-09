<template>
    <div class="ol-contents">
      <div class="ol-content-UI">
         <slot></slot>
      </div>
      <div class="ol-content-code" :style="{height: height}">
        <div v-html="rawHtml" class="ol-code-content"></div>
        <div class="ol-drop" @click="openitem()">↑</div>
      </div>
    </div>
</template>
<script>
    const HTMLDeCode = (str) => {
    const div = document.createElement('div')
    div.innerHTML = str
    return div.innerText || div.textContent
}

  export default {
    props:{
        str:{
          type: String
        }
    },
    data () {
      return {
        rawHtml:"",
        height: '20px' ,
      }
    },
    methods: {
      openitem() {
        if (this.$el.getElementsByClassName('ol-code-content')[0].offsetHeight < 20) return false;
        if (this.height === '20px') {
            var rawHtmlHeight = Number(this.$el.getElementsByClassName('ol-code-content')[0].offsetHeight);
            this.height = rawHtmlHeight + 20 + 'px';
        } else {
            this.height = 20 + 'px';
          }
      }
    },
    mounted () {
       this.rawHtml = window.marked(HTMLDeCode(this.$el.getElementsByClassName('ol-mark-text')[0].innerHTML))
    },
  }

</script>
<style lang= 'stylus'>
.ol-mark-text {
  display: none;
}
.ol-contents{
    position: relative;
    width: 100%;
    padding: 0 .2rem;
    border: 1px solid #ccc;
    border-radius: 4px;
    font-size: 0;
}
.ol-content-UI{
    vertical-align: top;
    width: 100%;
    font-size: 1rem;
}
.ol-content-code{
    border-left: 1px dashed #ccc;
    overflow: hidden;
    height: 10px;
    font-size: 1rem;
    line-height: 1.2;
    transition: all 1s;
    -webkit-transition: all 1s ease ;
      .ol-drop{
          position: absolute;
          bottom: 0;
          left: 7px;
          width: 100%;
          height: 20px;
          text-align: center;
          vertical-align: middle;
          line-height: 20px;
          background-color: rgba(0,0,0,.02); 
        }
   }
.halfHeight{
  height: 220px;
}
.allHeight{
  height: auto;
}

</style>
