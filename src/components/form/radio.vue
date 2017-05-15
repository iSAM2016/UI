<style lang="stylus">
.ol-radio{
    line-height: 2rem;
    margin-right: 1rem;
}

.ol-radio-inner{
    position: relative;
    height: 1.4rem;
    width: 1.4rem;
    top:.4rem;
    display: inline-block;
    border-radius: 50%;
    border: 1px solid #ccc;
        &:hover{
            border: 1px solid #2db7f5;
        }
}

.ol-radio-inner:after{
    position: absolute;
    display: inline-block;
    width: .76rem;
    height: .76rem;
    content: "";
    top: 4.1px;
    left: 4.3px;
    border-radius: 50%;
    background-color: #2db7f5; 
    opacity: 0;
    transition: opacity .2s;
}

.ol-radio.disabled {
    color: #eaeaea;
}
.ol-radio.checked .ol-radio-inner:after{
    opacity: 1
}
.ol-radio-text{
  top: 1px;
}

</style>
<template>
<label 
    class="ol-radio"
    :class='{"checked": isActive, "disabled": disabled}'
    @click.stop="checkAction()">        
        <span class="ol-radio-inner"></span> 
        <span class="ol-radio-text"> <slot></slot> </span>
    </label>
</template>
<script>
export default {
    props: {
        label: {
            type: [String, Number],
            required: true
        },
        disabled: {
            type: Boolean,
            default: () => false
        }
    },
    computed: {
        isActive() {
            return this.$parent.activeNames.indexOf(this.label) > -1;
        }
    },
    methods: {
        checkAction(radio){
            if (this.disabled) return;
            this.$parent.addItem(this.label)
        }
        
    }
}
</script>