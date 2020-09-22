<template>
  <div class="query">
    <img src="../../assets/query.png" alt />
    <div class="function">
      <div class="f-contain">
        <div class="span-text" @click="toDckc">
          <a class="span-link" :class="{link:check=='DCKC'}">堆场库存</a>
        </div>
        <div class="span-text" @click="toJCKMX">
          <a class="span-link" :class="{link:check=='JCKMX'}">进出库明细</a>
        </div>
        <!-- <div class="span-text" @click="toZxfjf">
          <a>装卸费计费</a>
        </div>
        <div class="span-text" @click="toDcjf">
          <a>堆存计费</a>
        </div>-->
        <div class="span-text" @click="toJh">
          <a class="span-link" :class="{link:check=='JH'}">件货综合信息</a>
        </div>
        <div class="span-text" @click="toJzx">
          <a class="span-link" :class="{link:check=='JZX'}">集装箱综合信息</a>
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
  data() {
    return {
      check: "DCKC",
    };
  },
  methods: {
    toDckc() {
      this.check = "DCKC";
      this.$router.push("/query/dckc");
    },
    //下面的两个功能已经弃用
    toZxfjf() {
      this.check = "DCKC";
      this.$router.push("/query/zxfjf");
    },
    toDcjf() {
      this.check = "DCKC";
      this.$router.push("/query/dcjf");
    },
    toJh() {
      this.check = "JH";

      this.$router.push("/query/jh");
    },
    toJzx() {
      this.check = "JZX";

      this.$router.push("/query/jzx");
    },
    toJCKMX() {
      this.check = "JCKMX";

      this.$router.push("/query/jckmx");
    },
  },
};
</script>

<style scoped>
.link {
  color: #409eff !important;
}
.query {
  background: #fbfbfb;
}
.query img {
  width: 100%;
}
@media screen and (max-width: 1000px) {
  .query img {
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
  width: 1400px;
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
.show {
  width: 1400px;
  /* height: 600px; */
  /* background: yellow; */
  margin: 0px auto;
}
</style>