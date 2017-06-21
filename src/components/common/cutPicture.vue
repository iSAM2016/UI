<template>
    <div class="ol-cut" ref="canvasBox">
        <div id="canvas"></div>
        
    </div>
</template>
<script>
export default {
    data () {
        return {}
    },
    components: {
    },
    mounted() {
        this.drawImage();
    },
    methods: {
        // 画图
        drawImage() {
            var canvas = document.createElement('canvas');
            var ctx = canvas.getContext('2d');
        }
     
    }
}
</script>
s