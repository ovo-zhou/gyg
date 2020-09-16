<template>
  <div class="top_img">
    <img src="../../assets/profile.png" alt />
    <div class="pro-title">
      <div class="pro-contain">
        <div class="span-text"><a href="#jianjie">企业简介</a></div>
        <div class="span-text"><a href="#jiagou">企业架构</a></div>
      </div>
    </div>
    <div class="info" id="jianjie">
      <div class="info-contain">
        <img src="../../assets/profile.jpg" alt />
        <div class="text">
          <h2>企业简介</h2>
          <p>重庆果园港埠有限公司（重庆果园件散货码头有限公司）位于重庆市两江新区，处于连接长江经济带和“一带一路”铁水联运的关键节点，是国家级水、公、铁联运物流枢纽港，公司总资产51.3亿元，注册资本17.88亿元，现有码头作业区5000吨级泊位7个，设计低水位在154.77米，年设计通过能力超过2000万吨；铁路作业区规划建设15条铁路线，目前已建成13条，年设计通过能力超过2000万吨，港区铁路专用线直接连通国铁运输网。目前果园港已成为西南片区最大的铁水联运枢纽港。</p>
          <p>公司建有现代化的大型散货装卸系统，配备的折返式翻车机效率达到国内领先水平。具有完备的环保设施设备，港区覆盖有3公里长防风抑尘网，配有污水处理系统及环境监测设备，符合国家环保标准。公司致力于打造管控一体化，采用互联网+、物联网等技术对各生产要素、运行环境进行实时精确、动态智能、安全规范的管理。</p>
          <p>公司坚持科学发展、创新发展、绿色发展的经营理念，充分践行“为客户创造价值，为自己赢的市场”的经营宗旨，全力打造煤炭、铁矿石和钢材市场，以实现企业高质量发展，助力长江经济带建设。</p>
        </div>
      </div>
    </div>
    <div class="framework" id="jiagou"> 
      <div class="f-contain">
        <h1>企业架构</h1>
        <img src="../../assets/jiagou.png" alt="">
      </div>
    </div> 
  </div>
</template>
<script>
export default {};
</script>
<style scoped>
* {
  margin: 0px;
  padding: 0px;
}
.top_img img {
  width: 100%;
}
@media screen and (max-width: 1000px)
{
.top_img img{ width:1080px; }
}
.pro-title {
  width: 100%;
  background: #fbfbfb;
  height: 53px;
}
.pro-contain {
  width: 1080px;
  margin: 0px auto;
  background: #fbfbfb;
  height: 53px;
  display: flex;
  flex-direction: row;
}
.span-text a {
  line-height: 53px;
  font-size: 16px;
  margin-left: 10px;
  margin-right: 10px;
  text-decoration:none;
  color:#333;
}
.span-text:hover {
  background: #0e68b1;
  color: #fbfbfb;
  cursor: pointer;
}
.info {
  width: 100%;
  height: 500px;
  /* background: aqua; */
  margin-top: 50px;
}
.info-contain {
  width: 1080px;
  height: 500px;
  margin: 0px auto;
  /* background: blueviolet; */
}
.info-contain img {
  margin-top: 70px;
  width: 560px;
  height: 360px;
}
.text{
  width: 450px;
  height: 500px;
  float: right;
  /* padding-top: 20px; */
}
.text h2{
  margin-bottom: 10px;
}
.text p{
  text-indent:2em;
  line-height: 25px;
}
.framework{
width: 100%;

  /* background: yellow; */
  margin-top: 50px;
}
.f-contain{
width: 1080px;

  /* background: tomato ; */
  margin: 0px auto;
}
.f-contain h1{
  border-bottom: 2px solid #0e68b1;
  font-family: Avenir, Helvetica, Arial, sans-serif, microsoft yahei;
} 
.f-contain img{
  width: 100%;
  height: 800px;
  margin-top: 30px;
}
</style>