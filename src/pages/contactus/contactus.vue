<template>
  <div>
    <img src="../../assets/contact.png" />
    <div class="tab">
      <div class="tabcontain">
        <!-- <div class="item"><router-link to="/contactus/contactInfo">联系方式</router-link></div>
        <div class="item"><router-link to="/contactus/feedback">在线留言</router-link></div> -->
        <div class="item" @click="toInfo"><span >联系方式</span></div>
        <div class="item" @click="toFeedback"><span >在线留言</span></div>
      </div>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  methods:{
    toInfo(){
      this.$router.push('/contactus/contactInfo')
    },
    toFeedback(){
      this.$router.push('/contactus/feedback')

    }
  }
};
</script>

<style scoped>
img {
  width: 100%;
}
.tab{
  width: 100%;
  height: 53px;
  background: #fbfbfb;
}
.tabcontain{
  width: 1080px;
  height: 53px;
  margin: 0px auto;
  background: #fbfbfb;
}
.item{
  float: left;
}
.item span{
   line-height: 53px;
  font-size: 16px;
  margin-left: 10px;
  margin-right: 10px;
  text-decoration:none;
  color:#333;
}
.item:hover{
  background: #0e68b1;
  color: #fbfbfb;
  cursor: pointer;
}
</style>