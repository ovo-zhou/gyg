<template>
  <div>
    <div class="back_img" id="backimg" :style="{backgroundImage: 'url(' + curimg + ')' }"></div>
    <textBox></textBox>
    <news></news>
    <functionbar></functionbar>
  </div>
</template>
<script>
import news from "./news";
import functionbar from "./functionbar";
import textBox from './textBox'
import img1 from "../../assets/back1.jpg";
import img2 from "../../assets/back2.jpg";
import img3 from "../../assets/culture.png";
export default {
  components: {
    news,
    functionbar,
    textBox
  },
  created() {
    
    window.setInterval(this.change, 3000);
  },
  data() {
    return {
      img: [img1, img2, img3],
      curimg: img1,
    };
  },
  methods: {
   
    change() {
      var i = Math.floor(Math.random() * 3);
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
}
@media screen and (max-width: 1000px)
{
.back_img{ width:1080px; }
}
</style>