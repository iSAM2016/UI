<style  lang = "stylus" >
.ol-notification-container {
    position: fixed;
    top: 1rem;
    right: 1rem;
    z-index: 9999;
}  
.ol-notification{
    position: relative;
    width: 20rem;
    background-color: #fff;
    margin-right: 1rem;
    border: 1px solid #eaf8fe;
    border-radius: 4px;
    padding: 1rem 1.5rem;
    margin-bottom: 1rem;
    &.success,
    &.warning,
    &.faile
    &.info {
        padding-left: 4rem;
    }
    &.success {
        .rd-notification-icon {
            color: #87d068;
        }
    }
    &.info {
        .rd-notification-icon {
            color: #2db7f5;
        }
    }
    &.warning {
        .rd-notification-icon {
            color: #fa0;
        }
    }
    &.failed {
        .rd-notification-icon {
            color: #f50;
        }
    }
}
.ol-notification-title {
    font-size: .9rem;
}
.ol-notification-content {
    color: #999;
    font-size: .8rem;
    line-height: 1.5;
    margin: 0;
}
.ol-notification-close {
    position: absolute;
    top: .2rem;
    right: .5rem;
    font-size: .8rem;
    color: #ccc;
}
.ol-notification-close:hover {
    color: #969696;
}
.ol-notification-icon{
    position: absolute;
    top: 50%;
    font-size: 1.5rem;
    left: 1rem;
    margin-top: -.75rem;
    line-height: 1.5rem;
}
.notification-enter {
    opacity: 0;
}
.notification-enter-active, .notification-leave  {
    transition: opacity .5s ease;
}
.notification-leave-active {
    opacity: 0;
    position: absolute;
}
.notification-move {
    transition: transform .5s cubic-bezier(.55,0,.1,1);
}
</style>
<template>
    <div class="ol-notification-container" >
        <transition-group  name="notification">
          <div 
               class="ol-notification"
               v-for="(item, index) in allItem"
               :class="typeClass(item)"
               v-bind:key="item"
           >
              <!-- <span class="ol-notification-icon" :class="iconClass(item)"></span> -->
               <span class="ol-notification-title">{{item.title}}</span>
               <p class="ol-notification-content">{{item.content}}</p>
               <span class="ol-notification-close    ion-close-round" @click="closeItem(item)"></span>
           </div> 
        </transition-group >
    </div>
</template>
<script>
export default {
    componentName: 'notification',
    components: { 
    },
    data () {
        return {
            allItem: []
        }
    },
    mounted() {
    },
    methods:{
        typeClass (item) {
            if (!item.type) {
                return {
                    'rd-notification-info': true
                }
            }
            let classList = {}
            classList[item.type] = true
            return classList
        },
        closeItem (item) {
            this.allItem = this.allItem.filter(function(current) {
                return current !== item
            })
            this.removeBox();
        },
        addItem (item) {
            this.allItem.push(item);
        },
        removeBox() {
            if (this.allItem.length === 0) {
                document.body.removeChild(document.body.querySelector('.ol-notification-container'))
            }
        }
    }
}
</script>

