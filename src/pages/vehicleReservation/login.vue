<template>
  <!-- 车辆预约 -->
  <el-main>
    <div class="index-items">
      <h1>车辆预约</h1>
    </div>
    <div class="body_content_center">
      <div class="intranet_login_view">
        <div class="login_center_div" v-show="showLogin">
          <div class="login_logo">
            <img src="../../assets/images/vehicleResImg/logo.png">
          </div>
          <div class="login_input_div">
            <p v-show="showTishi">{{tishi}}</p>
            <input type="text" placeholder="请输入用户名" v-model="username">
            <input type="password" placeholder="请输入密码" v-model="password">

            <!-- <select v-model="selected" placeholder="请选择用户类型" @change="getSelectedChange">
              <option disabled value>请选择用户类型</option>
              <option>货主</option>
              <option>货代</option>
              <option>船主</option>
              <option>船代</option>
              <option>内部领导</option>
            </select>-->
            <!-- <el-select v-model="selected" placeholder="请选择用户类型" @change="getSelectedChange">
              <el-option
                v-for="item in options"
                :key=item.value
                :label=item.label
                :value=item.value
              ></el-option>
            </el-select>-->

            <input type="text" placeholder="验证码" v-model="verificationCode">
          </div>
          <button v-on:click="login">登录</button>
          <div class="login_input_option">
            <span v-on:click="ToAlterPass">修改密码</span>
          </div>
        </div>

        <div class="login_center_div" v-show="showAlterPass">
          <div class="login_logo">
            <img src="../../assets/images/vehicleResImg/logo.png">
          </div>
          <div class="login_input_div">
            <!-- <h3>修改密码</h3> -->
            <p v-show="showTishi">{{tishi}}</p>
            <input type="text" placeholder="请输入用户名" v-model="newUsername">
            <input type="password" placeholder="请输入原密码" v-model="oldPassword">
            <input type="password" placeholder="请输入新密码" v-model="newPassword">
            <input type="password" placeholder="请确认密码" v-model="confirmPassword">
          </div>

          <button v-on:click="alterPass">修改密码</button>
          <div class="login_input_option">
            <span v-on:click="backLogin">返回登录</span>
          </div>
        </div>
      </div>
    </div>
  </el-main>
</template>

<script>
import { get, post } from "../../service/http.js";
import config from "../../service/utils/config.js";

export default {
  data() {
    return {
      showLogin: true,
      showAlterPass: false,
      showTishi: false,
      tishi: "",
      username: "",
      password: "",
      verificationCode: "",
      newUsername: "",
      oldPassword: "",
      newPassword: "",
      confirmPassword: "",
      options: [
        {
          value: "1",
          label: "货主"
        },
        {
          value: "2",
          label: "货代"
        },
        {
          value: "3",
          label: "船主"
        },
        {
          value: "4",
          label: "船代"
        },
        {
          value: "5",
          label: "内部领导"
        }
      ],
      selected: ""
    };
  },
  // created() {
  //   //如果没有这句代码，select中初始化会是空白的，默认选中就无法实现
  //   this.selected = this.options[0].label;
  // },
  methods: {
    ToAlterPass: function() {
      this.showAlterPass = true;
      this.showLogin = false;
    },
    login: function() {
      // import {login} from "../../../assets/vehicleResJs/login.js"
      if (this.verificationCode === "") {
        alert("请输入验证码！");
      } else if (this.username === "" || this.password === "") {
        alert("账号或密码不能为空");
        // this.showTishi=true;
        // this.tishi="账号或密码不能为空";
      } else {
        var url = config.baseurl + config.login;
        let _this = this;
        post(url, {
          LX: "UserLogin",
          username: this.username,
          password: this.password
        }).then(res => {
          if (res.errCode == "SUCCESS") {
            // this.$message({
            //   message: res.errStr
            // });
            alert(res.errStr);
            //将用户名和token放入sessionStorage
            sessionStorage.setItem("userName",resp)
            this.$router.push({name:'vehicleResHome'});
          }else{
            // this.$message({
            //   message: res.errStr
            // });
            alert(res.errStr);
          }
          console.log(url);
          console.log(res.errStr);
        });
      }
    },
    alterPass: function() {
      let _this = this;
      if(_this.newUsername===''||_this.oldPassword===''||_this.newPassword===''){
         alert("账号或密码不能为空");
      }else if(_this.newPassword!=_this.confirmPassword){
        alert("确认密码与新密码不一致");
      }else{
        var url = config.baseurl + config.login;
        post(url, {
          LX: "AlterPassword",
          newUsername: _this.newUsername,
          oldPassword: _this.oldPassword,
          newPassword:_this.newPassword,
          confirmPassword:_this.confirmPassword
        }).then(res => {
          if (res.errCode == "SUCCESS") {
            // this.$message({
            //   message: res.errStr
            // });
            alert(res.errStr+",请登录！");
            _this.showLogin=true;
            _this.showAlterPass=false;
          }else{
            // this.$message({
            //   message: res.errStr
            // });
            alert(res.errStr);
          }
          console.log(url);
          console.log(res.errStr);
        });
      }
    },
    backLogin: function() {
      this.showAlterPass = false;
      this.showLogin = true;
    }
  }
};
</script>
<style>
/* @import "../../assets/css/vehicleRescss/login.css"; */
</style>
