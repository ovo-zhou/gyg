<template>
  <div class="query">
    <img src="../../assets/clyy.png" alt="">
    <div class="function">
      <div class="f-contain">
        <div class="span-text" @click="toZH">
          <a class="span-link">装货车辆预约</a>
        </div>
        <div class="span-text" @click="toXH">
          <a class="span-link">卸货车辆预约</a>
        </div>
        <div class="span-text" @click="toLSJGCL">
          <a class="span-link">历史进港车辆</a>
        </div>
      </div>
    </div>
    <div class="show">
      <keep-alive>
      <router-view v-if="$route.meta.keepAlive"></router-view>
    </keep-alive>
    <router-view v-if="!$route.meta.keepAlive"></router-view>
    </div>
  </div>
</template>

<script>
export default {
    methods:{
        toZH(){
            this.$router.push("/vehicle/ZHCLYY")
        },
        toXH(){
            this.$router.push("/vehicle/XHCLYY")
        },
        toLSJGCL(){
            this.$router.push("/vehicle/LSJGCL")
        }
    }
};
</script>

<style scoped>
.query{
  background: #fbfbfb;
}
.query img{
  width: 100%;
}
@media screen and (max-width: 1000px)
{
.query img{ width:1080px; }
}
.function {
  width: 100%;
  height: 53px;
  background: #e4e4e4;
  margin-bottom: 30px;
}
.f-contain {
  width: 1080px;
  height: 53px;
  /* background: palegreen; */
  margin: 0px auto;
  display: flex;
  flex-direction: row;
}
.span-text{
    /* border-bottom: 2px solid #0e68b1; */
    margin-left: 10px;
  margin-right: 10px;
}
.span-text a {
  line-height: 53px;
  font-size: 16px;
  font-weight: 600;
  text-decoration: none;
  color: #333;
}
.span-text:hover {
  border-bottom: 4px solid #0e68b1;
  cursor: pointer;
}
.span-text:hover .span-link{
  color: #0e68b1;
}
.show {
  width: 1250px;
  /* height: 600px; */
  /* background: yellow; */
  margin: 0px auto;
}
</style>