<style  lang = "stylus" ></style>
<template>
  <div>
    <h4>#标签</h4>
    <ol-form style="width: 440px" ref="form1" :model='form' >
      <ol-form-item label='输入框' prop='name'>
        <ol-input v-model="form.name"></ol-input>
      </ol-form-item>
      <ol-form-item label='下拉选择' prop='origin'>
          <ol-select v-model="form.origin">
            <ol-option label="北京" value="010"  :selected="true"></ol-option>
            <ol-option label="上海" value="011" ></ol-option>
            <ol-option label="重庆" value="012" :disabled='true'></ol-option>
          </ol-select>
      </ol-form-item>
      {{form.origin}}
    </ol-form>
  </div>
</template>
<script>
  export default {
    data () {
      return {
          form: {
            name: 'isam2016',
            sex: '男',
            origin: '010'
          }
      };
    },
    components: { 
    },
    mounted() {
      console.log(this.$refs.form1)
    },
    methods:{
    },
    computed:{
    },
  }
</script>