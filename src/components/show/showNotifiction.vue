<template>
    <div class="ex-content">
        <div class="ex-caol">
            <p>
                <ol-button type="success" @click.native="success">success</ol-button>
                <ol-button type="danger" @click.native="danger">danger</ol-button>
                <ol-button type="warning" @click.native="warning">warning</ol-button>
                <ol-button type="info" @click.native="info">info</ol-button>
            </p>
        </div>
    </div>
</template>
<script>
import { olButton }from '../index'
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
        success () {
            console.log(this.$Notification)
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
</script>