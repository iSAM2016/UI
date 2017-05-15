<style lang="stylus">
.ol-switch-content.small {
    height: 1.6rem;
    width: 3rem;
        .ol-switch-inner{
             top: .2rem;
            left:.2rem;
            height: 1.2rem;
            width: 1.2rem;
        }
        &.open .ol-switch-inner{
            -webkit-transform: translate3d(1.4rem,0,0);
            transform: translate3d(1.4rem,0,0);
    }
}
.ol-switch-content{
    position: relative;
    display: inline-block;
    height: 2rem;
    width: 4rem;
    background-color: #ddd;
    border-radius: 1.4rem;
    line-height: 2rem;
    margin-right: .2rem;
    margin-bottom: .1rem ;
        &.open{
            background-color: red;
        }
        &.open .ol-switch-inner{
            -webkit-transform: translate3d(2rem,0,0);
            transform: translate3d(2rem,0,0);
        }
}
.ol-switch-inner{
    position:absolute;
    top: .2rem;
    left:.2rem;
    height: 1.6rem;
    width: 1.6rem;
    background-color: #fff;
    border-radius: 50%;
    transition: transform .2s cubic-bezier(.23,1,.32,1),
    -webkit-transform .2s cubic-bezier(.23,1,.32,1);
}

</style>
<template>
<div 
    class="ol-switch-content"
    :class="{
        'open': checked,
        'small': size === 'small'
         }"

    @click='contral'>
    <div class="ol-switch-inner"></div>
</div>
</template>
<script>
import { MIXIN } from '../utils.js'
export default {
    mixins: [MIXIN],
    props: {
        value:{
            type:Boolean,
            default:() => false
        },
        size:{
            type:String,
            default:() => ""
        }
    },
    data() {
        return {
            checked: false
        }
    },
    mounted(){
        this.checked = this.value;
    },
    methods: {
        contral(){
            this.checked = !this.checked
            this.dispath('olForm', 'changeOlFromValue', [this, this.checked]);
            this.$emit("change", this.checked)
        }
    },

}
</script>