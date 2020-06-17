<template>
  <div class="dynamic">
    <img src="../../assets/dynamic.png" alt />
    <div class="d-contain">
      <template v-for="(item,index) in newsdata">
        <newitem :newdata="item" :key="index"></newitem>
      </template>
      <el-pagination
        background
        @current-change="handleCurrentChange"
        :page-size="10"
        layout="total,prev, pager, next, jumper"
        :total="total"
      ></el-pagination>
    </div>
  </div>
</template>

<script>
import newitem from "./newitem";
import host from "../../libs/utils";
import { post } from "../../service/http";
export default {
  components: {
    newitem
  },
  data() {
    return {
      total: 105,
      newsdata: []
    };
  },
  methods: {
    handleCurrentChange(val) {
      this.queryNews(val);
    },
    queryTotal() {
      post(host.host2 + "QueryNews.ashx", { page: 0, LM: "行业动态" }).then(
        res => {
          console.log(res);
          if (res.errCode === "SUCCESS") {
            this.total = res.data[0].datanum;
          }
        }
      );
    },
    queryNews(val) {
      post(host.host2 + "QueryNews.ashx", { page: val, LM: "行业动态" }).then(
        res => {
          if (res.errCode === "SUCCESS") {
            this.newsdata = res.data;
            console.log(this.newsdata);
          }
        }
      );
    }
  },
  mounted() {
    this.queryTotal();
    this.queryNews(1);
  }
};
</script>

<style scoped>
.dynamic {
  width: 100%;
  /* background: yellowgreen; */
}
.dynamic img {
  width: 100%;
}
.d-contain {
  width: 1080px;
  /* height: 600px; */
  /* background: violet; */
  margin: 0px auto;
}
</style>