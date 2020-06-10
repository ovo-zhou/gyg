<template>
  <div class="bottombar">
    <div class="line"></div>
    <div class="bar">
      <div class="b-contain">
        <div class="fun">
          <span>首页</span>
          <span>车辆预约</span>
          <span>行业动态</span>
          <span>客户查询</span>
          <span>业务流程</span>
          <span>联系我们</span>
        </div>
        <div class="info">
          <img src="../../assets/图层6.png" alt />
          <h1 class="tel">电话：023-80888008</h1>
          <h1>地址：重庆市江北区鱼嘴镇东风路146号</h1>
        </div>
        <div class="code">
          <img class="code1" src="../../assets/qrcode.png" alt />
          <img src="../../assets/qrcode.png" alt />
        </div>
      </div>
      <h1 class="record">渝ICP备18002813号</h1>
    </div>
  </div>
</template>
<script>
export default {};
</script>
<style scoped>
.bottombar {
  width: 100%;
  height: 300px;
}
.line {
  width: 100%;
  height: 16px;
  background: rgba(0, 136, 181, 1);
}
.bar {
  width: 100%;
  height: 287px;
  background: rgba(0, 53, 96, 1);
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
.fun {
  width: 360px;
  height: 150px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;

  margin-top: 50px;
}
.fun span {
  width: 100px;
  height: 50px;
  margin-left: 80px;
  font-size: 14px;
  font-family: Microsoft YaHei;
  font-weight: 400;
  color: rgba(234, 234, 234, 1);
}
.info {
  width: 360px;
  height: 150px;
  margin-top: 50px;
}
.info img {
  margin-left: 130px;
}
.info h1 {
  font-size: 14px;
  font-family: Microsoft YaHei;
  font-weight: 400;
  color: rgba(234, 234, 234, 1);
  text-align: center;
}
.tel {
  margin-top: 40px;
}
.code {
  width: 360px;
  height: 150px;
  margin-top: 50px;
}
.code img {
  width: 80px;
  height: 80px;
  margin-top: 30px;
  margin-right: 10px;
}
.code1 {
  margin-left: 95px;
}
</style>