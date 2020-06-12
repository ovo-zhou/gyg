<template>
  <div class="news">
    <div class="news_contain">
      <div class="post_head">
        <span class="post_title">行业动态</span>
        <span class="more">全部动态</span>
      </div>
      <div class="news_list">
        <div class="first">
          <img src="../../assets/组17.png" alt />
          <p>新冠肺炎疫情防控专题网站</p>
          <span>2020-6-11</span>
        </div>
        <div class="other">
          <!-- <img src="" alt /> -->
          <p class="p1">第六届“互联网+”大学生创新创业大赛参赛动员会召开</p>
          <p class="p2">6月10日，我校线上召开第六届“广东工研院杯”创新创业大赛暨中国国际“互联网+”大学生创新创业大赛参赛动员会</p>
          <span>2020-6-12</span>
        </div>
        <div class="other">
          <!-- <img src="" alt /> -->
          <p class="p1">第六届“互联网+”大学生创新创业大赛参赛动员会召开</p>
          <p class="p2">6月10日，我校线上召开第六届“广东工研院杯”创新创业大赛暨中国国际“互联网+”大学生创新创业大赛参赛动员会</p>
          <span>2020-6-12</span>
        </div><div class="other">
          <img src="../../assets/组17.png" alt />
          <p class="p1">第六届“互联网+”大学生创新创业大赛参赛动员会召开</p>
          <p class="p2">6月10日，我校线上召开第六届“广东工研院杯”创新创业大赛暨中国国际“互联网+”大学生创新创业大赛参赛动员会</p>
          <span>2020-6-12</span>
        </div><div class="other">
          <img src="../../assets/组17.png" alt />
          <p class="p1">第六届“互联网+”大学生创新创业大赛参赛动员会召开</p>
          <p class="p2">6月10日，我校线上召开第六届“广东工研院杯”创新创业大赛暨中国国际“互联网+”大学生创新创业大赛参赛动员会</p>
          <span>2020-6-12</span>
        </div><div class="other">
          <img src="../../assets/组17.png" alt />
          <p class="p1">第六届“互联网+”大学生创新创业大赛参赛动员会召开</p>
          <p class="p2">6月10日，我校线上召开第六届“广东工研院杯”创新创业大赛暨中国国际“互联网+”大学生创新创业大赛参赛动员会</p>
          <span>2020-6-12</span>
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
  height: 772px;
  /* background: aquamarine; */
}
.news_contain {
  width: 1080px;
  height: 772px;
  /* background: blueviolet; */
  margin: 0px auto;
}
.post_head {
  width: 100%;
  height: 56px;
  /* background: yellow; */
}
.post_title {
  line-height: 56px;
  font-size: 22px;
  font-weight: normal;
  color: #272727;
}
.more {
  line-height: 30px;
  font-size: 14px;
  color: #fff;
  background: #1367aa;
  float: right;
  margin-top: 13px;
  margin-bottom: 13px;
  margin-right: 20px;
  width: 100px;
  text-align: center;
}
.news_list {
  width: 100%;
  height: 716px;
  /* background: blueviolet; */
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
}
.first {
  width: 307px;
  height: 358px;
  /* background: tomato; */
  border-top: 3px solid #1367aa;
}
.first img {
  width: 307px;
  height: 194px;
}
.first p {
  font-size: 16px;
}
.first span {
  font-size: 12px;
  margin-top: 5px;
  color: #1367aa;
}
.other {
  width: 307px;
  height: 358px;
  /* background: tomato; */
  border-top: 3px solid #1367aa;
}
.other img {
  width: 307px;
  height: 144px;
}
.p1 {
  font-size: 16px;
  margin-top: 10px;
}
.p2 {
  font-size: 12px;
  color: #717171;
  margin-top: 15px;
}
.other span {
  font-size: 12px;
  margin-top: 5px;
  color: #1367aa;
}
</style>