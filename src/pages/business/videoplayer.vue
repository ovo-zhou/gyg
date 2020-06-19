<template>
  <div class="video">
    <video id="vid" controls :src="videourl" type="video/mp4">
    </video>
    <div class="vlist">
      <template v-for="item in data">
         <template  v-for="url in item.SP">
        <div class="item" :key="url" @click="changeUrl(url)">{{item.YWMC}}.mp4</div>
      </template>
      </template>
     
    </div>
  </div>
</template>

<script>
export default {
 props:{
   data:{
     type:Array,
     required:true
   }
 },
 data(){
   return{
     videourl:""
   }
 },
  methods: {
    changeUrl(url) {
      this.videourl=url
      document.getElementById("vid").play();
    }
  }
};
</script>

<style scoped>
.video {
  width: 100%;
  /* height: 600px; */
  /* background: aquamarine; */
  margin-top: 50px;
}
video {
  width: 1080px;
  height: 600px;
  background: black;
}
.vlist {
  width: 100%;
  /* height: 200px; */
  /* background: navy; */
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  border-top: 2px solid #0e68b1;
  margin-top: 20px;
}
.item {
  width: 250px;
  height: 30px;
  /* background: violet; */
  text-align: center;
  line-height: 30px;
  border-radius: 4px;
  margin-left: 8px;
  margin-right: 8px;
  margin-top: 10px;
  border: 2px solid #858585;
  cursor: pointer;
}
</style>