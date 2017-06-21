<template>
    <h5>HTML5 图片上传预览</h5>
    <input type="file" value="选择文件" @click="upfile">
</template>
<script>
/**
 * expand 展开
 * checked 选中
 * title  名称
 * key 区分树组件
 * children 叶子节点数据
 */
import {
    olTree
} from '../index.js'

export default {
    data () {
        return {
        }
    },
    methods() {
        upfile() {
            // 获取图片
            var  input = document.createElement(input);
            input.type = 'file';
            input.addEventListener('change', function() {
                var file =this.files[0];
            })
            input.click();
            // 预览图片
            var img = document.createElement('img');
            img.src = window.URL.createObjectURL(file)
            // cnvas 缩率图
            var canvas = document.createElement("canvas");
            var ctx = canvas.getContext("2d");
            var MAX_WIDTH = 800;
            var MAX_HEIGHT = 600;
            var width = img.width;
            var height = img.height;

            if (width > height) {
              if (width > MAX_WIDTH) {
                height *= MAX_WIDTH / width;
                width = MAX_WIDTH;
              }
            } else {
              if (height > MAX_HEIGHT) {
                width *= MAX_HEIGHT / height;
                height = MAX_HEIGHT;
              }
            }
            canvas.width = width;
            canvas.height = height;
            ctx.drawImage(img, 0, 0, width, height);
            // 上传
            canvas.toBlob(blob) {
                var form = new FormData();
                form.append('file', bloc);
                fetch('',{method: 'fost', body: form})
            }
        }
    },
    components: {
        olTree
    }
}
</script>
<style lang="stylus">
    
</style>