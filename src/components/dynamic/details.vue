<template>
  <div class="Article">
    <div class="a-contain">
      <div class="text">
        <h1>别样毕业季校领导看望慰问首批返校毕业研究生</h1>
        <p class="releasedate">发布时间：2020-6-14</p>
        <p>
          新闻网讯（通讯员 程亚楠）6月10日，我校线上召开第六届“广东工研院杯”创新创业大赛暨中国国际“互联网+”大学生创新创业大赛参赛动员会。校党委副书记马建辉参加活动并讲话。
          教务处处长、启明学院院长陈刚主持活动。马建辉对我校在前五届“互联网+”大赛中取得优异成绩给予充分肯定，并对今年的参赛组织工作提出了三点意见和建议。一是进一步提高“互联网+”大赛的认识。他指出，“互联网+”大赛不仅仅是一场大学生比赛，更是学校人才培养、科学研究、社会服务综合实力的体现。要更加紧密地与学科、专业建设和评估结合起来。二是进一步加强“互联网+”大赛的组织。各部门、各院系协同作战，整合资源，加强配合，打好这场攻坚战。三是真正落实以赛促学、以赛促教、以赛促创的目标和任务。推动双创教育和人才培养，推进赛事成果转化和产学研用紧密结合，服务经济高质量发展，努力促进学校毕业生更高质量创业就业。
          启明学院副院长黄刚作了题为《敢为人先放飞青春梦，勇立潮头建功新时代》的参赛解读，他介绍了中国国际“互联网+”大学生创新创业大赛的基本情况，从保障措施、工作基础、关键措施三个方面，总结了我校参赛工作经验，回顾了我校在前五届“互联网+”大赛中取得的成绩，详细解读了第六届大赛的参赛政策、重要变化和我校激励政策。
          第五届大赛红旅赛道金奖项目“绿草成纤：中国草变致富宝”学生负责人白云、主赛道金奖项目“飞流智能：面向超低空的全天候多场景环境智慧监测平台”学生负责人刘奇分别介绍他们的参赛项目，分享参赛经验和参赛心路历程，为师生提供了宝贵的经验。
          第五届大赛金奖项目指导教师代表、电信学院副院长白翔教授介绍了项目从校赛受挫、商业模式得不到认可，到省赛、国赛夺金的参赛历程，他表示“互联网+”大赛已不再是的一个纯粹的双创赛事，它代表着一所大学的产学研能力，科技创新是其精髓，也是学校产学研综合实力的体现。
          第五届大赛参赛组织先进集体代表、生命学院党委书记张涛分享了生命学院在“互联网+”大赛取得的成果以及成功经验。学院高度重视，组建专班，主要负责人全程参与；出台专门政策保障师生双创教育与实践；以创新项目为牵引，每年遴选100多项大学生创新创业项目参赛，整合资源，以竞赛助推双创教育，以参赛锤炼学生意志品质和能力。
          宣传部、学工部（处）、校团委、研究生院、科发院、成果办、国际交流处、校友办、国际教育学院、附属同济医院科研处、附属协和医院科研处、产业集团等相关部门负责人，各院（系）相关负责人，师生代表参加本次活动。
        </p>
      </div>
      <div class="top">
        <h1>最新发布</h1>
        <a href="#">文章标题文章标题文章标题文章标题</a>
        <a href="#">文章标题文章标题文章标题文章标题</a>
        <a href="#">文章标题文章标题文章标题文章标题</a>
        <a href="#">文章标题文章标题文章标题文章标题</a>
        <a href="#">文章标题文章标题文章标题文章标题</a>
        <a href="#">文章标题文章标题文章标题文章标题</a>
        <a href="#">文章标题文章标题文章标题文章标题</a>
      </div>
      <div class="date">
        <Calendar ref="Calendar" :markDate="arr2" v-on:changeMonth="changeDate"></Calendar>
      </div>
    </div>
  </div>
</template>

<script>
import Calendar from "vue-calendar-component";
export default {
  components: {
    Calendar
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