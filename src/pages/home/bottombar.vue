<template>
    <div>
<div class="baseline"></div>
    <div class="Bottombar">
      <div class="b-contain">
        <div class="b-left">
          <div class="b-left-top">
            <div class="spanset">
              <span>首页</span>
              <span>业务流程</span>
              <span>客户查询</span>
            </div>
            <div class="spanset">
              <span>行业动态</span>
              <span>车辆预约</span>
              <span>联系我们</span>
            </div>
          </div>
          <div class="b-left-down">
            <p>电话：023-80888008</p>
            <p>地址：重庆市江北区鱼嘴镇东风路146号</p>
          </div>
        </div>
        <div class="b-right">
          <img src="../../assets/qrcode.png" />
          <img src="../../assets/qrcode.png" />
        </div>
      </div>
      <div class="webinfo">
        <h1>渝ICP备18002813号</h1>
      </div>
    </div>
    </div>
</template>
<script>
export default {
    
}
</script>
<style scoped>
.baseline {
  width: 100%;
  height: 16px;
  background: rgba(0, 136, 181, 1);
}
.Bottombar {
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
.b-left {
  width: 400px;
  height: 250px;

  margin-left: 100px;
}
.b-right {
  width: 250px;
  height: 250px;
}
.b-left-top {
  width: 400px;
  height: 100px;

  padding-top: 25px;
}
.b-left-down {
  width: 400px;
  height: 100px;

  padding-top: 25px;
}
.spanset {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 10px;
}
.spanset span {
  width: 70px;
  font-size: 14px;
  font-family: Microsoft YaHei;
  font-weight: 400;
  color: rgba(234, 234, 234, 1);
}
.b-left-down p {
  font-size: 14px;
  font-family: Microsoft YaHei;
  font-weight: 400;
  color: rgba(234, 234, 234, 1);
  margin-bottom: 10px;
}
.b-right img {
  width: 90px;
  height: 90px;
  position: relative;
  top: 80px;
  margin-right: 20px;
}
.webinfo {
  width: 100%;
  height: 37px;
}
.webinfo h1 {
  text-align: center;
  font-size: 14px;
  font-family: Microsoft YaHei;
  font-weight: 400;
  color: rgba(183, 183, 183, 1);
}
</style>