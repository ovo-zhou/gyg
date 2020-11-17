<template>
  <div>
    <div
      class="back_img"
      id="backimg"
      :style="{ backgroundImage: 'url(' + curimg + ')' }"
    >
      <div class="title">
        <p class="title_text">重庆果园港--西部大港 两江引擎</p>
        <p class="title_en">
          Chongqing Guoyuan Port--a western grand port and the engine of
          Liangjiang New Area
        </p>
      </div>
    </div>
    <textBox></textBox>
    <news></news>
    <functionbar></functionbar>
    <ad></ad>
  </div>
</template>
<script>
import news from "./news";
import functionbar from "./functionbar";
import textBox from "./textBox";
import ad from "./ad";
import img1 from "../../assets/back1.jpg";
import img2 from "../../assets/back2.jpg";
// import img3 from "../../assets/culture.png";
export default {
  components: {
    news,
    functionbar,
    textBox,
    ad,
  },
  created() {
    window.setInterval(this.change, 3000);
  },
  data() {
    return {
      img: [img1, img2],
      curimg: img1,
    };
  },
  methods: {
    change() {
      var i = Math.floor(Math.random() * 2);
      this.curimg = this.img[i];
    },
  },
};
</script>
<style scoped>
.back_img {
  width: 100%;
  height: 550px;
  background-image: url(../../assets/culture.png);
  background-repeat: no-repeat;
  background-size: 100% 100%;
  -moz-background-size: 100% 100%;
  position: relative;
}
@media screen and (max-width: 1000px) {
  .back_img {
    width: 1080px;
  }
}
.title {
  background-color: rgba(20, 20, 20, 0.4);
  width: 1080px;
  padding-top: 30px;
  padding-bottom: 30px;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
}
.title_text {
  color: white;
  font-size: 55px;
  font-weight: 600;
  text-align: center;
}
.title_en {
  color: white;
  font-size: 20px;
  text-align: center;
}
</style>