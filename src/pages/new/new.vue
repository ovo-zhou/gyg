<template>
  <div class="focus">
    <img src="../../assets/hydt.png" alt />
    <div class="function">
      <div class="f-contain">
         <div class="span-text" @click="toDynamic">
          <router-link to="/new/dynamic">行业动态</router-link>
        </div>
        <div class="span-text" @click="toNotice">
          <router-link  to="/new/notice">通知公告</router-link>
        </div>
      </div>
    </div>
    <div>
      <keep-alive>
        <router-view v-if="$route.meta.keepAlive"></router-view>
      </keep-alive>
      <router-view v-if="!$route.meta.keepAlive"></router-view>
    </div>
  </div>
</template>
<script>
export default {
  methods: {
    toDynamic() {
      this.$router.push("/new/dynamic");
    },
    toNotice() {
      this.$router.push("/new/notice");
    }
  },
};
</script>
<style scoped>
.focus {
  width: 100%;
}
.focus img {
  width: 100%;
  height: 450px;
}
@media screen and (max-width: 1000px) {
  .focus img {
    width: 1080px;
  }
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
.span-text {
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
.span-text a.router-link-exact-active {
  color:  #409eff;
}
</style>