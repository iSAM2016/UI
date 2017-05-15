<style  lang = "stylus" ></style>
<template>
  <div>
    <h4>#标签</h4>
    <ol-form style="width: 440px" ref="form" :model='form' :rules="rules">
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
      <ol-form-item label="是否选择" prop="checked">
        <ol-switch v-model="form.checked" />
      </ol-form-item>
      <ol-form-item label="多选" prop="checkgroup">
        <ol-checkbox-group v-model="form.checkgroup" >
          <ol-checkbox label="我已阅读用户协议" name="read"></ol-checkbox>
          <ol-checkbox label="同意" name='examination'></ol-checkbox>
          <ol-checkbox label="中国" name='china' :checked="true"></ol-checkbox>
          <ol-checkbox label="美国" name='us' :checked="true"></ol-checkbox>
          <ol-checkbox label="英国" name='ua' ></ol-checkbox>
        </ol-checkbox-group>
      </ol-form-item>
      <ol-form-item label="单选" prop="radio">
        <ol-RadioGroup v-model="form.radio">
          <ol-radio  label="1">备选1</ol-radio>
          <ol-radio  label="2">备选2</ol-radio>
          <ol-radio  label="3" disabled>备选3</ol-radio>
        </ol-RadioGroup>
      </ol-form-item>
      <ol-form-item label='详细介绍' prop='detail'>
        <ol-input v-model="form.detail" type="textarea"></ol-input>
      </ol-form-item>
      <ol-form-item>
        <ol-button type="primary">提交</ol-button>
        <ol-button type="default">重置</ol-button>
      </ol-form-item>
    </ol-form>
    <h4>行内元素</h4>
    <ol-form style="width: 880px" ref="form1" :model='form1' :inline="true" >
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
      <ol-form-item>
        <ol-button type="primary">提交</ol-button>
      </ol-form-item>
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
            origin: '010',
            checked: false,
            checkgroup:[],// 请填写空数组
            detail: 'detail',
            radio: '1'
          },
           form1: {
            name: 'isam2016',
            sex: '男',
            origin: '010',
            checked: false,
            checkgroup:[],// 请填写空数组
            detail: 'detail',
            radio: '1'
          },
          rules: {
            name: [
              { required: true, message: '请输入活动名称', trigger: 'blur' },
              { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
            ]
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