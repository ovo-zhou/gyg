<template>
  <div class="business">
    <div class="b-contain">
      <flowchart></flowchart>
      <flowchart></flowchart>
      <flowchart></flowchart>
      <vodeoplayer></vodeoplayer>
    </div>
  </div>
</template>

<script>
import vodeoplayer from "./videoplayer";
import flowchart from './flowchart'
export default {
  components: {
    vodeoplayer,
    flowchart
  }
};
</script>

<style scoped>
.business{
width: 100%;
}
.b-contain{
width: 1080px;
margin:0px auto;
}
</style>