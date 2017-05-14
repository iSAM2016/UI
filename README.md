#VUE 组件 （自己练习，仿照现有的UI组件）
>本来是昨天要写总结的，感觉自己写不好，就放弃了。今天看到了iview和element有一些摩擦，是关于代码借鉴的问题（哈哈），不做评价。谁下生会写组件，我仿（chao）写了radonUI，这个组件体量比较小，好仿写。就是以这个为切入口写UI组件，先自己写，然后在仿写。看看别人写的比如bootstrap，这样提高挺快的。其实UI组件套路差不多，写过一遍就有感觉了。不像以前没想法、没思路。

### 概述
大部分组件我都写了一遍，剩下的要参考iview和element组件。这些组件中表格、表单、tree还是比较有难度的，前俩个还没有实践。下面是我的总结

#### 表单组件
表单组件传递数据的形式有两种
1 自定义prop 接口 （单独使用）
2 v-madel (表单验证数据使用)

####全局插件notification

1. 思考：在全局组件中要做到像window.alert().一样调用，在代码任何的地方调用，就有收集‘调用结果’的地方。
2. 这时候插件思想就出现了，就像把alert写在window上，把调用的方法写在Vue上

代码：
```
// plugins.js

import Vue from 'vue'
import Notification  from './Notification.js'

export default {

    // install是Vue写插件固有方法
    install: function (Vue, {
        notification=true
    }={}) {
        if ( notification ) {
            Notification(Vue);
        }
  }
};
```

``{notification=true}={}``
是options,写插件的时候可以提供这个选项，他的作用决定组件是否自动加载。这样的调用插件可以
```
import myPlugin from './plugins/plugins.js'
Vue.use(myPlugin)
```

如果``{notification=false}={}``就改变调用方式
```
import myPlugin from './plugins/plugins.js'
Vue.use(myPlugin, {
  notification: true
})
```

```
// Notification.js

import Vue from 'vue'
import { olNotification } from "../components/index"

// 注册全局的组件
// 创建一个div 把olNotification组件挂在到div中，就可以调用组件中方法了，把‘调用结果’放到组件（olNotification）中，来展示视图

const div = document.createElement('div');
div.innerHTML = `<ol-notification></ol-notification>`;
document.body.appendChild(div);
const notification = new Vue({
    el: div,
    components: { olNotification }
}).$children[0];


export default function() {
    Vue.prototype.$Notification = {
        remove (item, duration){
            setTimeout(() => {
                notification.closeItem(item)
            }, duration)
        },
        create(type, title, content, duration){
            let data = {
                title,
                content,
                duration
            }

            // 把‘调用结果’放到组件
            notification.addItem(data)
            if(duration){

                // 一段时间（duration）把‘调用结果’移除组件
                this.remove(data, duration)
            }
        },

        // 四种组件形态
        success (title, content, duration) {
            this.create('success', title, content, duration)
        },
        info (title, content, duration) {
            this.create('info', title, content, duration)
        },
        warning (title, content, duration) {
            this.create('warning', title, content, duration)
        },
        failed (title, content, duration) {
            this.create('failed', title, content, duration)
        }
    }
}
```

```
// olNotification.vue
<style  lang = "sass" >
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
    &.failed,
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
                v-bind:key="item"
            >
                <span class="ol-notification-title">{{item.title}}</span>
                <p class="ol-notification-content">{{item.content}}</p>
                <span class="ol-notification-close    ion-close-round" @click="closeItem(item)"></span>
            </div>
        </transition-group >
    </div>
</template>
<script>
export default {
    computed: {
    },
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
        closeItem (item) {
            this.allItem = this.allItem.filter(function(current) {
                return current !== item
            })
        },
        addItem (item) {
            this.allItem.push(item);
        }
    }
}
</script>
```

####createObjectURL
window.URL.createObjectURL(blob|| file) 方法会根据传入的参数创建一个指向该对象的URL，这个URL 的生命周期仅仅存在于被创建的文档里面新的对象URL指向执行的File对象或者是Blob对象.

File对象或者Blob对象

这里大概说下File对象和Blob对象:

File对象,就是一个文件,比如我用input type="file"标签来上传文件,那么里面的每个文件都是一个File对象.

Blob对象,就是二进制数据,比如通过new Blob()创建的对象就是Blob对象.又比如,在XMLHttpRequest里,如果指定responseType为blob,那么得到的返回值也是一个blob对象.


注意点:

每次调用createObjectURL的时候,一个新的URL对象就被创建了.即使你已经为同一个文件创建过一个URL. 如果你不再需要这个对象,要释放它,需要使用URL.revokeObjectURL()方法. 当页面被关闭,浏览器会自动释放它,但是为了最佳性能和内存使用,当确保不再用得到它的时候,就应该释放它.


二.URL.revokeObjectURL

URL.revokeObjectURL()方法会释放一个通过URL.createObjectURL()创建的对象URL. 当你要已经用过了这个对象URL,然后要让浏览器知道这个URL已经不再需要指向对应的文件的时候,就需要调用这个方法.

具体的意思就是说,一个对象URL,使用这个url是可以访问到指定的文件的,但是我可能只需要访问一次,一旦已经访问到了,这个对象URL就不再需要了,就被释放掉,被释放掉以后,这个对象URL就不再指向指定的文件了.

比如一张图片,我创建了一个对象URL,然后通过这个对象URL,我页面里加载了这张图.既然已经被加载,并且不需要再次加载这张图,那我就把这个对象URL释放,然后这个URL就不再指向这张图了.



