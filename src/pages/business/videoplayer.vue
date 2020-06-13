<template>
  <div class="video">
    <video id="vid" controls :src="videourl" type="video/mp4">
    </video>
    <div class="vlist">
      <template v-for="listitem in videolist">
        <div class="item" :key="listitem.name" @click="changeUrl(listitem.url)">{{listitem.name}}</div>
      </template>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      videourl:
        "http://vfx.mtime.cn/Video/2019/02/04/mp4/190204084208765161.mp4",
      videolist: [
        {
          url:
            "http://vfx.mtime.cn/Video/2019/02/04/mp4/190204084208765161.mp4",
          name: "某某某某某某业务流程.mp4"
        },
        {
          url:
            "http://vfx.mtime.cn/Video/2019/03/21/mp4/190321153853126488.mp4",
          name: "某某某某某某业务流程.mp4"
        },
        {
          url:
            "http://vfx.mtime.cn/Video/2019/03/19/mp4/190319222227698228.mp4",
          name: "某某某某某某业务流程.mp4"
        },
        {
          url:
            "http://vfx.mtime.cn/Video/2019/03/19/mp4/190319212559089721.mp4",
          name: "某某某某某某业务流程.mp4"
        },
        {
          url:
            "http://vfx.mtime.cn/Video/2019/03/18/mp4/190318231014076505.mp4",
          name: "某某某某某某业务流程.mp4"
        },
        {
          url:
            "http://vfx.mtime.cn/Video/2019/03/18/mp4/190318214226685784.mp4",
          name: "某某某某某某业务流程.mp4"
        },
        {
          url:
            "http://vfx.mtime.cn/Video/2019/03/19/mp4/190319104618910544.mp4",
          name: "某某某某某某业务流程.mp4"
        },
        {
          url:
            "http://vfx.mtime.cn/Video/2019/03/19/mp4/190319125415785691.mp4",
          name: "某某某某某某业务流程.mp4"
        },
        {
          url:
            "http://vfx.mtime.cn/Video/2019/03/17/mp4/190317150237409904.mp4",
          name: "某某某某某某业务流程.mp4"
        },
        {
          url:
            "http://vfx.mtime.cn/Video/2019/03/14/mp4/190314223540373995.mp4",
          name: "某某某某某某业务流程.mp4"
        }
      ]
    };
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