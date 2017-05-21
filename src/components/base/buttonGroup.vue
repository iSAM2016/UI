<style lang="stylus">
.ol-btn-group{
  display: inline-block;

    .ol-btn{
        margin: 0 -2.5px;
        &:hover,
        &:focus{
           position: relative;
        }
    }
    &>.ol-btn:first-child{
      border-bottom-right-radius: 0;
      border-top-right-radius: 0;
    }
     &>.ol-btn:last-child{
      border-bottom-left-radius: 0;
      border-top-left-radius: 0;
    }

    &>.ol-btn:not(:first-child):not(:last-child) {
       border-radius: 0;
     
    }
}
</style>
<template>
  <div class="ol-btn-group">
      <slot></slot>
  </div>
</template>
<script>
</script>