<template>
  <div>
    <h1>用户注册</h1>
    <el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm" label-width="100px">
      <el-form-item label="用户名" prop="username">
        <el-input type="text" v-model="ruleForm.username" autocomplete="on"></el-input>
      </el-form-item>
      <el-form-item label="密码" prop="password">
        <el-input type="password" v-model="ruleForm.password"></el-input>
      </el-form-item>
      <el-form-item label="确认密码" prop="checkPass">
        <el-input type="password" v-model="ruleForm.checkPass"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="success" @click="submitForm('ruleForm')">注册</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>
<script>
import axios from 'axios';
export default {
  data() {
    //   自定义校验规则
    let validatePass = (rule, value, callback) => {
      callback();
    };
    let checkPass = (rule, value, callback) => {
        if(value != this.ruleForm.password){
            callback(new Error('两次输入密码不一致'))
        }else{
            callback();
        }
    };
    let validateUsername = (rule, value, callback) => {

        this.$axios.get('http://localhost:1904/reg/check',{
            params:{
                username:value
            }
        }).then(({data})=>{
            if(data.code == 250){
                callback(new Error('用户名已存在'));
            }else{
                callback()
            }
        })
      
    };
    return {
      ruleForm: {
        username: "",
        password: "",
        checkPass: ""
      },
      rules: {
        password: [{ validator: validatePass, trigger: "blur" }],
        checkPass: [{ validator: checkPass, trigger: "blur" }],
        username: [{ validator: validateUsername, trigger: "blur" }]
      }
    };
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
            // 验证通过，发请求到后端，保存用户名到数据库
            let {username,password} = this.ruleForm;
            this.$axios.post('http://localhost:1904/reg',{
                username,
                password
            }).then(({data})=>{
                if(data.code == 200){
                    this.$router.replace({name:'Login'});
                }
            })
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    }
  }
};
</script>
