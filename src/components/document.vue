<template>
    <div class="ol-file">
        <slot></slot>
        <div v-html="rawHtml" class="ol-code-content"></div>
    </div>
</template>
<script>
    const HTMLDeCode = (str) => {
    const div = document.createElement('div')
    div.innerHTML = str
    return div.innerText || div.textContent
}
  export default {
    props:{
        str:{
          type: String
        }
    },
    data () {
      return {
        rawHtml:"",
        height: '220px' ,
      }
    },
    methods: {
      openitem() {
     }
    },
    mounted () {
       this.rawHtml = window.marked(HTMLDeCode(this.$el.getElementsByClassName('ol-mark-document')[0].innerHTML))
    }
  }

</script>
<style lang= 'stylus'>
.ol-mark-document{
    display: none
}
 .ol-file table {
    border-collapse: collapse;
    width: 100%;
    background-color: #fff;
    color: #5e6d82;
    font-size: 14px;
    margin-bottom: 45px;
    line-height: 1.5em;
}
 .ol-file table tr {
    background-color: #fff;
    border-top: 1px solid #ccc;
    line-height: 3;
    text-align: center;
}
 .ol-file thead {
    display: table-header-group;
    vertical-align: middle;
    border-color: inherit;
}

 .ol-file tbody {
    display: table-row-group;
    vertical-align: middle;
    border-color: inherit;
}
  .ol-file table tr:nth-child(2n) {
    background-color: #f8f8f8;
}
 .ol-file table th, .markdown-body table td {
    padding: 6px 13px;
}



</style>