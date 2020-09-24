<template>
  <div class="item" @click="toDetail">
    <span class="title">{{notice.XWBT}}</span> 
    <span class="date">{{notice.FBSJ}}</span>
  </div>
</template>
<script>
export default {
  props:{
    notice: {
      type: Object,
      required: true
    }
  },
  methods:{
     toDetail() {
      this.$router.push({ path: "/details", query: { newdata: this.notice } });
      document.body.scrollIntoView()
    }
  }
};
</script>
<style scoped>
.item{
  width: 100%;
  height: 40px;
  border-bottom:1px dashed #000;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  cursor: pointer;
}
.title{
  line-height: 40px;
  color: #0e68b1;
  font-weight: 600;
}
.date{
  line-height: 40px;
  color: #0e68b1;

}
</style>