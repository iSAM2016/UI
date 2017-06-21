<template>
    <div class="ol-cut" ref="canvasBox">
        <div class="ol-cut__box">
            <div class="ol-cut__img--warp" :style="{'width': warpWidth, 'height': warpHeight}">
                <img :src="imgSrc" alt="剪裁图片" ref='cutPic'>
            </div>
        </div>
        <div class="mask"></div>        
    </div>
</template>
<script>
export default {
    data () {
        return {
            imgSrc:'static/img/pic.jpg',
            warpWidth: 0,
            warpHeight: 0
        }
    },
    components: {
    },
    mounted() {
        this.downLoadImg();
        this.drawImage();
    },
    methods: {
        /*下载图*/
        downLoadImg() {
            let imgWidth = this.$refs.cutPic.width;
            let imgHeight = this.$refs.cutPic.height;
            let proportion = imgWidth / imgHeight;
            this.warpWidth = '80%';
            this.warpHeight = 
        },
        // 画图
        drawImage() {
            var canvas = document.createElement('canvas');
            var ctx = canvas.getContext('2d');

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
}
.ol-cut__img--warp{
}
.ol-cut__img--warp img{
    width: 100%;
    height: 100%;
}
</style>