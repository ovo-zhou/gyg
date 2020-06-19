<template>
  <div class="dynamic">
    <img src="../../assets/dynamic.png" alt />
    <div class="d-contain">
      <div class="c-left">
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
      <div class="c-right">
        <outcon></outcon>
        <div class="date">
        <Calendar ref="Calendar" :markDate="arr2" v-on:changeMonth="changeDate"></Calendar>
      </div>
      </div>
    </div>
  </div>
</template>

<script>
import newitem from "./newitem";
import host from "../../libs/utils";
import outcon from './outcon'
import Calendar from "vue-calendar-component";
import { post } from "../../service/http";
export default {
  components: {
    newitem,
    outcon,
    Calendar
  },
  data() {
    return {
      total: 0,
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
  position: relative;
  left: 0px;
  top: 0px;
}
.c-left{
  width: 750px;
}
.c-right{
  width: 280px;
  height: 600px;
  position: absolute;
  top :0px;
  left: 770px;
  /* background: yellow; */
}
.data{
  padding-top: 50px;
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