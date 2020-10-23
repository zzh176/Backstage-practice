<!--  -->
<template>
  <div class="login">
    <div class="box">
      <h3>UNI-ADMAIN</h3>
      <el-form ref="form" :rules="rules" :model="form" label-width="80px">
        <el-form-item label="账号" prop="name">
          <el-input v-model="form.name" placeholder="请输入账号"></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="pass">
          <el-input type="password" v-model="form.pass" placeholder="请输入密码"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="password('form')">登录</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
import loginApi from "../../api/login";
export default {
  components: {},
  data() {
    return {
      form: {
        name: "",
        pass: "",
      },
      rules: {
        name: [{ required: true, message: "请输入用户名", trigger: "blur" }],
        pass: [{ required: true, message: "请输入密码", trigger: "blur" }],
      },
    };
  },
  computed: {},
  watch: {},
  //方法集合
  methods: {
    // onSubmit(formName) {
    //   this.$refs[formName].validate(valid => {
    //     console.log(valid)
    //     if(valid){
    //       loginApi.login(this.form.name,this.form.pass).then((res) => {
    //         console.log(res)
    //       })
    //     }
    //    this.$store.dispatch("login",this.form)
    //   });
    // },

    password(from) {
      this.$refs[from].validate((valid) => {
        console.log(valid);
        if (valid) {
          //调用登录接口
          console.log("111")
          loginApi.login(this.form.name, this.form.pass).then((res) => {
              //在接口里获取code的值200
              console.log(res);
              const code = res.status;
              console.log(code);
              if (code == 200) {
                //获取token
                const token = res.data.data.token;
                const resp = res.data.data;
                console.log(token);
                console.log(resp);
                
                //把获取的token存储在本地
                localStorage.setItem("ht_token", token);
                localStorage.setItem("ht_info", JSON.stringify(resp));
                this.$router.push("/");
              } else {
                this.$message({
                  message: "登录失败",
                  type: "warning",
                });
              }
            })
            .catch((err) => {
              // console.log(err);
            });
        } else {
          return false;
        }
      });
    },
  },
  created() {},
  mounted() {},
};
</script>
<style lang='scss' scoped>
//@import url(); 引入公共css类
* {
  margin: 0;
  padding: 0;
}
.box {
  width: 36%;
  border: 1px solid #000;
  height: 300px;
  margin: 0 auto;
  margin-top: 10%;
  h3 {
    font-size: 30px;
    text-align: center;
    height: 70px;
    line-height: 70px;
    border: 1px solid #000;
    color: #808080;
  }
  .i_inp {
    width: 70%;
    margin: 0 auto;
    .inp {
      margin: 10px 0;
    }
    .button {
      width: 100%;
      margin: 10px 0;
    }
  }
}
</style>