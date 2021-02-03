<template>
  <div class="Article">
    <div class="a-contain">
      <div class="text">
        <h1>{{curnew.XWBT}}</h1>
        <p class="releasedate">{{curnew.FBSJ}}{{" "}}{{getdepartment(curnew.FBRBH)}}{{" "}}{{curnew.FBRXM}}</p>
        <p v-html="curnew.XWNR"></p>
      </div>
      <div class="top">
        <h1>最新发布</h1>
        <template v-for="(item,index) in news">
          <a href="#" :key="index" @click="toDetail(index)">{{item.XWBT}}</a>
        </template>
      </div>
      <div class="date">
        <Calendar ref="Calendar" :markDate="arr2" v-on:changeMonth="changeDate"></Calendar>
      </div>
    </div>
  </div>
</template>

<script>
import Calendar from "vue-calendar-component";
import host from "../../libs/utils";
import { post } from "../../service/http";
export default {
  data() {
    return {
      news: [],
      curnew:"",
      bmmc:""
    };
  },
  created() {
    this.curnew=this.$route.query.newdata
    post(host.host2 + "QueryNotice.ashx", { page: 1, LM: "行业动态" ,clientLX:"web"}).then(
      res => {
        if (res.errCode === "SUCCESS") {
          this.news = res.data;
          this.news = this.news.slice(0, 7);
          // console.log(this.news);
        }
      }
    );
  },
  components: {
    Calendar
  },
  methods:{
    getdepartment(bh){
      post(host.host2+"QueryDepartByBh.ashx",{BH:bh}).then(res=>{
        this.bmmc= res[0].BMMC
      })
      return this.bmmc
    },
    toDetail(index){
      this.curnew=this.news[index]
    }
  }
};
</script>

<style scoped>
.Article {
  width: 100%;
  min-height: 700px;
  margin-top: 50px;
}
.a-contain {
  width: 1080px;
  margin: 0px auto;
  position: relative;
  left: 0px;
  top: 0px;
}
.text {
  /* background: olive; */
  width: 750px;
}
.text h1 {
  font-size: 24px;
  margin-bottom: 10px;
  text-align: center;
  /* background: chartreuse; */
}
.releasedate {
  margin-bottom: 20px;
  font-size: 12px;
  color: #787878;
}
.top {
  width: 280px;
  height: 300px;
  position: absolute;
  left: 800px;
  top: 0px;
  /* background: orange; */
}
.top h1 {
  font-size: 16px;
  background: #0088b5;
  color: #ffffff;
  line-height: 35px;
  padding-left: 15px;
  margin-bottom: 15px;
}
.top a {
  color: #222222;
  line-height: 32px;
  font-family: 微软雅黑;
  font-size: 14px;
  text-decoration: none;
  display: block;
  padding-left: 15px;
  display: block;
  white-space: nowrap;
  overflow: hidden;
  width: 250px;
  text-overflow: ellipsis;
}
.date {
  width: 280px;
  height: 300px;
  position: absolute;
  left: 800px;
  top: 300px;
  /* background: blue; */
}

/*一下是日历样式*/
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