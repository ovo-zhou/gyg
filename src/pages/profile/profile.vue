<template>
  <div class="top_img">
    <img src="../../assets/profile.png" alt />
    <div class="pro-title">
      <div class="pro-contain">
        <span>公司简介</span>
        <span>发展历程</span>
        <span>业务架构</span>
        <span>管理团队</span>
        <span>企业文化</span>
      </div>
    </div>
    <div class="info">
      <div class="info-contain">
        <h1>公司简介</h1>
        <p>
          重庆果园集装箱码头有限公司是重庆港务物流集团有限公司和上海国际港务股份有限公司共同投资组建的专业集装箱公司。公司成立于2013年8月30日，现有注册资本金12.55亿元，港务物流集团和上港集团持股比例分别为65%和35%。2014年11月，港务物流集团所占65%股权转让至重庆港九。</p>
          <p>公司位于重庆市两江新区，长江北岸，果园港核心区域。区位优势明显，距朝天门约30公里、距渝怀铁路鱼嘴中心站5公里、距江北国际机场15公里、绕城高速横贯港区，港区内有专用立交与重庆绕城高速相连，通过疏港大道亦可快速上达G50沪渝高速，码头后方规划建设中的港区专用铁路通过渝怀线与“中欧（重庆）”铁路大通道对接。</p>
          <p>果园集装箱码头水运条件优越，码头岸线长760米，5000吨级集装箱专用泊位6个，设计低水位在154.77米,常年水深在5米左右，是天然的深水良港。后方堆场采用两级平台设计，陆域总面积43万平方米，堆场使用面积24万平方米。</p>
          <p>果园集装箱码头功能设施完善，码头设立海关监管点和国检检验检疫场所，使得码头具备外贸集装箱作业口岸功能。依托多式联运枢纽优势，深度融入“一带一路”建设和长江经济带发展。</p>
          <p>公司将坚持以客户需求为第一导向，致力于提供科学、高效、专业的集装箱装卸以及相关的配套服务，将果园集装箱码头打造成以重庆两江新区为中心，承接西部地区与长江流域集装箱中转运输的专业化港口示范基地，为地区经济发展提供优质的公共服务平台，促进公司发展迈上新台阶，实现新跨越。</p> 
      </div>
    </div>
   <div class="licheng">
       <h1>发展历程</h1>
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
}
.pro-contain span {
  line-height: 53px;
  font-size: 16px;
  margin-left: 20px;
  cursor: pointer;
}
.info{
    width: 100%;
}
.info-contain {
    width: 700px;
    margin: 0px auto;
    padding-top: 50px;
}
.info-contain h1{
    margin-bottom: 10px;
}
.info-contain p{
    text-indent:2em
}
.licheng{
    background: url('../../assets/banner.jpg') no-repeat;
    background-size: 100% 100%;
    width: 100%;
    height: 384px;
    margin-top: 50px;
}
.licheng h1 {
    line-height: 384px;
    text-align: center;
    color: #ffffff;
}
</style>