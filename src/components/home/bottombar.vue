<template>
  <div class="bottombar">
    <div class="line"></div>
    <div class="bar">
      <div class="b-contain">
        <div class="c-link">
          <h3>常用链接</h3>
          <div class="fun">
            <div class="fun_list" @click="toHomepage">
              <img src="../../assets/shouye.png" alt />
              <span>首页</span>
            </div>
            <div class="fun_list" @click="toVehicle">
              <img src="../../assets/clyy_icon.png" alt />
              <span>车辆预约</span>
            </div>
            <div class="fun_list" @click="toDynamic">
              <img src="../../assets/hydt_icon.png" alt />
              <span>行业动态</span>
            </div>
            <div class="fun_list" @click="toQuery">
              <img src="../../assets/khcx.png" alt />
              <span>客户查询</span>
            </div>
            <div class="fun_list" @click="business">
              <img src="../../assets/ywlc_icon.png" alt />
              <span>业务流程</span>
            </div>
            <div class="fun_list" @click="contactus">
              <img src="../../assets/lxwm.png" alt />
              <span>联系我们</span>
            </div>
          </div>
        </div>

        <div class="info">
          <img src="../../assets/newlogo1.png" alt />
        </div>

        <div class="code">
          <h3>关注我们</h3>
          <div class="focus">
            <div class="f-item" id="dropdown">
              <!-- <img src="../../assets/wx.png" alt />
              <span>官方微信</span> -->
              <div class="content"><img src="../../assets/wxcode.jpg" ></div>
            </div>
            <!-- <div class="f-item">
              <img src="../../assets/wb.png" alt=""><span>官方微博</span>
            </div>-->
            <!-- <div class="f-item">
              <img src="../../assets/yj.png" alt />
              <span>电子邮件</span>
            </div>-->
            <!-- <el-tooltip class="item" effect="light" content="27873534@QQ.COM" placement="bottom">
              <div class="f-item">
                <img src="../../assets/yj.png" alt />
                <span>电子邮件</span>
              </div>
            </el-tooltip> -->
            <!-- <div class="f-item">
              <img src="../../assets/gw.png" alt=""><span>网站地图</span>
            </div>-->
          </div>
        </div>
      </div>
      <h1 class="record">Copyright &copy; 2019 - 2020 重庆果园港埠有限公司、重庆果园件散货码头有限公司 版权所有</h1>
    </div>
  </div>
</template>
<script>
export default {
  methods: {
    toHomepage() {
      this.$router.push("/homepage");
      document.body.scrollIntoView();
    },
    toVehicle() {
      this.$router.push("/vehicle");
      document.body.scrollIntoView();
    },
    toDynamic() {
      this.$router.push("/dynamic");
      document.body.scrollIntoView();
    },
    toQuery() {
      this.$router.push("/query");
      document.body.scrollIntoView();
    },
    business() {
      this.$router.push("/business");
      document.body.scrollIntoView();
    },
    contactus() {
      this.$router.push("/contactus");
      document.body.scrollIntoView();
    },
  },
};
</script>
<style scoped>
.bottombar {
  width: 100%;
  height: 300px;
  margin-top: 50px;
}
@media screen and (max-width: 1000px) {
  .bottombar {
    width: 1080px;
  }
}
.line {
  width: 100%;
  height: 16px;
  background: rgba(0, 136, 181, 1);
}
.bar {
  width: 100%;
  height: 287px;
  background: url("../../assets/footer2.png");
  background-size: 100% 100%;
}
.b-contain {
  width: 1080px;
  height: 250px;
  margin: 0px auto;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}
.record {
  font-size: 14px;
  font-family: Microsoft YaHei;
  font-weight: 400;
  color: rgba(183, 183, 183, 1);
  text-align: center;
  margin-top: 10px;
}
.c-link {
  margin-top: 50px;
  width: 500px;
  /* background: chartreuse; */
}
.c-link h3 {
  margin-bottom: 20px;
  color: rgba(234, 234, 234, 1);
}
.fun {
  width: 400px;
  height: 100px;
  /* background: aqua; */
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
}
.fun_list {
  height: 30px;
  line-height: 30px;
  width: 130px;
  /* background: chartreuse; */
  cursor: pointer;
}
.fun img {
  width: 20px;
  height: 20px;
  vertical-align: middle;
}
.fun span {
  font-size: 16px;
  font-family: Microsoft YaHei;
  font-weight: 400;
  color: rgba(234, 234, 234, 1);
  margin-left: 10px;
  line-height: 30px;
}
.info {
  width: 360px;
  height: 150px;
  margin-top: 90px;
  /* background: chartreuse; */
}
.info img {
  width: 150px;
  height: 90px;
  margin-left: 40px;
}
.code {
  width: 360px;
  height: 150px;
  margin-top: 50px;
  /* background: chartreuse; */
}
.code h3 {
  color: rgba(234, 234, 234, 1);
  margin-bottom: 20px;
}
.focus {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  height: 100px;
}
.f-item {
  height: 30px;
  line-height: 30px;
  width: 150px;
}
.f-item img {
  width: 20px;
  height: 20px;
  vertical-align: middle;
}
.f-item span {
  font-size: 16px;
  font-family: Microsoft YaHei;
  font-weight: 400;
  color: rgba(234, 234, 234, 1);
  margin-left: 10px;
  line-height: 30px;
}
.content{
  /* display: none; */
}
.content img{
  width: 100px;
  height: 100px;
}
#dropdown:hover .content{
   display: block;
}
</style>