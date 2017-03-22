import Vue from 'vue';

Vue.component('item', {
  template: `<li>
  
    <div
      :class="{bold: isFolder}"
      @click="toggle"
      @dblclick="changeType">
      <span v-if="isFolder" class="tree-icon"  :class="{'tree-iconA': open}" ></span> <img src="./src/img/fil.png" alt="" />
      {{model.name}}
    </div>

    
    <ul v-show="open" v-if="isFolder">
      <item
        class="item"
        v-for="model in model.children"
        :model="model">
      </item>
     
    </ul>
  </li>`,
  props: {
    model: Object
  },
  data: function () {
    return {
      open: false
    }
  },
  computed: {
    isFolder: function () {
      return this.model.children &&
        this.model.children.length
    }
  },
  methods: {
    toggle: function () {
      if (this.isFolder) {
        this.open = !this.open
      }

     /* $(this.$el).addClass('bg')
      console.log($(this.el))*/
    },
    changeType: function () {
      if (!this.isFolder) {
        Vue.set(this.model, 'children', [])
        this.open = true
      }
    },
   
  }
})

