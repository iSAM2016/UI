<template>
    <div class="ol-perview-container" v-show="preview.show">
        <div class="ol-preview-close" @click="close"> <i class="icon ion-android-close"></i></div>
        <div class="ol-perview">
            <img 
                class="ol-preview-img"
                :src="preview.current.src" 
                :alt="preview.current.title"
            />
            <div class="ol-perview-title">
                {{preview.current.title}}
                {{preview.current.index+ '/' + preview.list.length}}
            </div>
            <div class="ol-preview-nav-left" @click="preAction">
                <span class="icon ion-chevron-left ol-preview-nav-arrow"></span>
            </div>
            <div class="ol-preview-nav-right" @click="nextAction">
                <span class="icon ion-chevron-right ol-preview-nav-arrow"></span>
            </div>
        </div>
    </div>
</template>
<script>
import { catIn } from '../utils.js'
var _ = {
    on: function(fn) {
        let that = this;
        window.addEventListener("click", function(e) {
            fn.call(that, e);
        }, false)
    },
    off (fn) {
        window.removeEventListener(fn)
    }
}
export default {
    name: 'Preview',
    computed: {
        preview () {
            return window.ONLY_SINGLR_OBJECT.PREVIEW.ALL_PREVIEW
        }
    },
    data() {
        return {
            $previewImg: null,
            $box: null,
            marginTop: 50
        }
    },
    mounted() {
        _.on.call(this, this.leave);
    },
    beforeDestroy () {
        _.off(this.leave);
    },
    methods: {
        leave (e) {
            if (!catIn(e.target, this.$el)) {
                this.close()
            }
        },
        close () {
            this.preview.show = false
        },
        preAction () {
            let index = this.preview.list.indexOf(this.preview.current)
            if (index === 0) return
            index--
            this.preview.current = this.preview.list[index]
        },
        nextAction () {
            let index = this.preview.list.indexOf(this.preview.current)
            if (index === this.preview.list.length - 1) return
            index++
            this.preview.current = this.preview.list[index]
        }
    }
}
</script>
<style lang = "stylus" >
.ol-perview-container{
    display: table;
    position: fixed;
    width: 100%;
    left: 0;
    top: 0;
    background: rgba(0,0,0,.8);
    height: 100%;
    text-align: center;
    color: #fff;
    z-index: 99999999
}
.ol-perview{
    display: table-cell;
    vertical-align: middle;
}
.ol-preview-close {
    position: absolute;
    right: 10px;
    top: 10px;
    font-size: 2rem;
}
.ol-preview-img {
    max-width: 100%;
    max-height: 100%;
}
.ol-perview-title {
    position: absolute;
    bottom: 2px;
    left: 0;
    width: 100%;
    text-align: center;
    font-size: 2rem;
}
.ol-preview-nav-left {
    left: 0;
    .ol-preview-nav-arrow {
        left: 0;
        margin-left: 2rem;
    }
}
.ol-preview-nav-right {
    right: 0;
    .ol-preview-nav-arrow {
        right: 0;
        margin-right: 2rem;
    }
}
.ol-preview-nav-arrow {
    position: absolute;
    top: 50%;
    padding: 0 .5rem;
    background: rgba(0, 0, 0, 0);
    line-height: 2rem;
    border-radius: .2rem;
    font-size: 2rem;
}
</style>