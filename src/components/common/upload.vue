<style lang = "stylus">
.ol-upload-container {
    display: inline-block;
}
.ol-upload-wrapper {
}
.ol-upload-file {
    display: none !important;
}
.ol-upload-list-item {
   display:inline-block;
    position: relative;
    width: 5rem;
    height: 8rem;
    margin: .5rem;
    &:hover {
        color: #57c5f7;
        .ol-upload-preview-action {
            opacity: 1;
            .ol-upload-close {
                display: inline;
            }
        }
    }
}
.ol-upload-list-item:first-child {
    margin-left: 0;
}
.ol-upload-preview-img-wrapper {
    display: inline-block;
    height: 5rem;
    width: 5rem;
    border: 1px solid #e0e0e0;
    border-radius: .4rem;
    padding: .5rem;
    box-sizing: border-box;
}
.ol-upload-preview-img {
    width: 100%;
    height: 100%;
    background-size: cover;
}
.ol-upload-preview-info {
    display: inline-block;
    vertical-align: top;
    font-size: .8rem;
    width: 100%;
    text-align: center;
    overflow: hidden;
}
.ol-upload-preview-info-title,
.ol-upload-preview-info-size {
    height: 1rem;
    line-height: 1rem;
    overflow: hidden;
    text-align: center;
    text-overflow:ellipsis;
    -o-text-overflow:ellipsis;
    white-space:nowrap;
    width:100%;

}
.ol-upload-preview-action {
    position: absolute;
    width: 100%;
    height: 5rem;
    text-align: center;
    background-color: rgba(0, 0, 0, 0.29);
    border-radius: .4rem;
    opacity: 0;
    transition: opacity .3s;
}
.ol-upload-close {
    display: none;
    color: #fff;
    font-size: 1.5rem;
    line-height: 5rem;
}


</style>
<template>
<div class="ol-upload-container">
  <div class="ol-upload-wrapper">
    <div class="ol-upload-preview">
      <div class="ol-upload-list-item" v-for="item in fileList">
          <div class="ol-upload-preview-action" @click="delFile(item)">
              <i  class="ion-trash-b.ol-upload-close"></i>
          </div>
          <div class="ol-upload-preview-img-wrapper">
                  <div class="ol-upload-preview-img" :style="{ 'background-image': 'url(' + item.src + ')' }" v-if="item.src"></div>
          </div>
          <div class="ol-upload-preview-info">
                  <div class="ol-upload-preview-info-title">
                            {{item.file.name}}
                  </div>
                  
          </div>

      </div>
    </div>
    <div class="ol-upload-action">
          <input type="file" :accept="accept" @change="changeFile" class="ol-upload-file">
          <span  @click="touchUp">
            <ol-button>选择文件</ol-button>
          </span>
            <span  @click="beginupdate">
            <ol-button>开始上传</ol-button>
          </span>
    </div>

  </div>
</div>
</template>
<script>
import olButton from '../base/button.vue'
const imageType = /^image\//
export default {
  props: {
     accept: String,
     finishUPload: Boolean
    },
  data: function () {
    return {
        $file: null,
        fileList: [],
        myResult: this.finishUPload//data中新增字段
    }
  },
  mounted(){
      this.$file = this.$el.getElementsByClassName('ol-upload-file')[0]
  },
  components: {
      olButton
  },
  methods: {
     sizeCalc (size) {
            return Math.round(size / 10.24) / 100 + 'Kb'
     },
     touchUp (e) {
            if (this.$file) {
                this.$file.click()
            }
        },
      changeFile(e){
        let previewURL ="";
        let newItem = {};
        for(let i = 0, len = this.$file.files.length; i < len; i++){
           previewURL = ''
          if(imageType.test(this.$file.files[i].type)){
              previewURL = window.URL.createObjectURL(this.$file.files[i])
          }
          newItem = {
            src: previewURL,
            file: this.$file.files[i]
          }
            this.fileList.push(newItem)
            this.$emit('add', newItem, this.fileList)
        }
      },
       delFile (item) {
            this.fileList.splice(this.fileList.findIndex((obj=> item === obj)),1)
            window.URL.revokeObjectURL(item.src)
            this.$emit('remove', item)
        },
        beginupdate(){
          this.$emit('actionUpdata', this.fileList)
            this.myResult = !this.myResult
        }
  },
  watch:{
        finishUPload(key){
          if(key){
            this.fileList.forEach((item) =>{
               window.URL.revokeObjectURL(item.src)
            })
            this.fileList.splice(0,this.fileList.length) 
          }
        },
        myResult(){
          //双向数据半丁
        }
      }

}


</script>