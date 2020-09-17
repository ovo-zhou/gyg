<template>
  <div class="dynamic">
    <img src="../../assets/hydt.png" alt />
    <div class="d-contain">
      <div class="c-left">
        <template v-for="(item,index) in newsdata">
          <newitem :newdata="item" :key="index"></newitem>
        </template>
        <div class="line" style="height:20px"></div>
        <el-pagination
          background
          @current-change="handleCurrentChange"
          :page-size="10"
          layout="total,prev, pager, next, jumper"
          :total="total"
          v-if="isShow"
        ></el-pagination>
        <div class="backbtn" v-else @click="backDynamic">回到行业动态</div>
      </div>
      <div class="c-right">
        <outcon></outcon>
        <div class="date">
          <Calendar v-on:choseDay="clickDay"></Calendar>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import newitem from "./newitem";
import host from "../../libs/utils";
import outcon from "./outcon";
import Calendar from "vue-calendar-component";
import { post } from "../../service/http";
export default {
  components: {
    newitem,
    outcon,
    Calendar,
  },
  data() {
    return {
      total: 0,
      newsdata: [],
      isShow: true,
    };
  },
  methods: {
    backDynamic() {
      this.queryTotal();
      this.queryNews(1);
      this.isShow = !this.isShow;
    },
    clickDay(data) {
      // console.log(data);
      post(host.host2 + "QueryNewsByDate.ashx", {
        date: data,
        LM: "公司要闻",
      }).then((res) => {
        if (res.errCode == "SUCCESS") {
          if (res.data == null) {
            this.$message.error("这天没有发布新闻哦！");
          } else {
            this.newsdata = res.data;
            if(this.isShow){
            this.isShow = !this.isShow;
            }
          }
        } else {
          this.$message.error("出了点小错误，请联系技术人员！");
        }
      });
    },
    handleCurrentChange(val) {
      this.queryNews(val);
    },
    queryTotal() {
      post(host.host2 + "QueryNews.ashx", { page: 0, LM: "公司要闻" ,clientLX:"web"}).then(
        (res) => {
          // console.log(res);
          if (res.errCode === "SUCCESS") {
            this.total = res.data[0].datanum;
          }
        }
      );
    },
    queryNews(val) {
      post(host.host2 + "QueryNews.ashx", { page: val, LM: "公司要闻" ,clientLX:"web"}).then(
        (res) => {
          if (res.errCode === "SUCCESS") {
            this.newsdata = res.data;
            // console.log(this.newsdata);
          }
        }
      );
    },
  },
  mounted() {
    this.queryTotal();
    this.queryNews(1);
  },
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
@media screen and (max-width: 1000px) {
  .dynamic img {
    width: 1080px;
  }
}
.d-contain {
  width: 1080px;
  /* height: 600px; */
  min-height: 700px;
  /* background: violet; */
  margin: 0px auto;
  position: relative;
  left: 0px;
  top: 0px;
}
.c-left {
  width: 750px;
}
.c-right {
  width: 280px;
  height: 600px;
  position: absolute;
  top: 0px;
  left: 770px;
  /* background: yellow; */
}
.data {
  padding-top: 50px;
}
.backbtn {
  width: 100%;
  height: 30px;
  background: #409eff;
  border-radius: 5px;
  color: white;
  text-align: center;
  font-size: 20px;
  cursor: pointer;
}
.wh_container >>> .wh_content_all {
  background-color: #ffffff !important;
  border: 1px solid #dfe0e6;
  border-radius: 6px;
}
.wh_container {
  margin: 0px !important;
}

.wh_container >>> .wh_item_date {
  color: #211d48;
}
.wh_container >>> .wh_item_date:hover {
  color: #ffffff;
  background: #0088b5;
  border-radius: 50%;
}
.wh_container >>> .wh_other_dayhide {
  color: #cccccc;
}

.wh_container >>> .wh_content_item {
  margin-bottom: 5px;
  margin-top: 5px;
}

.wh_container >>> .wh_content {
  color: black;
}

.wh_container >>> .wh_top_tag {
  color: black;
}
.wh_container >>> .wh_content_li {
  color: #162947;
  font-weight: bold;
}
.wh_container >>> .wh_jiantou1 {
  border-top: 2px solid #162947;
  border-left: 2px solid #162947;
}
.wh_container >>> .wh_jiantou2 {
  border-top: 2px solid #162947;
  border-right: 2px solid #162947;
}

.wh_container >>> .wh_content_item > .wh_isMark {
  background-color: rgba(19, 105, 167, 0.15);
}
.wh_container >>> .wh_content_item .wh_isToday {
  background-color: #0088b5;
  color: #ffffff;
}
.wh_container >>> .wh_content_item .wh_chose_day {
  background-color: #0088b5;
  color: #ffffff;
}
</style>