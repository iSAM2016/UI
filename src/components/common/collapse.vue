<template>
  <div class="ol-collapse">
    <slot></slot>
  </div>
</template>
<script>
    export default {
        name: 'olCollapse',
        componentName: 'olCollapse',
        props: {
            accordion: Boolean,
            value: {
                type: [Array, String, Number],
                default() {
                    return [];
                }
            }
        },
        data() {
            return {
                // 初始model
                activeNames: [].concat(this.value)
            }
        },
        watch: {
            value(value) {
                this.activeNames = [].concat(value);
            }
        },
        methods: {
            setActiveNames(activeNames) {
                activeNames = [].concat(activeNames);
                let value = activeNames[0];
                this.activeNames = activeNames;
                this.$emit('input', value);
                this.$emit('change', value);
            },
            handleItemClick(item) {
                this.setActiveNames(
                    (this.activeNames[0] || this.activeNames[0] === 0) && this.activeNames[0] === item.name ? '' : item.name
                    )
            }

        },
        created() {
            this.$on('item-click', this.handleItemClick);
        }
    }
</script>
<style lang="stylus">
    .ol-collapse{
        position: relative
        margin-top: 1rem
        padding: .6rem
        border: 1px solid #f1f1f1
    }
</style>