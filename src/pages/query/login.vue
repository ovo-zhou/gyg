<template>
  <div>
    <el-form ref="loginForm" :model="form" label-width="80px" class="login-box">
      <h3 class="login-title">客户登录</h3>
      <el-form-item label="账号" prop="Account">
        <el-input type="text" placeholder="请输入账号" v-model="form.Account" />
      </el-form-item>
      <el-form-item label="密码" prop="PassWord">
        <el-input
          type="password"
          placeholder="请输入密码"
          v-model="form.PassWord"
        />
      </el-form-item>
      <el-form-item label="登录方式">
        <el-select
          v-model="form.loginLX"
          placeholder="请选择"
          style="width: 270px"
        >
          <el-option label="客户查询" value="客户查询"> </el-option>
          <el-option label="劳务查询" value="劳务查询"> </el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="验证码" prop="YZM">
        <el-row>
          <el-col :span="14">
            <el-input placeholder="请输入验证码" v-model="form.YZM" />
          </el-col>
          <el-col :span="10">
            <img
              :src="imgData"
              id="idPic"
              style="width: 110px; height: 40px"
              @click="updateImg"
            />
          </el-col>
        </el-row>
      </el-form-item>

      <el-form-item>
        <el-button type="primary" @click="login">登录</el-button>
        <el-button @click="cancel">取消</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import { post } from "../../service/http";
import host from "../../libs/utils";
import { dateToString } from "../../assets/vehicleResJs/common.js";
export default {
  data() {
    return {
      form: {
        Account: "",
        PassWord: "",
        YZM: "",
        loginLX: "客户查询",
      },
      imgData: "",
      nowtime: "",
    };
  },
  mounted() {
    //初始化验证码
    this.nowtime = new Date().getTime() * 1000;
    var url = host.host1 + "updateVerifyCode.ashx";
    var data = { SESSIONID: this.nowtime };
    var promise = post(url, data);
    promise.then((v) => {
      if (v.errCode === "FAIL" || v.errCode === "SUCCESS") {
        this.imgData = "data:image/jpg;base64," + v.errStr;
      }
    });
  },
  methods: {
    cancel() {
      this.$router.push("/homepage");
    },
    //点击更新验证码
    updateImg() {
      var url = host.host1 + "updateVerifyCode.ashx";
      var data = { SESSIONID: this.nowtime };
      var promise = post(url, data);
      promise.then((v) => {
        if (v.errCode === "FAIL" || v.errCode === "SUCCESS") {
          this.imgData = "data:image/jpg;base64," + v.errStr;
        }
      });
    },
    login() {
      if (this.form.loginLX == "客户查询") {
        this.loginClient();
      } else {
        this.loginWork();
      }
    },
    //劳务公司登录
    loginWork() {
      if (this.form.Account === "" || this.form.PassWord === "") {
        this.$message.error("用户名或密码不能为空");
        return;
      }
      if (this.form.YZM === "") {
        this.$message.error("验证码不能为空");
        return;
      }
      let url = host.host1 + "login.ashx";
      var data = {
        Account: this.form.Account,
        PassWord: this.form.PassWord,
        YZM: this.form.YZM,
        SESSIONID: this.nowtime,
      };
      post(url, data).then((res) => {
        if (res.errCode === "SUCCESS") {
          if (res.data[0]["DeptId"] < 81 || res.data[0]["DeptId"] > 99) {
            this.$message.error("非劳务公司账号！");
            return;
          }
          let user = {
            DeptId: "",
            DeptName: "",
            Yhbh: "",
            XM: "",
          };
          user.DeptId = res.data[0]["DeptId"];
          user.DeptName = res.data[0]["DeptName"];
          user.Yhbh = res.data[0]["Yhbh"];
          user.XM = res.data[0]["XM"];
          sessionStorage.removeItem("clientUser");//清除客户登录信息
          sessionStorage.setItem("lwuser", JSON.stringify(user));
          this.$store.commit("changeMessage", "欢迎 " + user.XM);//更改vuex中的登录信息
          this.$store.commit("changeState",true);//改变登录状态
          this.$router.push("/lwcx");
        } else if (res.errCode === "FAIL") {
          this.$message.error(res.errStr);
        }
      });
    },
    loginClient() {
      if (this.form.Account === "" || this.form.PassWord === "") {
        this.$message.error("用户名或密码不能为空");
        return;
      }
      if (this.form.YZM === "") {
        this.$message.error("验证码不能为空");
        return;
      }
      var url = host.host4 + "login.ashx";
      var data = {
        Account: this.form.Account,
        PassWord: this.form.PassWord,
        YZM: this.form.YZM,
        SESSIONID: this.nowtime,
        YHLX: "0",
      };
      var promise = post(url, data);
      promise.then((v) => {
        // console.log("客户登录", v);
        if (v.errCode === "SUCCESS") {
          let KHQC = v.data[0]["KHQC"];
          let YHBH = v.data[0]["Yhbh"];
          let LOGINTIME = dateToString(new Date());
          let clientuser = {
            KHQC: "",
            YHBH: "",
            LOGINTIME: "",
          };
          clientuser.KHQC = KHQC;
          clientuser.YHBH = YHBH;
          clientuser.LOGINTIME = LOGINTIME;
          sessionStorage.removeItem("lwuser");
          sessionStorage.setItem("clientUser", JSON.stringify(clientuser));
          this.$store.commit("changeMessage", "欢迎 " + KHQC);
          this.$store.commit("changeState",true);//改变登录状态
          if (typeof this.$route.query.tourl == "undefined") {
            this.$router.push("/homepage");
          } else {
            this.$router.push(this.$route.query.tourl);
          }
        } else if (v.errCode === "FAIL") {
          this.$message.error(v.errStr);
        }
      });
    },
  },
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