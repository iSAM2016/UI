<template>
    <div class="ol-cut" ref="canvasBox">
        <div 
            class="ol-cut__img--warp" 
            :style="{'transform': 'scale(' + scale + ')'}" 
            @mousewheel="changScale"
            @mouseover="mouseover"
            @mouseout="mouseout"
            @mousescroll="mouseover"
            > 
            <img 
                :src="imgSrc" 
                alt="剪裁图片" 
                ref='cutPic' 
                @load="downLoadImg" />
        </div>
     <!--    <div class="ol-cut-mask"></div>
     <div class="ol-cut__img-out">
         <p>
             <img :src="imgSrc" alt="剪裁图片" ref='cutPic'>
         </p>
         <span class="ol-cut__anchor--leftTop"></span>
         <span class="ol-cut__anchor--centerTop"></span>
         <span class="ol-cut__anchor--rightTop"></span>
         <span class="ol-cut__anchor--righMiddle"></span>
         <span class="ol-cut__anchor--rightBottom"></span>
         <span class="ol-cut__anchor--centerBottom"></span>
         <span class="ol-cut__anchor--leftBottom"></span>
         <span class="ol-cut__anchor--leftMiddle"></span>
     </div>         -->
    </div>
</template>
<script>
export default {
    data () {
        return {
            imgSrc:'static/img/pic.jpg',
            warpWidth: 'auto',
            warpHeight: 'auto',
            scale: 1
        }
    },
    components: {
    },
    mounted() {
        this.drawImage();
    },
    methods: {
        /*下载图*/
        downLoadImg() {
            let imgWidth = this.$refs.cutPic.width;
            let imgHeight = this.$refs.cutPic.height;
            let proportion = imgHeight / imgWidth;
           /* this.warpWidth = '80%';
            this.warpHeight = (80 * proportion) + '%';*/
            console.log(imgWidth)
        },
        // 画图
        drawImage() {
            var canvas = document.createElement('canvas');
            var ctx = canvas.getContext('2d');

        }, 
        // 消除页面滚动
        mouseover() {
            document.body.style = "overflow: hidden";

        },
        changScale(e) {
             if (e.wheelDelta > 0) {
                this.scale = (this.scale >= 4) ? 4 : (this.scale + 0.2);
             } else {
                this.scale = (this.scale <= 0.2) ? 0.2 : (this.scale - 0.2);
            }
        },
        mouseout(){
            document.body.style = "overflow: block"
        }
     
    }
}
</script>
<style>
.ol-cut{
    position: relative;
    width: 1000px;
    height: 300px;
    background: url('../../img/transparent.jpg') repeat;
    margin: 20px 0;
    overflow: hidden;
    border: 4px solid rgba(0,0,0, .1)
}
.ol-cut__img--warp{
    transition: all 1s;
}
.ol-cut__img--warp img{
    width: 100%;
    height: 100%;
}
.ol-cut-mask{
    position: absolute;
    top: 0;
    right: 0;
    width: 100%;
    height: 100%;
    background: rgba(0,0,0, .5);
}
.ol-cut__img-out{
    position: absolute;
    top: 30px;
    left: 40px;
    width: 100px;
    height: 100px;
    overflow: hidden;
}
.ol-cut__img-out span{
    display: inline-block;
    position: absolute;
    width: 8px;
    height: 8px;
    background: blue;
}
.ol-cut__img-out .ol-cut__anchor--leftTop{
    top: 0;
    left: 0;
}
.ol-cut__anchor--centerTop{
    top: 0;
    left: 50%;
}
.ol-cut__anchor--rightTop{
    top: 0;
    right: 0;
}
.ol-cut__anchor--righMiddle{
    top: 50%;
    right: 0;
}
.ol-cut__anchor--rightBottom{
    bottom: 0;
    right: 0;
}
.ol-cut__anchor--centerBottom{
    left: 50%;
    bottom: 0;
}
.ol-cut__anchor--leftBottom{
    left: 0;
    bottom: 0
}
.ol-cut__anchor--leftMiddle{
    top: 50%;
    left: 0;
}
</style>