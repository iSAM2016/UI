<style  lang = "stylus" ></style>
<template>
  <section>
    <div>
      <h4>#选择框单独使用</h4>
    </div>
    <ol-checkbox label="我已阅读用户协议" name="read" @changing='show'></ol-checkbox>
    <ol-checkbox label="同意" name='examination' :checked="true" @changing='show'></ol-checkbox>
    <h4>#选择框单独组合使用, 不要使用changing</h4>
    <ol-checkbox-group>
      <ol-checkbox label="我已阅读用户协议" name="read"></ol-checkbox>
      <ol-checkbox label="同意" name='examination'></ol-checkbox>
      <ol-checkbox label="中国" name='china' :checked="true"></ol-checkbox>
    </ol-checkbox-group>
  </section>
</template>
<script>
import {olCheckbox} from '../index'
  export default {
    data () {
      return {
      }
    },
    components: {
       olCheckbox
    },
    methods: {
      show(obj){
        console.log(obj)
      }
    }
  }
</script>