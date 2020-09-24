<template>
  <div class="item">
    <div class="title" @click="change(data.ID)">
      <span>{{data.YWMC}}</span>
      <img src="../../assets/dropdown.png" alt />
    </div>
    <div class="content" :id="data.ID">
      <div class="lc_img">
        <el-image
          style="width: 500px; height: 300px"
          fit="contain"
          :src="data.LCT[0]"
          :preview-src-list="data.LCT"
        ></el-image>
      </div>
      <div class="lc_video">
        <el-carousel height="300px" indicator-position="outside" :autoplay="false">
          <el-carousel-item v-for="item in data.SP" :key="item">
            <video controls :src="item" type="video/mp4" width="500" height="300">
            </video>
          </el-carousel-item>
        </el-carousel>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      tag: "off",
    };
  },
  created() {},
  props: {
    data: {
      type: Object,
      required: true,
    },
  },
  methods: {
    change(ID) {
      var title = document.getElementById(ID);
      if (this.tag == "on") {
        title.style.display = "none";
        // title.style.height="0px"
        this.tag = "off";
      } else {
        title.style.display = "block";
        // title.style.height="150px"
        this.tag = "on";
      }
    },
  },
};
</script>
<style scoped>
.item {
  width: 100%;
  margin-top: 30px;
}
.title {
  width: 100%;
  height: 60px;
  background: rgb(245, 245, 245);
  border-left: rgb(40, 105, 179) solid 8px;
  cursor: pointer;
}
.title span {
  line-height: 60px;
  font-size: 1.5em;
  margin-left: 20px;
}
.title img {
  width: 20px;
  height: 20px;
  float: right;
  margin-top: 20px;
  margin-right: 20px;
}
.content {
  width: 100%;
  margin-top: 20px;
  display: none;
}
.lc_img {
  width: 500px;
  height: 300px;
  float: left;
  /* background: olive; */
  background: rgb(245, 245, 245);
}
.lc_video {
  width: 500px;
  height: 300px;
  margin-left: 580px;
  /* background: rgb(245, 245, 245); */
  
}
</style>