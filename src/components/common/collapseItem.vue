<template>
    <div class="ol-collapse-item">
        <div class="ol-collapse-item__header" @click="handleHeaderClick"> <i class="ol-collapse-item__header__arrow ol-icon-arrow-right"></i>
            <slot name="title">{{title}}</slot>
        </div>
            <div class="ol-collapse-item__wrap" v-show="isActive">
                <div class="ol-colleapse-item__content">
                    <slot></slot>
                </div>
            </div>
    </div>
</template>
<script>
function broadcast(componentName, eventName, params) {
    this.$children.forEach(child => {
        var name = child.$options.componentName;
        if (name === componentName) {
            child.$emit.apply(child, [eventName].concat(params))
        } else {
            broadcast.apply(child, [componentName, eventName].concat([params]))
        }
    })
}
    export default {
        name: 'olCollapseItem',
        components: {
        },
        data() {
            return {
                contentWrapStyle: {
                    height: 'auto',
                    display: 'block'
                },
                contentHeight: 0
            };
        },
        props: {
            title: String,
            name: {
                type: [String, Number],
                default() {
                }
            }
        },
        computed: {
            isActive() {
                return this.$parent.activeNames.indexOf(this.name) > -1;
            }
        },
        watch: {
            'isActive'(value) {
            }
        },
        methods: {
            handleHeaderClick() {
                this.dispath('olCollapse', 'item-click', this)
            },
            dispath(componentName, eventName, params) {
                var parent = this.$parent || this.$root;
                var name = parent.$options.componentName;

                while(parent && (!name || name !== componentName)) {
                    parent  = this.$parent;
                    if (parent) {
                        name = parent.$options.componentName;
                    }
                }
                if (parent) {
                    parent.$emit.apply(parent, [eventName, params]);
                }
            },
            broadcast(componentName, eventName, params) {
                broadcast.call(this, componentName, eventName, params)
            }
        }
    }
</script>
<style lang="stylus">
.ol-collapse-item{
    position: relative
    &:last-child{
        border-bottom: 1px solid #f1f1f1
    }
}
.ol-collapse-item__header{
    padding: 0 .6rem
    border: 1px solid #f1f1f1
    border-bottom: 1px solid transparent
    font-size: 1rem
    font-weight: 500
}
.ol-collapse-item__wrap{
    padding: .6rem
    border: 1px solid #f1f1f1
    border-bottom: 1px solid transparent
    line-height: 2
    font-size .8rem
    
}
</style>
