<template>
  <div class="back_img">
    <div class="border">
      <div class="login_box">
        <el-form label-width="0px" :model="userform">
          <el-form-item>
            <el-input v-model="userform.username" placeholder="用户名"></el-input>
          </el-form-item>
          <el-form-item>
            <el-input v-model="userform.password" placeholder="密码" show-password></el-input>
          </el-form-item>
          <el-form-item>
            <el-select v-model="userform.identity" placeholder="请选择">
              <el-option label="员工" value="shanghai"></el-option>
              <el-option label="管理员" value="beijing"></el-option>
            </el-select>
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
export default {
  data() {
    return {
      userform: {
        username: "",
        password: "",
        identity: ""
      }
    };
  },
  methods:{
    login(){
      this.$router.push("/admin")
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
  background:#ffffff;
  width: 300px;
  padding-top: 30px;
  padding-bottom: 30px;
  border-radius: 5px;
  background-color:rgba(0,0,0,0.5);
   position: relative;
  left: 40%;
  top: 30%;
}
.login_box {
  width: 200px;
  color: #ffffff;
  margin-left: 45px ;
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