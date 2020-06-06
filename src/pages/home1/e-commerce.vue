<template>
  <div class="e-Commerce">
    <div class="e-contain">
      <div class="e-title">
        <span>电子商务</span>
        <img src="../../assets/组16.png" />
      </div>
      <div class="e-fun">
        <div class="fun-list">
          <div class="e-fun-title">
            <h1>网上快速办理</h1>
          </div>
          <div class="line1"></div>
          <div class="fun1">
            <h2>网上办理装卸货作业合同</h2>
          </div>
          <div class="fun2">
            <h3>网上货物提运单</h3>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {};
</script>
<style scoped>
.e-Commerce {
  width: 100%;
  height: 700px;
}
.e-contain {
  width: 1080px;
  height: 700px;
  margin: 0px auto;
}

.e-title {
  width: 100%;
  height: 100px;
}
.e-title span {
  font-size: 28px;
  font-family: Microsoft YaHei;
  font-weight: bold;
  color: rgba(19, 103, 170, 1);
  line-height: 100px;
  margin-right: 30px;
  border-left: 9px solid rgba(37, 119, 184, 1);
  padding-left: 20px;
}
.e-title img {
  display: inline-block;
  vertical-align: middle;
}
.e-fun {
  width: 100%;
  height: 600px;
  background: url(../../assets/组17.png) no-repeat top center;
  position:relative; 
}
.fun-list{
  /* background: aqua; */
  position:absolute; 
  top:117px; 
  left:636px; 
}
.e-fun-title h1{
  font-size:26px;
font-family:Microsoft YaHei;
font-weight:bold;
color:rgba(255,255,255,1);
}
.line1{
  border: 2px solid rgba(19,127,215,1);
  width: 298px;
  margin-top: 10px;
}
.fun1{
background:rgba(37,138,218,1);
border-radius:2px;
width: 220px;
  margin-top: 50px;

}
.fun2{
  background:rgba(37,138,218,1);
border-radius:2px;
width: 150px;
  margin-top: 25px;

}
.fun1 h2{
  font-size:18px;
font-family:Microsoft YaHei;
font-weight:400;
color:rgba(255,255,255,1);
margin-left: 10px;
}
.fun2 h3{
font-size:18px;
font-family:Microsoft YaHei;
font-weight:400;
color:rgba(255,255,255,1);
margin-left: 10px;

}
</style>