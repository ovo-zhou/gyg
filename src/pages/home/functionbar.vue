<template>
  <div class="funbar">
    <div class="funcontain">
      <div class="item">
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
      <div class="item">
        <div class="title">
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
      <div class="item">
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
export default {};
</script>
<style scoped>
.funbar {
  width: 100%;
  height: 500px;
  background: #fcfcfc;
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
}
.title {
  width: 100%;
  height: 130px;
}
.title h1 {
  font-size: 28px;
  font-family: Microsoft YaHei;
  font-weight: bold;
  color: #24a9e6;
  border-left: 9px solid #24a9e6;
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
  border: 1px solid #24a9e6;
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
  border-radius: 25px;
}
</style>