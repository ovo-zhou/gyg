<template>
  <div class="focus">
    <img src="../../assets/hydt.png" alt />
    <div class="function">
      <div class="f-contain">
        <div class="span-text" @click="toDynamic">
          <a class="span-link" :class="{link:check=='1'}">行业动态</a>
        </div>
        <div class="span-text" @click="toNotice">
          <a class="span-link" :class="{link:check=='2'}">通知公告</a>
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
  data() {
    return {
      check: "1",
    };
  },
  methods: {
    toDynamic() {
      this.check = "1";
      this.$router.push("/new/dynamic");
    },
    toNotice() {
      this.check = "2";
      this.$router.push("/new/notice");
    }
  },
};
</script>
<style scoped>
.link {
  color: #409eff !important;
}
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
.span-text:hover .span-link {
  color: #0e68b1;
}
</style>