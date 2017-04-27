<style  lang = "stylus" >
.ol-modal-container {
    position: fixed;
    top: 0;
    right: 0;
    background-color: rgba(0,0,0,.3);
    width: 100%;
    height: 100%;
    z-index: 999999999;
}  
.ol-modal{
    position: relative;
    margin: 6rem auto;
    width: 30rem;
    background-color: #fff;
    border: 1px solid #eaf8fe;
    border-radius: 4px;
   
}
.ol-modal-icon{
    position: absolute;
    top: 1rem;
    right: 1rem;
    font-size: 1.5rem;
    line-height: 1.5rem;
}
.ol-modal-title {
    width: 100%;
    line-height: 3;
    padding: .2rem 1.5rem;
    font-size: 1.2rem;
    border: 1px solid #f3f3f3;
}

.ol-modal-content {
    width: 100%;
    word-wrap: break-word;
    word-break: normal; 
    min-height: 8rem;
    line-height: 1.5;
    padding: .2rem 1.5rem;
    color: #333;
    border: 1px solid #f3f3f3;
}
.ol-modal-close {
    text-align: right;
    padding: 2px 12px;
    color: #ccc;
}
.modal-enter, .modal-leave-active {
    opacity: 0;
    transform: translateY(-100px);

}
.modal-enter-active, .list-leave-active  {
    transition: all .5s ease;

}
</style>
<template>
    <div class="ol-modal-container" v-show="isShow">
        <transition  name="modal">
            <div 
                class="ol-modal"
            >
                <span class="ol-modal-icon" @click="closeModal"> <i class=" icon ion-android-close"></i>
                </span>
                <div class="ol-modal-title">{{ this.title}}</div>
                <p class="ol-modal-content">{{this.content}}</p>
                <div class="ol-modal-close">
                    <ol-button type="info" @click.native="closeModal">关闭</ol-button>
                    <ol-button type="info" :size="this.size"  :color="this.color" @click.native="success">好的</ol-button>
                </div>
            </div>
        </transition >
    </div>
</template>
<script>
import  olButton from '../base/button.vue'
export default {
     props: {
        title: {
          type: String,
          default: ()=> "标题"
        },
        content: {
          type: String,
          default: ()=> "content"
        },
        type:{
          type: String,
          default: ()=> "default"
        },
        size:{
          type: String,
          default: ()=> "default"
        },
        color:{
          type: String,
          default: ()=> ""
        }
    },
    computed: {
    },
    components: { 
        olButton
    },
    data () {
        return {
            callBack: null,
            isShow: false
        }
    },
    mounted() {
    },
    created() {
    },
    methods:{
        closeModal(item) {
            this.isShow = false;
            document.body.removeChild(document.body.querySelector('.ol-modal-container'))
        },
        addModal(obj) {
            this.isShow = true;
            this.callBack = obj.callBack;
        },
        success() {
            this.callBack();
            this.closeModal();
        }
    }
}
</script>