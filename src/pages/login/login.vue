<template>
  <div class="back_img">
    <div class="border">
      <div class="login_box">
        <el-form label-width="0px" :model="userform">
          <el-form-item>
            <el-input v-model="userform.Account" placeholder="用户名"></el-input>
          </el-form-item>
          <el-form-item>
            <el-input v-model="userform.PassWord" placeholder="密码" show-password></el-input>
          </el-form-item>
          <el-form-item>
            <el-select v-model="userform.DLFS" placeholder="请选择">
              <el-option label="员工登录" value="员工登录"></el-option>
              <el-option label="后台管理" value="后台管理"></el-option>
              <el-option label="客户登录" value="客户登录"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item>
            <slider ref="slider"></slider>
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
import slider from "./slider";
import host from "../../libs/utils";
import { post } from "../../service/http";
export default {
  data() {
    return {
      userform: {
        Account: "admin",
        PassWord: "sdic818",
        DLFS: "后台管理"
      }
    };
  },
  components: {
    slider
  },
  methods: {
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
      if (this.userform.DLFS === "客户登录") {
        alert("等待完善");
      } else {
        let url = host.host1 + "login.ashx";
        post(url, this.userform).then(res => {
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
            if (this.userform.DLFS === "员工登录" || this.userform.DLFS === "后台管理") {
              if (
                JSON.parse(sessionStorage.getItem("user")).UserIdentity.indexOf(
                  "货主"
                ) >= 0 &&
                JSON.parse(sessionStorage.getItem("user")).UserIdentity.indexOf(
                  "系统管理员"
                ) === -1
              ) {
                this.$message.error("不是内部员工");
              }
            }
            if (this.userform.DLFS === "后台管理") {
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
            } else {
              // this.$router.push({ path: "/workspace" });
              alert("等待完善")
            }
          } else if (res.errCode === "FAIL") {
            this.$message.error(res.errStr);
          }
        });
      }
    }
  }
};
</script>

<style scoped>
.back_img {
  width: 100%;
  height: 100vh;
  background: url("../../assets/login_back1.jpg") no-repeat;
  background-size: 100% 100%;
  background-attachment: fixed;
}
.border {
  width: 300px;
  padding-top: 30px;
  padding-bottom: 30px;
  border-radius: 5px;
  background-color: rgba(0, 0, 0, 0.5);
  position: relative;
  left: 40%;
  top: 30%;
}
.login_box {
  width: 200px;
  color: #ffffff;
  margin-left: 45px;
}
.btn_login {
  width: 100%;
  height: 40px;
  background: #409eff;
  border-radius: 4px;
  text-align: center;
  font-size: 16px;
  cursor: pointer;
}
</style>