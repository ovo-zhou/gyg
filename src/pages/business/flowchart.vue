<template>
  <div class="flowchart">
    <h1>{{ywlc.YWMC}}</h1>
    <template v-for="(item,index) in ywlc.LCT">
      <el-image
      :key="index"
      style="width: 360px; height: 250px"
      :src="item"
      fit="contain"
      :preview-src-list=" ywlc.LCT"
    ></el-image>
    </template>
  </div>
</template>

<script>
export default {
  props:{
    ywlc:{
      type:Object,
      required:true
    }
  }
}
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