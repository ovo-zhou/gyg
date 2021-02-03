<template>
  <div>
    <img :src="COVER_IMG" alt="" />
    <h1>{{this.$route.query.new.XWBT}}</h1>
    <div><span>{{this.$route.query.new.LM}}</span><span>{{this.$route.query.new.FBSJ}}</span><span>{{this.$route.query.new.FBRXM}}</span></div>
    <div v-html="content" class="content"></div>
  </div>
</template>

<script>
import host  from '../../../libs/utils';
export default {
  data() {
    return {
     COVER_IMG:'',
     content:''
    };
  },
  mounted(){
   
    this.COVER_IMG=host.baseUrl+this.$route.query.new.COVER_IMG
    this.content=this.$route.query.new.XWNR
  }
};
</script>

<style scoped>
img{
    width: 600px;
    height: 300px;
}
span{
    margin-right: 30px;
}
.content{
    width: 1000px;
    margin-top: 50px;
}
</style>
