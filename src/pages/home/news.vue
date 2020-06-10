<template>
  <div class="news">
    <div class="newcontain">
      <div class="title">
        <h1>新闻动态</h1>
        <h2>News infomation</h2>
      </div>
      <div class="info">
        <div class="info_left">
          <img src="../../assets/meeting.png" />
          <div class="detail">
            <div>
              <p class="p1">果园集装箱场桥智能化建设取得新进展</p>
              <p class="p2">在施工单位及该司多个部门的通力合作与配合下，经过安装、调试及现场试运行，此次改造的所有功能及技术指标均达到预期目标，较好地满足了码头作业生产对设备运行安全性和可靠性的要求，也进一步提升了港区的智能化水平，改善了现场司机的作业环境。</p>
            </div>
            <div>
              <h6 class="date">2020-5-23</h6>
              <div class="gobtn"><span>前往</span><img src="../../assets/to.png" alt=""></div>
            </div>
          </div>
        </div>
        <div class="info_right">
          <div class="new">
            <img src="../../assets/news.jpg" alt />
            <p>果集司开展2020年度防风应急演练竞赛</p>
          </div>
          <div class="new">
            <img src="../../assets/news.jpg" alt />
            <p>攀枝花市政协副主席、民进市委主委周治端一行到果园港参观考察</p>
          </div>
          <div class="more"><h3>更多行业动态</h3><img src="../../assets/go.png" alt=""></div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {};
</script>
<style scoped>
.news {
  width: 100%;
  height: 400px;
  background:#fcfcfc;
}
.newcontain {
  width: 1080px;
  height: 400px;
  margin: 0 auto;
  background: #fcfcfc;
}
.title {
  width: 100%;
  height: 70px;
  background:#fcfcfc;
  padding-top: 30px;
}
.title h1 {
  font-size: 20px;
  color: #333;
  font-weight: 400;
  text-align: center;
}
.title h2 {
  margin-top: 6px;
  color: #999;
  font-size: 14px;
  text-align: center;
}
.info {
  width: 100%;
  height: 300px;
  display: flex;
  flex-direction: row;
}
.info_left {
  width: 600px;
  height: 250px;
  margin-top: 25px;
  margin-right: 25px;
  margin-left: 25px;
  display: flex;
  flex-direction: row;
  background:rgba(255,255,255,1);
border:1px solid rgba(207, 207, 207, 0.29);
box-shadow:1px 1px 32px 0px rgba(0, 0, 0, 0.06);
}
.info_left img {
  height: 250px;
  width: 200px;
}
.detail {
  width: 300px;
  height: 200px;
  margin-left: 50px;
  margin-top: 25px;
  display: flex;
  flex-direction: column;
  justify-content:space-between ;
}
.p1 {
  font-size: 18px;
  font-family: Microsoft YaHei;
  font-weight: 400;
  color: #2577B8;
}
.p2 {
  font-size: 14px;
  font-family: Microsoft YaHei;
  font-weight: 400;
  color: rgba(145, 145, 145, 1);
  display: -webkit-box;
	-webkit-box-orient: vertical;
	-webkit-line-clamp: 3;
	overflow: hidden;
  text-indent: 2em;
}
.date{
   font-size: 14px;
  font-family: Microsoft YaHei;
  font-weight: 400;
  color: rgba(145, 145, 145, 1);
}
.gobtn{
   height: 25px;
  width: 80px;
border-radius: 12px;
border: 1px solid  #2577B8;
margin-top: 5px;
}
.gobtn span{
  margin-left: 10px;
  margin-right: 10px;
 font-size:18px;
font-family:Microsoft YaHei;
font-weight:400;
color:#2577B8 ;
}
.gobtn img{
  height: 16px;
  width: 16px;
}
.info_right {
  display: flex;
  flex-direction: column;
  height: 250px;
  margin-top: 25px;
  width: 400px;
}
.info_right div {
  width: 400px;
  height: 90px;
  margin-bottom: 10px;
}
.more{
  display:flex;
  flex-direction: row;
  padding-top: 10px;
}
.more h3{
  color: #2577B8;
}
.more img{
 height: 25px;
}
.new {
  display: flex;
  flex-direction: row;
  background:rgba(255,255,255,1);
 border:1px solid #2577B8;
 box-shadow:1px 1px 32px 0px rgba(0, 0, 0, 0.06);
}
.new img {
  width: 140px;
  height: 90px;
}
.new p {
  font-size: 18px;
  font-family: Microsoft YaHei;
  font-weight: 400;
  color: #2577B8;
  margin-left: 20px;
  margin-top: 10px;
}
</style>