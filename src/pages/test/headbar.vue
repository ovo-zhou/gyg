<template>
  <div class="head_back">
    <div class="head" id="head">
      <div class="head_contain">
        <div class="logo">
          <img src="../../assets/图层6.png" alt />
        </div>
        <div class="list" @mouseover="over" @mouseleave="leave">
          <span name="item" >公司简介</span>
          <span name="item">行业动态</span>
          <span name="item">电子商务</span>
          <span name="item">业务流程</span>
          <span name="item">车辆预约</span>
          <span name="item">客户查询</span>
          <span name="item">联系我们</span>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
    mounted(){

    },
  methods: {
    over() {
      document.getElementById("head").style.backgroundColor = "#fff";
      var a = document.getElementsByName("item");
      for (var i = 0; i < a.length; i++) {
        a[i].style.color = "#2b2e2e";
      }
    },
    leave() {
      document.getElementById("head").style.backgroundColor = "";
      var a = document.getElementsByName("item");
      for (var i = 0; i < a.length; i++) {
        a[i].style.color = "#fff";
      }
    }
  }
};
</script>
<style scoped>
.head_back {
  width: 100%;
  height: 600px;
  background: url("../../assets/head_back.jpg") no-repeat;
  background-size: 100% 100%;
  background-attachment: fixed;
}
.head {
  width: 100%;
  height: 78px;
  /* background: magenta; */
}
.head_contain {
  width: 1080px;
  height: 78px;
  margin: 0px auto;
  /* background: mediumaquamarine; */
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}
.logo {
  padding-top: 18px;
}
.list {
  height: 78px;
  /* background: mediumorchid; */
}
.list span {
  float: right;
  line-height: 78px;
  font-size: 16px;
  color: #fff;
  font-weight: bold;
  margin-left: 10px;
  margin-right: 10px;
  cursor: pointer;
}
</style>