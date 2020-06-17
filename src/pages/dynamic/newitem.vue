<template>
  <div class="item" @click="toDetail">
    <h1>{{newdata.XWBT}}</h1>
    <h3>{{newdata.FBSJ}}</h3>
    <p v-html="newdata.XWNR"></p>
  </div>
</template>
<script>
export default {
  props: {
      newdata:{
          type:Object,
          required:true
      }
  },
  methods:{
      toDetail(){
          this.$router.push({ path: '/details', query: { newdata: this.newdata }});
      }
  }
};
</script>
<style scoped>
.item {
  width: 100%;
  margin-top: 30px;
}
.item:hover {
  border-top: 2px solid #0e68b1;
  border-bottom: 2px solid #0e68b1;
  cursor: pointer;
}
.item:hover h1 {
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
  text-indent: 2em;
  line-height: 30px;
   display: -webkit-box;
	-webkit-box-orient: vertical;
	-webkit-line-clamp: 3;
	overflow: hidden;
  width: 100%;
  height: 85px;
  overflow:hidden
}
img{
    display: none;
}
</style>