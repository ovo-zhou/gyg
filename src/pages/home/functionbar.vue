<template>
  <div class="funbar">
    <div class="funcontain">
      <div class="item" @mouseover="changeline(1)" @mouseleave="leave(1)">
        <div class="title">
          <h1>电子商务</h1>
          <p>
            ONLINE ORDER HANDLING IS
            <br />MORE CONVENIENT
          </p>
          <div class="line"></div>
        </div>
        <div class="image">
          <img src="../../assets/组17.png" alt />
        </div>
      </div>
      <div class="item" @mouseover="changeline(2)" @mouseleave="leave(2)">
        <div class="title" >
          <h1>车辆预约</h1>
          <p>
           FASTER VEHICLE ONLINE<br/>BOOKING
          </p>
          <div class="line"></div>
        </div>
        <div class="image">
          <img src="../../assets/组19.png" alt />
        </div>
      </div>
      <div class="item" @mouseover="changeline(3)" @mouseleave="leave(3)">
        <div class="title">
          <h1>线上查询</h1>
          <p>
            CONVENIENT CUSTOMER
            <br />INQUIRY
          </p>
          <div class="line"></div>
        </div>
        <div class="image">
          <img src="../../assets/自然饱和度1.png" alt />
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  methods:{
    changeline(e){
     var line=document.getElementsByClassName("line")
        line[e-1].style.width=300+'px';
        line[e-1].style.marginLeft=15+'px';
    },
    leave(e){
      var line=document.getElementsByClassName("line")
        line[e-1].style.width=100+'px';
        line[e-1].style.marginLeft=115+'px';
    }
  }
};
</script>
<style scoped>
.funbar {
  width: 100%;
  height: 500px;
  background: #fcfcfc;
  margin-top: 80px;
}
.funcontain {
  width: 1080px;
  height: 500px;
  margin: 0 auto;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}
.item {
  width: 330px;
  height: 430px;
  border: 2px solid #eaeaea;
  margin-top: 25px;
  border-radius: 25px;
  background: #ffffff;
  cursor: pointer;
}
.title {
  width: 100%;
  height: 130px;
}
.title h1 {
  font-size: 28px;
  font-family: Microsoft YaHei;
  font-weight: bold;
  color: #1367AA;
  border-left: 9px solid #1367AA;
  padding-left: 20px;
  line-height: 30px;
  position: relative;
  left: 20px;
  top: 20px;
}
.title p {
  text-align: center;
  margin-top: 30px;
}
.line {
  margin-top: 10px;
  border: 1px solid #1367AA;
  width: 100px;
  margin-left: 115px;
}
.image {
  width: 100%;
  height: 300px;
}
.image img {
  width: 100%;
  height: 300px;
  border-radius: 0px 0px 25px 25px;
}
</style>