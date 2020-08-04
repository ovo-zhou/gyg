<template>
  <div class="back_img">
    <div class="border">
      <div class="login_box">
        <h3 class="login-title">后台管理</h3>
        <el-form label-width="0px" :model="userform">
          <el-form-item>
            <el-input v-model="userform.Account" placeholder="用户名"></el-input>
          </el-form-item>
          <el-form-item>
            <el-input v-model="userform.PassWord" placeholder="密码" show-password></el-input>
          </el-form-item>
          <el-form-item>
            <el-row>
              <el-col :span="14">
                <el-input placeholder="请输入验证码" v-model="userform.YZM" />
              </el-col>
              <el-col :span="10">
                <img :src="imgData" id="idPic" style="width:100px;height:40px" @click="updateImg" />
              </el-col>
            </el-row>
          </el-form-item>
          <el-form-item>
            <div class="btn_login" @click="login">登录</div>
          </el-form-item>
        </el-form>
      </div>
    </div>
  </div>
</template>

<script>
import host from "../../libs/utils";
import { post } from "../../service/http";
export default {
  data() {
    return {
      userform: {
        Account: "",
        PassWord: "",
        DLFS: "后台管理",
        YZM: ""
      },
      imgData: "",
      nowtime: ""
    };
  },
  mounted() {
    this.nowtime = new Date().getTime() * 1000;
    // console.log("nowtime", this.nowtime);
    var url = host.host1 + "updateVerifyCode.ashx";
    var data = { SESSIONID: this.nowtime };
    var promise = post(url, data);
    promise.then(v => {
      console.log("v.errStr", v.errStr);
      if (v.errCode === "FAIL" || v.errCode === "SUCCESS") {
        // console.log(v.errStr);
        this.imgData = "data:image/jpg;base64," + v.errStr;
      }
    });
  },
  methods: {
    updateImg() {
      var url = host.host1 + "updateVerifyCode.ashx";
      var data = { SESSIONID: this.nowtime };
      var promise = post(url, data);
      promise.then(v => {
        if (v.errCode === "FAIL" || v.errCode === "SUCCESS") {
          // console.log(v.errStr);
          this.imgData = "data:image/jpg;base64," + v.errStr;
        }
      });
    },
    check() {
      if (this.userform.Account === "") {
        this.$message.error("请输入用户名");
        return false;
      }
      if (this.userform.PassWord === "") {
        this.$message.error("请输入密码");
        return false;
      }
      if (this.userform.DLFS === "") {
        this.$message.error("请选择登录方式");
        return false;
      }
      if (this.$refs["slider"]) {
        if (!this.$refs["slider"].confirmSuccess) {
          this.$message.error("请拖动滑块验证");
          return false;
        }
      }
      return true;
    },
    login() {
      if (!this.check()) {
        return;
      }

      let url = host.host1 + "login.ashx";
      var data = {
        Account: this.userform.Account,
        PassWord: this.userform.PassWord,
        YZM: this.userform.YZM,
        SESSIONID: this.nowtime
      };
      post(url, data).then(res => {
        if (res.errCode === "SUCCESS") {
          console.log(res);
          let user = {
            DeptId: "",
            DeptName: "",
            Yhbh: "",
            XM: "",
            UserIdentity: []
          };
          user.DeptId = res.data[0]["DeptId"];
          user.DeptName = res.data[0]["DeptName"];
          user.Yhbh = res.data[0]["Yhbh"];
          user.XM = res.data[0]["XM"];
          for (var i = 0; i < res.data.length; i++) {
            user.UserIdentity.push(res.data[i]["Jsmc"]);
          }
          sessionStorage.setItem("user", JSON.stringify(user));
          sessionStorage.setItem("isLogin", "true");

          if (
            JSON.parse(sessionStorage.getItem("user")).UserIdentity.indexOf(
              "系统管理员"
            ) >= 0
          ) {
            this.$router.push({ path: "/admin" });
            return;
          } else {
            this.$message.error("不是系统管理员");
            return;
          }
        } else if (res.errCode === "FAIL") {
          this.$message.error(res.errStr);
        }
      });
    }
  }
};
</script>

<style scoped>
.login-title {
  text-align: center;
  margin: 0 auto 40px auto;
  color: #303133;
}
.back_img {
  width: 100%;
  /* height: 100vh; */
  background: #ffffff;
}
.border {
  border: 1px solid #dcdfe6;
  width: 250px;
  margin: 200px auto;
  padding: 35px 35px 15px 35px;
  border-radius: 5px;
  -webkit-border-radius: 5px;
  -moz-border-radius: 5px;
  box-shadow: 0 0 25px #909399;
}
.btn_login {
  width: 100%;
  height: 40px;
  background: #409eff;
  border-radius: 4px;
  text-align: center;
  font-size: 16px;
  cursor: pointer;
  color: #fff;
}
</style>