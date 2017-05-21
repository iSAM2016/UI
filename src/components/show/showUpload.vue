<style  lang = "stylus" >
</style>
<template>
  <section>
         

    <div>
      <h4>
        #标签
      </h4>
        <ol-upload
         accept="image/*"
         :finishUPload= "finishUPload" 
         @add="add"
         @remove = "remove"
         @actionUpdata ="actionUpdata"
         @on-result-change = "resultChange"
        ></ol-upload>
    </div>  
<br />

  </section>
</template>
<script>
import { olUpload }from '../index'

  export default {
    components: { 
      olUpload
          },

    ready() {
        console.log(this.$route.auth + "user")
    },

    data () {
      return {
        finishUPload: false
      }
    },
    
    methods: {
        add( newItem,fileList){
        },
        remove(item){
        },

        actionUpdata (files) {
             /* {每个数据的形式
            src: previewURL,
            file: this.$file.files[i]
        }*/
            console.log(files)
            this.finishUPload = true
        },
        resultChange(){
            this.finishUPload = false
        }
    }
  }

</script>