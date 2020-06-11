<template>
  <div class="news">
    <div class="news_contain">
      <div class="new1">
          <div class="new1_title_img">
              <img src="../../assets/组17.png" alt="">
          </div>
          <div class="new1_title">
              <h1>欢迎某某领导实地考察欢迎某某领导实地考察欢迎某某领导实地考察欢迎某某领导实地考察</h1>
              <h4>2020-6-1</h4>
          </div>
      </div>
      <div class="new2">
          <div class="new2_title">
              <h1>重大新闻</h1>
              <h4>2020-6-10</h4>
              <p>哈哈哈啊哈哈哈哈哈哈啊哈哈哈哈哈哈啊哈哈哈哈哈哈啊哈哈哈哈哈哈啊哈哈哈哈哈哈啊哈哈哈哈哈哈啊哈哈哈哈哈哈啊哈哈哈哈哈哈啊哈哈哈</p>
          </div>
          <div class="new2_title_img">
              <img src="../../assets/组19.png" alt="">
          </div>
      </div>
      <div class="new3">
          <div class="new3_title_img">
              <img src="../../assets/组17.png" alt="">
          </div>
          <div class="new3_title">
              <h1>欢迎某某领导实地考察欢迎某某领导实地考察欢迎某某领导实地考察欢迎某某领导实地考察</h1>
              <h4>2020-6-1</h4>
          </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {};
</script>
<style scoped>
.news{
    width: 100%;
    /* background: yellow; */
    margin-top: 80px;
}
.news_contain{
    width: 1080px;
    margin: 0px auto;
    overflow: hidden;
}
.new1{
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    margin-bottom: 40px;
}
.new1_title_img{
    width: 220px;
    height: 200px;
    transform:skew(-10deg,0deg);
    overflow: hidden;
    margin-left: -20px;
    /* background: turquoise; */
}
.new1_title_img img{
    width: 240px;
    height: 200px;
    transform:skew(10deg,0deg);
}
.new1_title{
    width: 750px;
    /* background: tomato; */
    margin-left: 100px;
    padding-top: 40px;
}
.new1_title h1{
    font-size: 30px;
    color: #2a2e2e;
    margin-bottom: 10px;
}
.new1_title h4{
    font-size: 16px;
    color: #5f6464;
}
.new2{
    width: 1040px;
    overflow: hidden;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin-bottom: 40px;
}
.new2_title{
    width: 400px;
    padding-top: 100px;
    margin-left: 50px;
}
.new2_title h1{
    font-size: 30px;
    color: #2a2e2e;
    margin-bottom: 10px;
}
.new2_title h4{
    font-size: 16px;
    color: #5f6464;
    margin-bottom: 30px;
}
.new2_title p{
    font-size: 20px;
    color: #5f6464;
}
.new2_title_img{
    width: 500px;
    height: 400px;
    overflow: hidden;
    transform:skew(-10deg,0deg);
    /* background: violet; */
    margin-right: -40px;
}
.new2_title_img img{
    width: 540px;
    height: 400px;
    transform:skew(10deg,0deg);
    margin-left: -40px;
}
.new3{
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
}
.new3_title_img{
    width: 220px;
    height: 200px;
    transform:skew(-10deg,0deg);
    overflow: hidden;
    margin-left: -20px;
    /* background: turquoise; */
}
.new3_title_img img{
    width: 240px;
    height: 200px;
    transform:skew(10deg,0deg);
}
.new3_title{
    width: 750px;
    /* background: tomato; */
    margin-left: 100px;
    padding-top: 40px;
}
.new3_title h1{
    font-size: 30px;
    color: #2a2e2e;
    margin-bottom: 10px;
}
.new3_title h4{
    font-size: 16px;
    color: #5f6464;
}
</style>