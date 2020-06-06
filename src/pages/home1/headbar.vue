<template>
  <div>
    <div class="selectbar"><span @click="toHome">主页版式一</span><span @click="toHome1">主页版式二</span></div>
    <div class="top">
      <div class="top_contain">
        <div>
          <span class="span1">欢迎来到重庆果园港件散货码头有限公司！</span>
        </div>
        <div class="contain_right">
          <div class="tel">
            <img class="icon1" src="../../assets/2.png" />
            <span class="span2">023-80888008</span>
          </div>
          <div>
            <img class="icon2" src="../../assets/1.png" />
            <span class="span3">客户登录</span>
          </div>
        </div>
      </div>
    </div>
    <div class="tabbar">
      <div class="contain"   :style="{backgroundImage: 'url(' + curimg + ')' }">
        <div class="menu_contain">
          <div>
            <img class="icon3" src="../../assets/图层6.png" />
          </div>
          <div class="tab">
            <div class="tab_item">
              <h3>首页</h3>
              <h4>home</h4>
            </div>
            <div class="tab_item">
              <h3>行业动态</h3>
              <h4>Dynamic</h4>
            </div>
            <div class="tab_item">
              <h3>电子商务</h3>
              <h4>e-Commerce</h4>
            </div>
            <div class="tab_item">
              <h3>业务流程</h3>
              <h4>Business</h4>
            </div>
            <div class="tab_item">
              <h3>车辆预约</h3>
              <h4>Vehicle</h4>
            </div>
            <div class="tab_item">
              <h3>客户查询</h3>
              <h4>Query</h4>
            </div>
            <div class="tab_item">
              <h3>联系我们</h3>
              <h4>Contact us</h4>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- <div class="back_img"  :style="{backgroundImage: 'url(' + curimg + ')' }">
      <div class="menu_tab">
        <div class="menu_contain">
          <div>
            <img class="icon3" src="../../assets/图层6.png" />
          </div>
          <div class="tab">
            <div class="tab_item">
              <h3>首页</h3>
              <h4>home</h4>
            </div>
            <div class="tab_item">
              <h3>行业动态</h3>
              <h4>Dynamic</h4>
            </div>
            <div class="tab_item">
              <h3>电子商务</h3>
              <h4>e-Commerce</h4>
            </div>
            <div class="tab_item">
              <h3>业务流程</h3>
              <h4>Business</h4>
            </div>
            <div class="tab_item">
              <h3>车辆预约</h3>
              <h4>Vehicle</h4>
            </div>
            <div class="tab_item">
              <h3>客户查询</h3>
              <h4>Query</h4>
            </div>
            <div class="tab_item">
              <h3>联系我们</h3>
              <h4>Contact us</h4>
            </div>
          </div>
        </div>
      </div>
    </div> -->
  </div>
</template>
<script>
import img1 from '../../assets/back1.jpg'
import img2 from '../../assets/back2.jpg'
import img3 from '../../assets/culture.png'
export default {
  created() {
    window.setInterval(this.change,3000)
  },
  data() {
    return {
      img:[img1,img2,img3],
      curimg:img1
    };
  },
  methods: {
   change(){
     var i=Math.floor(Math.random()*3);
     this.curimg=this.img[i];
   },
   toHome(){
     this.$router.push('/homepage')
   },
   toHome1(){
     this.$router.push('/homepage1')
   },
  }
};
</script>
<style scoped>
.selectbar{
  width: 1080px;
  margin:  0px auto;
}
.selectbar span{
  color: red;
  margin-right: 50px;
  font-size: 3em;
}
.selectbar span:hover{
  cursor: pointer;
}
.top {
  width: 100%;
  height: 50px;
  background: rgba(255, 255, 255, 1);
}
.top_contain {
  margin: 0px auto;
  background: rgba(255, 255, 255, 1);
  width: 1080px;
  height: 50px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}
.contain_right {
  display: flex;
  flex-direction: row;
  margin-right: 30px;
}
.span1 {
  line-height: 50px;
  font-size: 14px;
  font-family: Microsoft YaHei;
  font-weight: 400;
  color: rgba(88, 88, 88, 1);
  margin-left: 30px;
}
.span2 {
  line-height: 50px;
  font-size: 14px;
  font-family: Microsoft YaHei;
  font-weight: 400;
  color: rgba(68, 68, 68, 1);
  margin-left: 5px;
}
.span3 {
  line-height: 50px;
  font-size: 14px;
  font-family: Microsoft YaHei;
  font-weight: 400;
  color: rgba(0, 64, 110, 1);
  margin-left: 5px;
}
.icon1 {
  display: inline-block;
  vertical-align: middle;
}
.icon2 {
  display: inline-block;
  vertical-align: middle;
}
.tel {
  margin-right: 30px;
}
.tabbar{
   width: 100%;
  height: 550px;
}
.contain{
  width: 1080px;
  height: 550px;
  margin: 0px auto;
  background-image: url(../../assets/culture.png);
  background-repeat: no-repeat;
  background-size: 100% 100%;
  -moz-background-size: 100% 100%;
}
.menu_contain {
  width: 1080px;
  height: 87px;
  background: rgba(14, 104, 177, 1);
  margin: 0px auto;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}
.icon3 {
  margin-top: 23px;
  margin-left: 30px;
}
.tab {
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  margin-right: 30px;
}
.tab_item {
  background: rgba(14, 104, 177, 1);
  padding-top: 20px;
  padding-left: 10px;
  padding-right: 10px;
}
.tab_item h3 {
  text-align: center;
  font-size: 18px;
  font-family: Microsoft YaHei;
  font-weight: 400;
  color: rgba(255, 255, 255, 1);
}
.tab_item h4 {
  text-align: center;

  font-size: 14px;
  font-family: Microsoft YaHei;
  font-weight: 400;
  color: rgba(255, 255, 255, 1);
}
/* 下面的样式暂时弃用 
.back_img {
  width: 100%;
  height: 550px;
  background-image: url(../../assets/culture.png);
  background-repeat: no-repeat;
  background-size: 100% 100%;
  -moz-background-size: 100% 100%;
}
.menu_tab {
  width: 100%;
  height: 87px;
  background: rgba(14, 104, 177, 1);
}
.menu_contain {
  width: 1080px;
  height: 87px;
  background: rgba(14, 104, 177, 1);
  margin: 0px auto;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}
.icon3 {
  margin-top: 23px;
}
.tab {
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
}
.tab_item {
  background: rgba(14, 104, 177, 1);
  padding-top: 20px;
  padding-left: 10px;
  padding-right: 10px;
}
.tab_item h3 {
  text-align: center;
  font-size: 18px;
  font-family: Microsoft YaHei;
  font-weight: 400;
  color: rgba(255, 255, 255, 1);
}
.tab_item h4 {
  text-align: center;

  font-size: 14px;
  font-family: Microsoft YaHei;
  font-weight: 400;
  color: rgba(255, 255, 255, 1);
}*/
</style>