<template>
  <div class="item" @click="toDetail">
    <h1>{{newdata.XWBT}}</h1>
    <h3>{{newdata.FBSJ}}</h3>
    <!-- <p v-html="computedTxt(newdata.XWNR)"></p> -->
    <p>{{stripHtml(newdata.XWNR)}}</p>
  </div>
</template>
<script>
export default {
  props: {
    newdata: {
      type: Object,
      required: true
    }
  },
  methods: {
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
    toDetail() {
      this.$router.push({ path: "/details", query: { newdata: this.newdata } });
      document.body.scrollIntoView()
    }
  }
};
</script>
<style scoped>
.item {
  width: 100%;
  margin-top: 30px;
  border-bottom: 1px solid #0e68b1;
  cursor: pointer;
}
.item:hover h1{
  color: #0e68b1;
}
.item h1 {
  font-size: 24px;
  margin-bottom: 10px;
}
.item h3 {
  font-size: 14px;
  margin-bottom: 10px;
}
.item p {
  line-height: 30px;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  overflow: hidden;
  width: 100%;
  height: 60px;
  overflow: hidden;
  text-indent: 2em;
}
img {
  display: none;
}
</style>