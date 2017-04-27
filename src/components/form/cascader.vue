<template>
   <div
        class="ol-cascader-container"
        :class="{'active': show, 'ol-cascader-top': position === 'top'}"
        @click="showAction"
    >
        <div class="ol-cascader-input">
            <span class="ol-cascader-text">{{value}}</span>
            <span class="ol-cascader-arrow ion-chevron-down"></span>
        </div>
        <div class="ol-cascader-content" v-show="show">
            <ul class="ol-cascader-menu" v-for="(one, index) in list">
                <li 
                    class="ol-cascader-item"
                    v-for="item in one"
                    @click.stop="touch($event, index, item)"
                    :class="{'active': item.selectd}"
                    >
                    {{item.label}}
                </li>
            </ul>
        </div>
   </div>
</template>
<script>
import {catIn} from '../utils.js'
export default {
   props: {
        cascader: {
            type: Object,
            required: true
        }
    },
    data () {
        return {
            position: 'top',
            show: false,
            valueArr: [],
            value: '',
            list: []
        }
    },
    components: {
    },
    mounted(){
        this.list = [this.cascader.options];
        window.addEventListener('click',this.hide, false);
    },
    beforeDestroy () {
        window.removeEventListener('click',this.hide);
    },
    methods: {
        hide ($event) {
            if(!catIn($event.target, this.$el)) {
                this.show = false
            }
        },
        showAction () {
            this.show = !this.show;
        },
        // 单击选择
        touch($event, index, group) {
            if (this.list.length !== 1 + index) {
                this.list = this.list.slice(0, 1 +index)
            }
            this.list[index].map(g => {
                g['selected'] = false
            })
             group['selected'] = true
            if (group.children) {
                this.list.push(group.children);
            } else {
                // 解释
                this.show = false
            }
            this.selectAll();
        },
        // 选择数据
        selectAll () {
            this.valueArr = [];
             this.list.forEach(group => {
                group.forEach(item => {
                    if (item.selected) {
                        this.valueArr.push(item)
                    }
                })
            })
            this.cascader.valueArr = this.valueArr;
            this.value = this.format(this.valueArr);
        },
        format (selectedGroup) {
            let valueArr = [];
            selectedGroup.forEach((item) => {
                valueArr.push(item.label);
            })
            return valueArr.join('/');
        },
    }
}
</script>
<style lang = "stylus">
.ol-cascader-container {
    position: relative;
    border: 1px solid #ccc;
    display: inline-block;
    min-width: 6rem;
    border-radius: .4rem;
    height: 2.4rem;
    line-height: 2.4rem;
    padding: 0 2rem 0 .5rem;
    vertical-align: bottom;
        &.disabled:hover{
            background: #efefef;
            border: 1px solid #ccc;
            color: #b7b7b7;
            cursor: not-allowed;
      }
}
.ol-cascader-container:hover {
    border: 1px solid #2db7f5;
}
.ol-cascader-input {
    display: inline-block;
}
.ol-cascader-text {
    font-size: .8rem;
    line-height: 2rem;
}
.ol-cascader-content{
    display: flex;
    position: absolute;
    top: 2rem;
    left: 0;
    height: 10rem;
    border: 1px solid #e8e8e8;
    border-radius: .25rem;
    background: #fff;
    box-shadow: 0 1px 6px hsla(0, 0%, 39%, .2);
    z-index: 2
}
.ol-cascader-menu {
    min-width: 6rem; 
    border-right: 1px solid #e8e8e8;
    overflow-y:auto;
}
.ol-cascader-item {
    flex: 1;
    padding: .1rem .5rem;
    width: 100%;
    font-size: .8rem;
    padding: .1rem .5rem;
    cursor: pointer;
    white-space: normal;
    text-overflow: ellipsis;
    overflow: hidden;
    transition: all .3s ease;
}
.ol-cascader-item:hover,.ol-cascader-item.active {
    background: #efefef;
}
.ol-cascader-arrow {
    position: absolute;
    top: 0;
    right: .5rem;
    font-size: .4rem;
    transform: rotate(0);
    transition: transform 0.2s ease;
}
.ol-cascader-container.active .ol-cascader-arrow {
    transform: rotate(180deg);
}
.ol-cascader-top .rd-cascader-content {
    bottom: 2rem;
    top: initial;
}
</style>