<template>
  <div>
    <div>
      <el-form ref="loginForm" :model="form" label-width="80px" class="login-box">
        <h3 class="login-title">欢迎登录</h3>
        <el-form-item label="账号" prop="Account">
          <el-input type="text" placeholder="请输入账号" v-model="form.Account" />
        </el-form-item>
        <el-form-item label="密码" prop="PassWord">
          <el-input type="password" placeholder="请输入密码" v-model="form.PassWord" />
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="login">登录</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
import { post } from "../../service/http";
import host from "../../libs/utils";
export default {
  data() {
    return {
      form: {
        Account: "shanggang",
        PassWord: "gy888"
      }
    };
  },
  methods: {
    login() {
      var url = host.host4 + "login.ashx";
      var data = {
        Account: this.form.Account,
        PassWord: this.form.PassWord,
        YHLX: "0"
      };
      var promise = post(url, data);
      promise.then(v => {
        if (v.errCode === "SUCCESS") {
          console.log("denglu", v);
          let KHQC = v.data[0]["KHQC"];
          let YHBH = v.data[0]["Yhbh"];
          let clientuser={
              KHQC:'',
              YHBH:''
          }
          clientuser.KHQC=KHQC;
          clientuser.YHBH=YHBH;
            sessionStorage.setItem(
              "clientUser",
              JSON.stringify(clientuser)
            );
            this.$router.push("/query");
        } else if (v.errCode === "FAIL") {
          this.$message.error("登陆失败");
        }
      });
    }
  }
};
</script>

<style>
.login-box {
  border: 1px solid #dcdfe6;
  width: 350px;
  margin: 100px auto;
  padding: 35px 35px 15px 35px;
  border-radius: 5px;
  -webkit-border-radius: 5px;
  -moz-border-radius: 5px;
  box-shadow: 0 0 25px #909399;
}

.login-title {
  text-align: center;
  margin: 0 auto 40px auto;
  color: #303133;
}
.body_middle_div {
  top: 10px;
  bottom: 20px;
  margin-bottom: 20px;
}
</style>