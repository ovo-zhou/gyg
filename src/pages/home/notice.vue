<template>
    <div class="notice">
      <div class="n-contain">
        <div class="n-title">
          <span>最新公告</span>
          <img src="../../assets/组23.png" />
        </div>
        <div class="n-fun">
          <div class="n-text">
            <div class="text-left">
              <h1>13</h1>
              <hr />
              <h2>12月</h2>
            </div>
            <div class="text-right">
              <p class="p1">文字标题文字标题文字标题文字标题</p>
              <p class="p2">文章内容文章内容文章内容文章内容文章内容文章内容文章内容文章内容文章内容文章内容</p>
            </div>
          </div>
          <div class="n-text">
            <div class="text-left">
              <h1>13</h1>
              <hr />
              <h2>12月</h2>
            </div>
            <div class="text-right">
              <p class="p1">文字标题文字标题文字标题文字标题</p>
              <p class="p2">文章内容文章内容文章内容文章内容文章内容文章内容文章内容文章内容文章内容文章内容</p>
            </div>
          </div>
          <div class="n-text">
            <div class="text-left">
              <h1>13</h1>
              <hr />
              <h2>12月</h2>
            </div>
            <div class="text-right">
              <p class="p1">文字标题文字标题文字标题文字标题</p>
              <p class="p2">文章内容文章内容文章内容文章内容文章内容文章内容文章内容文章内容文章内容文章内容</p>
            </div>
          </div>
        </div>
      </div>
    </div>
</template>
<script>
export default {
    
}
</script>
<style scoped>
.notice {
  width: 100%;
  height: 400px;
  background: rgb(252, 252, 252);
}
.n-contain {
  width: 1080px;
  height: 400px;
  margin: 0px auto;
}
.n-title {
  width: 100%;
  height: 100px;
}
.n-title span {
  font-size: 28px;
  font-family: Microsoft YaHei;
  font-weight: bold;
  color: rgba(19, 103, 170, 1);
  line-height: 100px;
  margin-right: 30px;
  border-left: 9px solid rgba(37, 119, 184, 1);
  padding-left: 20px;
}
.n-title img {
  display: inline-block;
  vertical-align: middle;
}
.n-fun {
  width: 100%;
  height: 300px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
}
.n-text {
  width: 350px;
  height: 230px;
  background: rgba(255, 255, 255, 1);
  border: 1px solid rgba(207, 207, 207, 0.29);
  box-shadow: 1px 1px 32px 0px rgba(0, 0, 0, 0.06);
  border-radius: 2px;
  display: flex;
  flex-direction: row;
}
.text-left {
  width: 100px;
  padding-top: 15px;
}
.text-right {
  width: 250px;
  padding-top: 15px;
  padding-right: 50px;
}
.text-left h1 {
  font-size: 20px;
  font-family: Microsoft YaHei;
  font-weight: bold;
  color: rgba(65, 65, 65, 1);
  text-align: center;
}
.text-left h2 {
  font-size: 14px;
  font-family: Microsoft YaHei;
  font-weight: 400;
  color: rgba(65, 65, 65, 1);
  text-align: center;
}
.text-left hr {
  margin-left: 25px;
  width: 50%;
  height: 1px;
  background-color: rgba(183, 183, 183, 1);
  border: none;
}
.p1 {
  font-size: 18px;
  font-family: Microsoft YaHei;
  font-weight: 400;
  color: rgba(65, 65, 65, 1);
  line-height: 30px;
}
.p2 {
  font-size: 14px;
  font-family: Microsoft YaHei;
  font-weight: 400;
  color: rgba(145, 145, 145, 1);
  line-height: 24px;
  margin-top: 10px;
}
</style>