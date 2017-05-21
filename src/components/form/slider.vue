<style lang="stylus">
.ol-slider {
    position: relative;
    width:98%;
    .ol-slider-handle{
        position:absolute;
        top: -10px;
        left: 0px;
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

            .ol-slider-show{
                display: inline-block;
                height: 100%;
                width: 100%;
                background-color:#57c5f7;
                line-height: .6rem;
                border-radius:  .4rem 0 0 .4rem;
            }
    }
}

.ol-slider-handle-tip {
    display: block;
    opacity: 1;
    position: absolute;
    bottom: 2rem;
    left: -.45rem;
    width: 2rem;
    line-height: 2.4;
    background-color: rgba(0, 0, 0, 0.5);
    color: #fff;
    text-align: center;
    border-radius: .5rem;
    transition: all .2s;
    &::before {
        content: '';
        position: absolute;
        background: transparent;
        border: .4rem solid transparent;
        border-top-color: rgba(0, 0, 0, 0.5);
        bottom: -.7rem;
        left: 50%;
        margin-left: -.4rem;
    }
}

</style>
<template>
<div class="ol-slider">   
    <div class="ol-slider-handle">
        <div class="ol-slider-handle-tip" v-if="showTip">{{showValue}}</div>
    </div>
    <div class="ol-slider-mark">
        <div class="ol-slider-show"></div>
    </div>
    
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

function removeEvent(dom, eventName, fn){
    if( dom.addEventListener ){
        dom.removeEventListener( eventName,fn,false )
    }else{
    
    }
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

    data(){
         return {
            showTip: true,
            showValue: this.value.value
         }
    },

    mounted(){
        this.parms()
        this._init()
        this.move()
    },

    methods: {
        parms(){
            let dom = this.$el.children[1],
                left = dom.offsetLeft,//mark offsetLeft
                width = dom.offsetWidth,
                eachSection = width / 100; //将width分割为100分
                this.start = this.$el.offsetLeft
                this.end =width + this.start;
                this.width = width 
                this.eachSection = eachSection
        },

        _init(){
            this.$el.children[0].style.left = this.value.value * this.eachSection - this.$el.children[0].offsetWidth/2 + "px"; 
            this.$el.children[1].children[0].style.width = this.value.value * this.eachSection + "px"; 
        },

        move(){
            //console.log(e.pageX)
            let handle = this.$el.children[0],
                show = this.$el.children[1].children[0],
                _that = this;  

              handle.onmousedown  = function(ev){
                    var  ev = ev || event,
                    divX = ev.clientX - handle.offsetLeft;
                     document.onmousemove = function(e){
                         let pageX = e.clientX ;
                            if( pageX >= _that.start && pageX <= _that.end + handle.offsetWidth ){
                                let X = pageX - divX;

                                if( X <= 0){
                                    handle.style.left = 0 + "px";
                                    show.style.width = 0 + "px"; 
                                    _that.change(0)
                                }else if( X>= _that.width){
                                    show.style.width = 100 + "%"; 
                                    handle.style.left =  _that.width -2+ "px";
                                     _that.change(100)
                                }else{
                                    console.log(_that.value.step)
                                    if( _that.value.step ){
                                        let num = Math.round(X/_that.eachSection/_that.value.step)*_that.value.step*_that.eachSection
                                            show.style.width = num + "px";
                                            handle.style.left = num  +"px";

                                         _that.change(Math.round(X/_that.eachSection/_that.value.step)*_that.value.step)
                                        
                                    }else{
                                         handle.style.left =  X+ "px";
                                         show.style.width = X+ "px";
                                         _that.change(Math.floor(X/_that.eachSection))
                                    }
                                }



                            }
                    }

                     document.onmouseup = function(e){
                        document.onmousemove = document.onmouseup = null;
                    }

                  return false
            }

        },

        change(value){
            this.showValue = value
            this.$emit("change", value) 
        }
        
    },

}
</script>