<template>
  <div class="feedback">
    <div class="f-contain">
      <h1>在线留言</h1>
      <p>如有任何疑问，请查看我们的地址或拨打我们的电话号码或发送电子邮件给我们，我们将与您联系!</p>
      <el-form :inline="true" :model="feedback" class="demo-form-inline">
        <el-form-item>
          <el-input v-model="feedback.name" placeholder="姓名"></el-input>
        </el-form-item>
       <el-form-item>
          <el-input v-model="feedback.tel" placeholder="电话号码"></el-input>
        </el-form-item>
        <el-form-item>
          <el-input v-model="feedback.email" placeholder="邮箱"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary">提交</el-button>
        </el-form-item>
      </el-form>
      <el-input
  type="textarea"
  :rows="6"
  placeholder="反馈内容"
  v-model="textarea">
</el-input>
    </div>
  </div>
</template>

<script>
export default {
    data(){
        return{
            feedback:{
                name:'',
                tel:'',
                email:'',
                textarea:''
            }
        }
    }
};
</script>

<style scoped>
.feedback {
  width: 100%;
  /* height: 600px; */
  /* background: azure; */
  margin-top: 50px;
}
.f-contain {
  width: 720px;
  /* height: 600px; */
  margin: 0px auto;
  /* background: aqua; */
}
.f-contain h1 {
  font-family: Avenir, Helvetica, Arial, sans-serif, microsoft yahei;
  margin-bottom: 10px;
}
.f-contain p {
    margin-bottom: 10px;
}
</style>