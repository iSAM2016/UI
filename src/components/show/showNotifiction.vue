<template>
    <div class="ex-content">
        <div class="ex-caol">
            <p>
                <span @click="success">
                    <ol-button type="success" >success</ol-button>
                </span>
                <ol-button type="danger" @change="danger">danger</ol-button>
                <ol-button type="warning" @change="warning">warning</ol-button>
                <ol-button type="info" @change="info">info</ol-button>
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