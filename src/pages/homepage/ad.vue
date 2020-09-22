<template>
  <div class="ad">
    <div class="content">
      <div class="title">
        <h1>业务推广</h1>
      </div>
      <div class="imglist">
        <el-carousel :interval="4000" type="card" height="150px">
          <el-carousel-item v-for="(item,index) in data" :key="index">
            <img :src="item.IMGURL" alt @click="toAd(item)" />
          </el-carousel-item>
        </el-carousel>
      </div>
    </div>
  </div>
</template>
<script>
import host from "../../libs/utils";
import { post } from "../../service/http";
export default {
  data() {
    return {
      data: [],
    };
  },
  created() {
    post(host.host6 + "QueryALLAd.ashx").then((res) => {
      this.data = res.data;
      for (let i = 0; i < this.data.length; i++) {
        this.data[i].IMGURL = host.baseUrl + this.data[i].IMGURL;
      }
      // console.log(this.data);
    });
  },
  methods: {
    toAd(item) {
      if (item.LINKURL == "" || item.LINKURL == null) {
        this.$router.push({
          path: "/adDetail",
          query: {
            content: item.CONTENT
          },
        });
      } else {
        window.open(item.LINKURL);
      }
    },
  },
};
</script>
<style scoped>
.ad {
  width: 100%;
  height: 150px;
  background: #fcfcfc;
  margin-top: 50px;
}
.content {
  width: 1080px;
  height: 150px;
  margin: 0px auto;
}
.title {
  float: left;
  margin-left: 30px;
}
.title h1 {
  line-height: 150px;
  color: rgba(103, 103, 103);
}
.imglist {
  width: 700px;
  margin-left: 350px;
  height: 150px;
  /* background: aqua; */
}
img {
  width: 300px;
  height: 150px;
}
</style>