<template>
  <div class="Vehicle">
    <div class="v-contain">
      <div class="v-title">
        <span>车辆预约</span>
        <img src="../../assets/组18.png" />
      </div>
    </div>
    <div class="v-fun">
      <div class="v-img">
        <img src="../../assets/组20.png" />
      </div>
    </div>
  </div>
</template>
<script>
export default {};
</script>
<style scoped>
.Vehicle {
  width: 100%;
  height: 642px;
}
.v-contain {
  width: 1080px;
  height: 100px;
  margin: 0px auto;
}
.v-title {
  width: 100%;
  height: 100px;
}
.v-title span {
  font-size: 28px;
  font-family: Microsoft YaHei;
  font-weight: bold;
  color: rgba(19, 103, 170, 1);
  line-height: 100px;
  margin-right: 30px;
  border-left: 9px solid rgba(37, 119, 184, 1);
  padding-left: 20px;
}
.v-title img {
  display: inline-block;
  vertical-align: middle;
}
.v-fun {
  width: 100%;
  height: 542px;
  background: url(../../assets/组19.png) no-repeat;
}
.v-img {
  width: 1080px;
  height: 542px;
  margin: 0px auto;
}
.v-img img {
  position: relative;
  top: 194px;
  left: 500px;
}
</style>