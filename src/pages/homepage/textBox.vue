<template>
  <div class="textBox">
    <div class="content">
      <div>
        <img src="../../assets/公告 .png" alt />
        <span @click="toNotice">[通知公告]</span>
      </div>
      <el-carousel height="200px" direction="vertical" :autoplay="true" :loop="true">
        <el-carousel-item v-for="(item,index) in data" :key="index">
          <div @click="toDetail(item)">
            <p>{{item.XWBT}}</p>
          </div>
        </el-carousel-item>
      </el-carousel>
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
  mounted() {
    post(host.host2 + "QueryNotice.ashx", {
      page: 1,
      LM: "对外公告",
      clientLX: "web",
    }).then((res) => {
      //  console.log(e)
      for (let k = 0; k < res.data.length; k++) {
        if (res.data[k].SHZT == "1") {
          this.data.push(res.data[k]);
        }
      }
      this.data = this.data.slice(0, 3);
      //  console.log(this.data)
    });
  },
  methods: {
    toDetail(item) {
      // console.log(item)
      this.$router.push({ path: "/details", query: { newdata: item } });
      document.body.scrollIntoView();
    },
    toNotice(){
      this.$router.push("/new/notice");
      document.body.scrollIntoView();
    }
  },
};
</script>
<style scoped>
.textBox {
  width: 100%;
  margin-top: 25px;
}
.content {
  width: 1080px;
  height: 40px;
  margin: 0px auto;
  overflow: hidden;
  background: #ebeef5;
  cursor: pointer;
}
img {
  width: 32px;
  height: 32px;
  float: left;
  margin-top: 4px;
  margin-left: 10px;
  margin-right: 10px;
}
span {
  float: left;
  line-height: 40px;
  margin-right: 10px;
}
p {
  line-height: 40px;
  font-size: 24px;
}
</style>