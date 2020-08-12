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
          <p> 公司位于重庆市两江新区，长江北岸，果园港核心区域。果园集装箱码头水运条件优越，码头岸线长760米，5000吨级集装箱专用泊位6个，设计低水位在154.77米,常年水深在5米左右，是天然的深水良港。果园集装箱码头功能设施完善，码头设立海关监管点和国检检验检疫场所，使得码头具备外贸集装箱作业口岸功能。依托多式联运枢纽优势，深度融入“一带一路”建设和长江经济带发展。</p>
          <p>公司将坚持以客户需求为第一导向，致力于提供科学、高效、专业的集装箱装卸以及相关的配套服务，将果园集装箱码头打造成以重庆两江新区为中心，承接西部地区与长江流域集装箱中转运输的专业化港口示范基地，为地区经济发展提供优质的公共服务平台，促进公司发展迈上新台阶，实现新跨越。</p>
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
  height: 360;
  /* background: aqua; */
  margin-top: 50px;
}
.info-contain {
  width: 1080px;
  height: 360px;
  margin: 0px auto;
  /* background: blueviolet; */
}
.info-contain img {
  width: 560px;
  height: 360px;
}
.text{
  width: 450px;
  height: 360px;
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