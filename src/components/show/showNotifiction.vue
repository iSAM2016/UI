<template>
    <div class="ex-content">
<!-- 例子 -->
<h3>notifiction</h3>
<showMark>
<textarea class="ol-mark-text">
```html
<ol-button type="success" @click.native="success">success</ol-button>
<ol-button type="danger" @click.native="danger">danger</ol-button>
<ol-button type="warning" @click.native="warning">warning</ol-button>
<ol-button type="info" @click.native="info">info</ol-button>

export default {
    data () {
        return {}
    },
    components: {
        olButton,
    },
    mounted() {
        
    },
    methods: {
        success(){
            this.$Notification.success('编辑成功', '', 5000)
        },
        info () {
            this.$Notification.info('info', '', 5000)
        },
        warning () {
            this.$Notification.warning('warning', '', 5000)
        },
        danger () {
            this.$Notification.failed('failed', '', 5000)
        }
    }
}

```
</textarea>
<ol-button type="success" @click.native="success">success</ol-button>
<ol-button type="danger" @click.native="danger">danger</ol-button>
<ol-button type="warning" @click.native="warning">warning</ol-button>
<ol-button type="info" @click.native="info">info</ol-button>

</showMark>

<!-- 接口 -->
<h3>接口</h3>
<document>
<textarea class="ol-mark-document">
 
| 参数          | 说明              |   类型  | 可选值               | 默认值 |     
| ------------- | ------------------|-------- |--------------------- |--------|
| title         |  标题             |  string |                      |   ---  |
| content       |  内容             |  string |                      |   ---  |
| duration      |  时间             |  number |                      |   ---  |
</textarea>
</document> 
    </div>
</template>
<script>
import { olButton }from '../index';
import showMark from '../showMark.vue'
import document from '../document.vue'
export default {
    data () {
        return {}
    },
    components: {
        olButton,
        showMark,
        document
    },
    mounted() {
        
    },
    methods: {
        success(){
            this.$Notification.success('编辑成功', '我是内容', 905000)
        },
        info () {
            this.$Notification.info('info', '', 5000)
        },
        warning () {
            this.$Notification.warning('warning', '', 5000)
        },
        danger () {
            this.$Notification.failed('failed', '', 5000)
        }
    }
}
</script>