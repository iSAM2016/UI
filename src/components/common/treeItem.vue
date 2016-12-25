<style lang = "sass">
.ol-treeItem {
  display: block;
    list-style: none;
    width: 100%;
    padding: 0;
    margin: 0;
      
      .ol-treeItem-li{
        padding: 0 2rem 0 2rem;
      }
}

</style>
<template>

  <ul 
      v-if="treeData && treeData.length" 
      class="ol-treeItem">
    <li 
          v-for="item in treeData"
          @click.stop="openchild(item)"
          class="ol-treeItem-li"

        >
      <radio 
                :radio = 'item.radio' 
                @change = "change(item.children,item)"

            ></radio>
      {{ item.label }}
      <treeItem 
                v-if="item.show"
                :treeData="item.children"
                @select = "chose"
                ></treeItem>
    </li>
  </ul>
</template>
<script>
import radio from '../form/radio'


export default {
  name:"treeItem",
  props: {
    treeData: {
      type:Array,
      require:true,
    },
  },

  data: function () {
    return {
     
        choseArr:[]
      
    }
  },

  components: {
        radio
  },

  methods: {
    openchild(item){
      event.stopPropagation()
       item.show = !item.show
       this.$set(item,"show", item.show)
    },

    change(children,item){
      let that = this;
      
      if(!children){ 
          that.$emit("select",item)
        return 
      }

        that.$emit("select",item)
        this.deep( children)
    },

    chose( data ){
        console.log(data)
          this.choseArr.push(data)
          this.$emit("select",data)
    },

    deep(children){

      if(!children){ 
        return 
      }

        children.forEach(source =>{
                if( !source.radio.checked){
                     source.radio.checked = true
                     this.deep(source["children"])

                }else{
                     source.radio.checked = false
                     this.deep(source["children"])
                } 
        })
    }
  },

  computed: {
     
  },

}

</script>