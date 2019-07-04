<template>
  <div>
    <h1>用户登录</h1>
    <el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm" label-width="100px">
      <el-form-item label="用户名" prop="username">
        <el-input type="text" v-model="ruleForm.username" autocomplete="on"></el-input>
      </el-form-item>
      <el-form-item label="密码" prop="password">
        <el-input type="password" v-model="ruleForm.password"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="success" @click="submitForm">免费登录</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>
<script>
export default {
  data() {
    //   自定义校验规则
    let validatePass = (rule, value, callback) => {
      callback();
    };
    let validateUsername = (rule, value, callback) => {
      console.log("rule:", rule);
      if (value.length < 3) {
        callback(new Error("用户名不能少于3位"));
      }else{
          callback();
      }
    };
    return {
      ruleForm: {
        username: "",
        password: ""
      },
      rules: {
        password: [{ validator: validatePass, trigger: "blur" }],
        username: [{ validator: validateUsername, trigger: "blur" }]
      }
    };
  },
  methods: {
    submitForm() {
      this.$refs['ruleForm'].validate(valid => {
        if (valid) {
            let {username,password} = this.ruleForm;
            this.$axios.get('/login',{
                params:{
                    username,
                    password
                }
            }).then(({data})=>{
                console.log(data);
                if(data.code == 250){
                    alert('用户名或密码错误！')
                }else if(data.code === 1000){
                    // 保存登录信息
                    localStorage.setItem('username',username);

                    // 获取目标路径
                    let targetPath = this.$route.query.redirectTo;
                    
                    this.$router.replace(targetPath?targetPath:'/home')
                }
            })
        }
      });
    }
  },
  created() {
    console.log("Login:", this.$route);
  }
};
</script>
