<style lang="sass">
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
    background-color:red;
    border-radius: 1.4rem;
    line-height: 2rem;
    margin-right: .2rem;
    margin-bottom: .1rem ;
        
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
        'open': value.checked,
        'small': value.size === 'small'
         }"

    @click='contral'
>

    <div class="ol-switch-inner"></div>
</div>
</template>
<script>
export default {
    props: {
        value:{
            type: Object,
            checked:{
                type:Boolean,
                default:() => false
            },
            size:{
                type:String,
                default:() => ""
            }
            
        }
    },

    methods: {
        
        contral(){
            this.value.checked = !this.value.checked
            this.$emit("change", this.value.checked)
        }
    },

}
</script>