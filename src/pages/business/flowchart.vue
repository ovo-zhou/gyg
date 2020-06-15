<template>
  <div class="flowchart">
    <h1>装货业务流程</h1>
    <el-image
      style="width: 360px; height: 250px"
      src="https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg"
      fit="contain"
      :preview-src-list="srcList"
    ></el-image>
    <el-image
      style="width: 360px; height: 250px"
      src="https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg"
      fit="contain"
      :preview-src-list="srcList"
    ></el-image>
    <el-image
      style="width: 360px; height: 250px"
      src="https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg"
      fit="contain"
      :preview-src-list="srcList"
    ></el-image>
     <el-image
      style="width: 360px; height: 250px"
      src="https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg"
      fit="contain"
      :preview-src-list="srcList"
    ></el-image>
  </div>
</template>

<script>
export default {
  data() {
    return {
      url:
        "https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg",
      srcList: [
        "https://fuss10.elemecdn.com/8/27/f01c15bb73e1ef3793e64e6b7bbccjpeg.jpeg",
        "https://fuss10.elemecdn.com/1/8e/aeffeb4de74e2fde4bd74fc7b4486jpeg.jpeg"
      ]
    };
  }
};
</script>

<style scoped>
.flowchart {
  width: 100%;
  margin-top: 30px;
}
.flowchart h1 {
  margin-bottom: 20px;
  border-bottom: 2px solid #0e68b1;
}
</style>