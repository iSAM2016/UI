<style  lang = "stylus" ></style>
<template>
  <section>
    <h4>#多个使用</h4>
    <ol-RadioGroup v-model="radio">
      <ol-radio  label="1">备选1</ol-radio>
      <ol-radio  label="2">备选2</ol-radio>
      <ol-radio  label="3" :disabled='true'>备选3</ol-radio>
    </ol-RadioGroup>
  </section>
</template>
<script>
import { olRadio, olRadioGroup }from '../index'
  export default {
    components: { 
      olRadio,
      olRadioGroup
    },
    ready() {
    },
    data () {
      return {
        radio: '1'
      }
    },
    methods: {
      change( key ) {
      }
    }
  }
</script>