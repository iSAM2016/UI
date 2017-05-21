<style  lang = "stylus" ></style>
<template>
    <section >
        <div style="height:50px"></div>
        <p>
            <ol-button type="primary">
                <ol-tooltip>这里是tooltip</ol-tooltip>
                鼠标移上来就会出现提示 按钮
            </ol-button>
            <span>
                <ol-tooltip>这里是tooltip</ol-tooltip>
                鼠标移上来就会出现提示
            </span>
        </p>
    </section>
</template>
<script>
import { olTooltip, olButton }from '../index'

  export default {
    components: { 
      olTooltip,
      olButton
    },
    data () {
        return {
           }
    }
  }

</script>