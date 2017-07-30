<style  lang = "stylus" ></style>
<template>
  <div>
    <h3>form 表单验证</h3>
    <h6>在表单验证下，不在使用input 自带的邮箱 手机号验证</h6>
<showMark>
<textarea  class="ol-mark-text">
```html  
<ol-form style="width: 440px" ref="form" :model='form' :rules="rules">
    <ol-form-item label='输入框' prop='name'>
      <ol-input v-model="form.name"></ol-input>
    </ol-form-item>
    <ol-form-item label='下拉选择' prop='origin'>
      <ol-select v-model="form.origin">
        <ol-option label="北京" value="010" ></ol-option>
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
        <ol-checkbox label="中国" name='china' ></ol-checkbox>
        <!--  <ol-checkbox label="美国" name='us' :checked="true"></ol-checkbox>
      -->
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
    <ol-button type="primary" @click.native="submit('form')">提交</ol-button>
    <ol-button type="default" @click.native="resetForm('form')">重置</ol-button>
  </ol-form-item>
</ol-form>
   
export default {
  data () {
    return {
        form: {
          name: '',
          origin: '',
          checked: false,
          checkgroup:[],// 请填写空数组
          detail: '',
          radio: '1'
        },
         form1: {
          name: 'isam2016',
          origin: '010',
          checked: false,
          checkgroup:[],// 请填写空数组
          detail: 'detail',
          radio: '1'
        },
         form2: {
          pass: '',
          checkPass: '',
          age: ''
        },
        rules: {
          name: [
            { required: true, message: '请输入活动名称'},
            { min: 3, max: 5, message: '长度在 3 到 5 个字符'}
          ],
          origin: [
             { required: true, message: '请选择区域' }
          ],
          checkgroup: [
            { required: true, message: '请至少选择一个' }
          ],
          detail: [
            { required: true, message: '详细信息'}
          ],
        },
        rules2: {
          age: [
            {required: true,  validator: checkAge}
          ],
          pass: [
            { required: true, validator: validatePass}
          ],
          checkPass: [
            { required: true, validator: validatePass2}
          ]
        }

    };
  },
  components: { 
  },
  mounted() {
  },
  methods:{
    submit(form) {
      this.$refs[form].validate((valid) => {
        if (valid) {
          console.log(this.form)
          alert('submit!');
        } else {
          console.log('error submit!!');
          return false;
        }
      })
    },
    submitsign (){
      this.$refs.form2.validateField('age');
    },
    resetForm(form) {
      this.$refs[form].resetFields();
    }
  },
  computed:{
  },
}
```
</textarea>
 <ol-form style="width: 440px" ref="form" :model='form' :rules="rules">
      <ol-form-item label='输入框' prop='name'>
        <ol-input v-model="form.name"></ol-input>
      </ol-form-item>
      <ol-form-item label='下拉选择' prop='origin'>
        <ol-select v-model="form.origin">
          <ol-option label="北京" value="010" ></ol-option>
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
          <ol-checkbox label="中国" name='china' ></ol-checkbox>
          <!--  <ol-checkbox label="美国" name='us' :checked="true"></ol-checkbox>
        -->
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
      <ol-button type="primary" @click.native="submit('form')">提交</ol-button>
      <ol-button type="default" @click.native="resetForm('form')">重置</ol-button>
    </ol-form-item>
  </ol-form>
</showMark>

<h4>自定义规则</h4>
<showMark>
<textarea  class="ol-mark-text">
```html  
  <ol-form style="width: 440px" ref="form2" :model='form2' :rules="rules2">
    <ol-form-item label='密码' prop='pass'>
      <ol-input v-model="form2.pass"></ol-input>
    </ol-form-item>
    <ol-form-item label='重复密码' prop='checkPass'>
      <ol-input v-model="form2.checkPass"></ol-input>
    </ol-form-item>
    <ol-form-item label='年龄' prop='age'>
      <ol-input v-model="form2.age"></ol-input>
    </ol-form-item>
    <ol-form-item>
      <ol-button type="primary" @click.native="submit('form2')">提交</ol-button>
      <ol-button type="primary" @click.native="submitsign('form2')">单独字段验证年龄</ol-button>
    </ol-form-item>
  </ol-form>
  export default {
  data () {
    return {
        form: {
          name: '',
          origin: '',
          checked: false,
          checkgroup:[],// 请填写空数组
          detail: '',
          radio: '1'
        },
         form1: {
          name: 'isam2016',
          origin: '010',
          checked: false,
          checkgroup:[],// 请填写空数组
          detail: 'detail',
          radio: '1'
        },
         form2: {
          pass: '',
          checkPass: '',
          age: ''
        },
        rules: {
          name: [
            { required: true, message: '请输入活动名称'},
            { min: 3, max: 5, message: '长度在 3 到 5 个字符'}
          ],
          origin: [
             { required: true, message: '请选择区域' }
          ],
          checkgroup: [
            { required: true, message: '请至少选择一个' }
          ],
          detail: [
            { required: true, message: '详细信息'}
          ],
        },
        rules2: {
          age: [
            {required: true,  validator: checkAge}
          ],
          pass: [
            { required: true, validator: validatePass}
          ],
          checkPass: [
            { required: true, validator: validatePass2}
          ]
        }

    };
  },
  components: { 
  },
  mounted() {
  },
  methods:{
    submit(form) {
      this.$refs[form].validate((valid) => {
        if (valid) {
          console.log(this.form)
          alert('submit!');
        } else {
          console.log('error submit!!');
          return false;
        }
      })
    },
    submitsign (){
      this.$refs.form2.validateField('age');
    },
    resetForm(form) {
      this.$refs[form].resetFields();
    }
  },
  computed:{
  },
}
  
```
</textarea>
  <ol-form style="width: 440px" ref="form2" :model='form2' :rules="rules2">
    <ol-form-item label='密码' prop='pass'>
      <ol-input v-model="form2.pass"></ol-input>
    </ol-form-item>
    <ol-form-item label='重复密码' prop='checkPass'>
      <ol-input v-model="form2.checkPass"></ol-input>
    </ol-form-item>
    <ol-form-item label='年龄' prop='age'>
      <ol-input v-model="form2.age"></ol-input>
    </ol-form-item>
    <ol-form-item>
      <ol-button type="primary" @click.native="submit('form2')">提交</ol-button>
      <ol-button type="primary" @click.native="submitsign('form2')">单独字段验证年龄</ol-button>
    </ol-form-item>
  </ol-form>
</showMark>

  

  <h4>行内元素</h4>
  <showMark>
<textarea  class="ol-mark-text">
```html  
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
  export default {
  data () {
    return {
        form: {
          name: '',
          origin: '',
          checked: false,
          checkgroup:[],// 请填写空数组
          detail: '',
          radio: '1'
        },
         form1: {
          name: 'isam2016',
          origin: '010',
          checked: false,
          checkgroup:[],// 请填写空数组
          detail: 'detail',
          radio: '1'
        },
         form2: {
          pass: '',
          checkPass: '',
          age: ''
        },
        rules: {
          name: [
            { required: true, message: '请输入活动名称'},
            { min: 3, max: 5, message: '长度在 3 到 5 个字符'}
          ],
          origin: [
             { required: true, message: '请选择区域' }
          ],
          checkgroup: [
            { required: true, message: '请至少选择一个' }
          ],
          detail: [
            { required: true, message: '详细信息'}
          ],
        },
        rules2: {
          age: [
            {required: true,  validator: checkAge}
          ],
          pass: [
            { required: true, validator: validatePass}
          ],
          checkPass: [
            { required: true, validator: validatePass2}
          ]
        }

    };
  },
  components: { 
  },
  mounted() {
  },
  methods:{
    submit(form) {
      this.$refs[form].validate((valid) => {
        if (valid) {
          console.log(this.form)
          alert('submit!');
        } else {
          console.log('error submit!!');
          return false;
        }
      })
    },
    submitsign (){
      this.$refs.form2.validateField('age');
    },
    resetForm(form) {
      this.$refs[form].resetFields();
    }
  },
  computed:{
  },
}
 
  
```
</textarea>
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
</showMark>

  


<h3>API</h3>
<h4>ol-form</h4>
<document>
<textarea  class="ol-mark-document">
| 参数          | 说明          | 类型    |  可选值                                        | 默认值|
| ------------- | ------------- | ------- | ---------------------------------------------- | ----- |
| style         | 表格样式      | string  |                                                | ---   |
| ref           | 获取表格元素  | string  |                                                | ---   |
| model         | 表单各项的值  | ---     |                                                | ---   |
| rules         | 表单各项的规则| ---     |                                                | ---   |
</textarea>
</document> 

</div>
</template>
<script>
import  showMark from '../showMark.vue'
import  document from '../document.vue'
var checkAge = function(value, callback){
  if (!value) {
     return callback('年龄不能为空');
  }
  if (!Number.isInteger(Number(value))) {
       return callback('请输入数字值');
      } else {
        if (value < 18) {
          return callback('必须年满18岁');
        } else {
           callback();
        }
    }
};
var validatePass2 = function(value, callback){
  if (value === '') {
      return callback('请再次输入密码');
  } else if (value !== this.form2.pass) {
    return callback('两次输入密码不一致!');
  } else {
    callback();
  }
};
var validatePass = function(value, callback) {
  if (value === '') {
    return callback('请输入密码');
  } else {
    if (this.form2.checkPass !== '') {
      //this.$refs.form2.validateField('checkPass');
    }
  }
    callback();
};



export default {
  data () {
    return {
        form: {
          name: '',
          origin: '',
          checked: false,
          checkgroup:[],// 请填写空数组
          detail: '',
          radio: '1'
        },
         form1: {
          name: 'isam2016',
          origin: '010',
          checked: false,
          checkgroup:[],// 请填写空数组
          detail: 'detail',
          radio: '1'
        },
         form2: {
          pass: '',
          checkPass: '',
          age: ''
        },
        rules: {
          name: [
            { required: true, message: '请输入活动名称'},
            { min: 3, max: 5, message: '长度在 3 到 5 个字符'}
          ],
          origin: [
             { required: true, message: '请选择区域' }
          ],
          checkgroup: [
            { required: true, message: '请至少选择一个' }
          ],
          detail: [
            { required: true, message: '详细信息'}
          ],
        },
        rules2: {
          age: [
            {required: true,  validator: checkAge}
          ],
          pass: [
            { required: true, validator: validatePass}
          ],
          checkPass: [
            { required: true, validator: validatePass2}
          ]
        }

    };
  },
  components: { 
    showMark,
    document
  },
  mounted() {
  },
  methods:{
    submit(form) {
      this.$refs[form].validate((valid) => {
        if (valid) {
          console.log(this.form)
          alert('submit!');
        } else {
          console.log('error submit!!');
          return false;
        }
      })
    },
    submitsign (){
      this.$refs.form2.validateField('age');
    },
    resetForm(form) {
      this.$refs[form].resetFields();
    }
  },
  computed:{
  },
}
</script>