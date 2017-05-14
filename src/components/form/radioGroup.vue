
<template>
    <div class="ol-radio-group">
        <rd-radio :radio="radio" v-for="radio in radios" @change="checkAction(radio)"></rd-radio>
    </div>
</template>
<script>
import rdRadio from './radio.vue'
export default {
    props: {
        radios: Array
    },
    components: {
        rdRadio
    },
    methods: {
        reset (except) {
            this.radios.map(radio => {
                if ( except == radio) {
                    
                    radio.checked = true
                }else{
                    
                    radio.checked = false

                }
            })
        },
        checkAction (radio) {
            this.reset(radio)
        }
    }
}
</script>