<template>
  <div class="query">
    <img src="../../assets/query.png" alt="">
    <div class="function">
      <div class="f-contain">
        <div class="span-text" @click="toDckc">
          <a>堆场库存</a>
        </div>
        <div class="span-text" @click="toZxfjf">
          <a>装卸费计费</a>
        </div>
        <div class="span-text" @click="toDcjf">
          <a>堆存计费</a>
        </div>
        <div class="span-text" @click="toJhjzx">
          <a>件货集装箱信息</a>
        </div>
      </div>
    </div>
    <div class="show">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    toDckc() {
      this.$router.push("/query/dckc");
    },
    toZxfjf() {
      this.$router.push("/query/zxfjf");
    },
    toDcjf() {
      this.$router.push("/query/dcjf");
    },
    toJhjzx() {
      this.$router.push("/query/jhjzx");
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
    border-bottom: 2px solid #0e68b1;
    margin-left: 10px;
  margin-right: 10px;
}
.span-text a {
  line-height: 53px;
  font-size: 16px;
  
  text-decoration: none;
  color: #333;
}
.span-text:hover {
  background: #0e68b1;
  color: #fbfbfb;
  cursor: pointer;
}
.show {
  width: 1080px;
  /* height: 600px; */
  /* background: yellow; */
  margin: 0px auto;
}
</style>