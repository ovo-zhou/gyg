<template>
  <div class="item" @click="toDetail">
    <h1>{{newdata.XWBT}}</h1>
    <h3>{{newdata.FBSJ}}</h3>
    <p v-html="computedTxt(newdata.XWNR)"></p>
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
  computed: {
    computedTxt() {
      return function(val) {
        return this.getText(val);
      };
    }
  },
  methods: {
    getText(val) {
      var pattern = /<img[^>]+>|<\s*\/>/gi;
      return val.replace(pattern, "");
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
  -webkit-line-clamp: 3;
  overflow: hidden;
  width: 100%;
  height: 85px;
  overflow: hidden;
}
img {
  display: none;
}
</style>