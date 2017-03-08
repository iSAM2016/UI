#VUE 组件 （自己练习，仿照现有的UI组件）

 1 table  组件中的一个排序功能,如this.sorBy没有完整的写出
          猜想是注册实例跟下

   2 dropbutton   布局混乱   

   3 slider  组建学习randui 的代码，重点是事件的绑定 没有真正的使用到vue的 特性，还是采用的DOM操作  

   4 日期选择器 的构建， 在掘金的的文章中有一个介绍时间的选择器 学习random   

   5 select  let rect = this.$el.getBoundingClientRect()

   6 button 绑定绑定@click事件不能触发，需要添加@click.native





***执行条件
  ###1、安装node.js(64位) 
  ###2、启动cmd，进入文件夹
  ###3、执行 npm i (中途可能有错误，可能会有影响)
  ###4、执行 npm run init
  ###5、执行 npm run dev
  ###6、启动 浏览器 输入 http://localhost:8080
  ###7、完成


https://gold.xitu.io/post/5843dcad128fe100577876e1

2016年11月25日 button
2016年11月29日 bable


###自定义组件使用 v-model

我们知道，v-model是在表单类元素上进行双向绑定时使用的，比如：

<template>
    <input type="text" v-model="data">
    {{ data }}
</template>
<script>
    export default {
        data () {
            return {
                data: ''
            }
        }
    }
</script>
这时data就是双向绑定的，输入的内容会实时显示在页面上。在 Vue 1.x 中，自定义组件可以使用 props 的.sync双向绑定，比如：

<my-component :data.sync="data"></my-component>
在 Vue 2.x 中，可以直接在自定义组件上使用 v-model了，比如：

<my-component v-model="data"></my-component>
在组件my-component中，通过this.$emit('input')就可以改变data的值了。
虽然 Vue 1.x 中无法这样使用，但是如果你的组件的模板外层是 input、select、textarea等支持绑定 v-model 特性的元素，也是可以使用的，比如 my-component 的代码是：

<template>
    <input type="text">
</template>
那也可以使用上面2.x的写法。








######使用$compile()在指定上下文中手动编译组件

注：该方法是在 Vue 1.x 中的使用介绍，官方文档并没有给出该方法的任何说明，不可过多依赖此方法。
使用$compile()方法，可以在任何一个指定的上下文（Vue实例）上手动编译组件，该方法在 iView 新发布的表格组件 Table 中有使用：
https://github.com/iview/iview/tree/master/src/components/table/cell.vue
由于表格的列配置是通过一个 Object 传入 props 的，因此不能像 slot 那样自动编译带有 Vue 代码的部分，因为传入的都是字符串，比如：

{
    render (row) {
        return `<i-button>${row.name}</i-button>`
    }
}
render函数最终返回一个字符串，里面含有一个自定义组件 i-button，如果直接用{{{ }}}显示，i-button 是不会被编译的，那为了实现在单元格内支持渲染自定义组件，就用到了$compile()方法。
比如我们在组件的父级编译：

// 代码片段
const template = this.render(this.row);    // 通过上面的render函数得到字符串
const div = document.createElement('div');
div.innerHTML = template;
this.$parent.$compile(div);    // 在父级上下文编译组件
this.$el.appendChild(cell);    // 将编译后的html插入当前组件
这样一来， i-button就被编译了。
在某些时候使用$compile()确实能带来益处，不过也会遇到很多问题值得思考：

这样编译容易把作用域搞混，所以要知道是在哪个Vue实例上编译的；
手动编译后，也需要在合适的时候使用$destroy()手动销毁；
有时候容易重复编译，所以要记得保存当前编译实例的id，这里可以通过 Vue 组件的_uid来唯一标识（每个Vue实例都会有一个递增的id，可以通过this._uid获取）
另外，Vue 1.x 文档也有提到另一个$mount()方法，可以实现类似的效果，在 Vue 2.x 文档中，有 Vue.compile()方法，用于在render函数中编译模板字符串，读者可以结合来看。










隐式创建 Vue 实例

在 webpack 中，我们都是用 .vue 单文件的模式来开发，每个文件即一个组件，在需要的地方通过 components: {}来使用组件。
比如我们需要一个提示框组件，可能会在父级中这样写：

<template>
    <Message>这是提示标题</Message>
</template>
<script>
    import Message from '../components/message.vue';
    export default {
        components: { Message }
    }
</script>
这样写没有任何问题，但从使用角度想，我们其实并不期望这样来用，反而原生的window.alert('这是提示标题')这样使用起来更灵活，那这时很多人可能就用原生 JS 拼字符串写一个函数了，这也没问题，不过如果你的提示框组件比较复杂，而且多处复用，这种方法还是不友好的，体现不到 Vue 的价值。
iView 在开发全局提示组件（Message）、通知提醒组件（Notice）、对话框组件（Modal）时，内部都是使用 Vue 来渲染，但却是 JS 来隐式地创建这些实例，这样我们就可以像Message.info('标题')这样使用，但其内部还是通过 Vue 来管理。相关代码地址：
https://github.com/iview/iview/tree/master/src/components/base/notification

下面我们来看一下具体实现：



上图是最终效果图，这部分 .vue 代码比较简单，相信大家都能写出这样一个组件来，所以直接说创建实例的部分，先看下核心代码：
import Notification from './notification.vue';
import Vue from 'vue';
import { camelcaseToHyphen } from '../../../utils/assist';

Notification.newInstance = properties => {
    const _props = properties || {};

    let props = '';
    Object.keys(_props).forEach(prop => {
        props += ' :' + camelcaseToHyphen(prop) + '=' + prop;
    });

    const div = document.createElement('div');
    div.innerHTML = `<notification${props}></notification>`;
    document.body.appendChild(div);

    const notification = new Vue({
        el: div,
        data: _props,
        components: { Notification }
    }).$children[0];

    return {
        notice (noticeProps) {
            notification.add(noticeProps);
        },
        remove (key) {
            notification.close(key);
        },
        component: notification,
        destroy () {
            document.body.removeChild(div);
        }
    }
};

export default Notification;
与上文介绍的$compile()不同的是，这种方法是在全局（body）直接使用 new Vue创建一个 Vue 实例，我们只需要在入口处对外暴露几个 API 即可：

import Notification from '../base/notification';

const prefixCls = 'ivu-message';
const iconPrefixCls = 'ivu-icon';
const prefixKey = 'ivu_message_key_';

let defaultDuration = 1.5;
let top;
let messageInstance;
let key = 1;

const iconTypes = {
    'info': 'information-circled',
    'success': 'checkmark-circled',
    'warning': 'android-alert',
    'error': 'close-circled',
    'loading': 'load-c'
};

function getMessageInstance () {
    messageInstance = messageInstance || Notification.newInstance({
        prefixCls: prefixCls,
        style: {
            top: `${top}px`
        }
    });

    return messageInstance;
}

function notice (content, duration = defaultDuration, type, onClose) {
    if (!onClose) {
        onClose = function () {

        }
    }
    const iconType = iconTypes[type];

    // if loading
    const loadCls = type === 'loading' ? ' ivu-load-loop' : '';

    let instance = getMessageInstance();

    instance.notice({
        key: `${prefixKey}${key}`,
        duration: duration,
        style: {},
        transitionName: 'move-up',
        content: `
            <div class="${prefixCls}-custom-content ${prefixCls}-${type}">
                <i class="${iconPrefixCls} ${iconPrefixCls}-${iconType}${loadCls}"></i>
                <span>${content}</span>
            </div>
        `,
        onClose: onClose
    });

    // 用于手动消除
    return (function () {
        let target = key++;

        return function () {
            instance.remove(`${prefixKey}${target}`);
        }
    })();
}

export default {
    info (content, duration, onClose) {
        return notice(content, duration, 'info', onClose);
    },
    success (content, duration, onClose) {
        return notice(content, duration, 'success', onClose);
    },
    warning (content, duration, onClose) {
        return notice(content, duration, 'warning', onClose);
    },
    error (content, duration, onClose) {
        return notice(content, duration, 'error', onClose);
    },
    loading (content, duration, onClose) {
        return notice(content, duration, 'loading', onClose);
    },
    config (options) {
        if (options.top) {
            top = options.top;
        }
        if (options.duration) {
            defaultDuration = options.duration;
        }
    },
    destroy () {
        let instance = getMessageInstance();
        messageInstance = null;
        instance.destroy();
    }
}
到这里组件已经可以通过Message.info()直接调用了，不过我们还可以在 Vue 上进行扩展：
Vue.prototype.$Message = Message;
这样我们可以直接用this.$Message.info()来调用，就不用 import Message 了。



Render 函数

<h1>
  <a name="hello-world" href="#hello-world">
    Hello world!
  </a>
</h1>


<anchored-heading :level="1">Hello world!</anchored-heading>


<script type="text/x-template" id="anchored-heading-template">
  <div>
    <h1 v-if="level === 1">
      <slot></slot>
    </h1>
    <h2 v-if="level === 2">
      <slot></slot>
    </h2>
    <h3 v-if="level === 3">
      <slot></slot>
    </h3>
    <h4 v-if="level === 4">
      <slot></slot>
    </h4>
    <h5 v-if="level === 5">
      <slot></slot>
    </h5>
    <h6 v-if="level === 6">
      <slot></slot>
    </h6>
  </div>
</script>
Vue.component('anchored-heading', {
  template: '#anchored-heading-template',
  props: {
    level: {
      type: Number,
      required: true
    }
  }
})

Vue.component('anchored-heading', {
    render: function( createElemnet ){
        return createElement(
        )
}
})


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

 

语法:

window.URL.revokeObjectURL(objectURL);
 