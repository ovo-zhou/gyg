<template>
  <div class="news">
    <div class="news_contain">
      <div class="post_head">
        <p>
          <span class="post_title">行业动态</span>
          <span class="more" @click="toAll">全部动态</span>
        </p>
        <p>
          <span class="En_title">Industry News</span>
        </p>
      </div>
      <div class="news_list">
        <template v-for="(item,index) in newsdata">
          <div class="other" :key="index" @click="toDetail(item)">
            <template v-if="item.COVER_IMG">
              <img :src="item.COVER_IMG" alt />
            </template>
            <p class="p1">{{item.XWBT}}</p>
            <p class="p2">{{stripHtml(item.XWNR)}}</p>
            <span>{{item.FBSJ}}</span>
          </div>
        </template>
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
      newsdata: [],
    };
  },
  methods: {
    toAll() {
      this.$router.push("/new/dynamic");
    },
    stripHtml(content) {
      if (content != null && content != "") {
        content = content.replace(/<\/?[^>]*>/g, ""); //去除HTML tag
        content= content.replace(/&nbsp;/ig,'');//去掉空格
        content= content.replace(/&ldquo;/ig,'');//去掉上引号
        content= content.replace(/&rdquo;/ig,'');//去掉下引号
        content= content.replace(/&middot;/ig,'');//去掉下引号
        content= content.trim();
      }
      return content;
    },
    toDetail(item) {
      this.$router.push({ path: "/details", query: { newdata: item } });
      document.body.scrollIntoView();
    },
    querynew() {
      post(host.host2 + "QueryNews.ashx", {
        page: 1,
        LM: "行业动态",
        clientLX: "web",
      }).then((res) => {
        // console.log(res)
        if (res.errCode === "SUCCESS") {
          this.newsdata = res.data;
          this.newsdata = this.newsdata.slice(0, 6);
          for (let i = 0; i < this.newsdata.length; i++) {
            if (this.newsdata[i].COVER_IMG !== "") {
              this.newsdata[i].COVER_IMG =
                host.baseUrl + this.newsdata[i].COVER_IMG;
            }
          }
          console.log(this.newsdata);
        } else {
          // console.log(res.errCode)
        }
      });
    },
  },
  created() {
    this.querynew();
  },
};
</script>
<style scoped>
.news {
  width: 100%;
  height: 772px;
  margin-top: 40px;
  /* background: aquamarine; */
}
.news_contain {
  width: 1080px;
  height: 772px;
  /* background: blueviolet; */
  margin: 0px auto;
}
.post_head {
  width: 100%;
  height: 56px;
  /* background: yellow; */
}
.post_title {
  /*line-height: 50px;*/
  color: #1367aa;
  border-left: 9px solid #1367aa;
  padding-left: 20px;
  padding-bottom: 15px;
  font-size: 28px;
  font-weight: bold;
}
.En_title {
  color: #1367aa;
  font-size: 16px;
  padding-left: 30px;
}
.more {
  line-height: 30px;
  font-size: 14px;
  color: #fff;
  background: #1367aa;
  float: right;
  margin-top: 13px;
  margin-bottom: 13px;
  margin-right: 20px;
  width: 100px;
  text-align: center;
  cursor: pointer;
}
.news_list {
  width: 100%;
  height: 716px;
  /* background: blueviolet;  */
  margin-top: 10px;
}
.news_list > :nth-child(2) {
  margin-left: 79px;
  margin-right: 79px;
}
.news_list > :nth-child(5) {
  margin-left: 79px;
  margin-right: 79px;
}
.other {
  width: 307px;
  height: 358px;
  /* background: tomato; */
  border-top: 3px solid #1367aa;
  cursor: pointer;
  float: left;
}
.other img {
  width: 307px;
  height: 144px;
}
.p1 {
  font-size: 16px;
  margin-top: 10px;
}
.p2 {
  font-size: 12px;
  color: #717171;
  margin-top: 15px;
  margin-bottom: 10px;
  line-height: 25px;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 3;
  overflow: hidden;
  width: 100%;
  height: 70px;
  text-indent: 2em;
  /* background: aqua; */
}
.other span {
  font-size: 12px;
  color: #1367aa;
  /* background: blueviolet; */
}
</style>