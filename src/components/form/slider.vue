<style lang="sass">
.ol-slider {
    position: relative;

    .ol-slider-handle{
        position:absolute;
        top:1.2rem;
        left:0rem;
        height: 1.6rem;
        width: 1.6rem;
        border: 2px solid #57c5f7;
        border-radius:50%;
        background-color:#fff;
    }
    
    .ol-slider-mark{
        display: inline-block;
        height: .6rem;
        width: 100%;
        background-color:#eee;
        line-height: .6rem;
        border-radius: .4rem;

    }

   
}

</style>
<template>
<div 
    class="ol-slider"
   
>   <div class="ol-slider-handle"></div>

    <div class="ol-slider-mark"></div>
</div>
</template>
<script>
function addEvent(dom, eventName, fn){
    if( dom.addEventListener ){
        dom.addEventListener( eventName,fn,false )
    }else{
        dom.attachEvent("on"+eventName,function(){
            fn.call( dom )
        })
    }
}

function move(e){
    console.log(e.pageX)
}

export default {
    props: {
        value:{
            type: Object,
            value:{
                type:Number,
                default:() => false
            },
            min:{
                type:Number,
                default:() => ""
            },

             max:{
                type:Number,
                default:() => ""
            },

             step:{
                type:Number,
                default:() => ""
            },
            
        }
    },

    methods: {
        state( ){
            console.log(this.$el.children[0])
    this.$el.children[0].style.left = 2 + "rem"
   }
        
    },
    mounted(){
        this.state()
        addEvent(this.$el.children[0],"mousedown",move)
    }

}
</script>