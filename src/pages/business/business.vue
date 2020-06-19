<template>
  <div class="business">
    <img src="../../assets/business process.png" alt />
    <div class="b-contain">
      <template v-for="(item ,index) in data">
        <flowchart :key="index" :ywlc="item"></flowchart>
      </template>
      <vodeoplayer :data="data"></vodeoplayer>
    </div>
  </div>
</template>

<script>
import vodeoplayer from "./videoplayer";
import flowchart from "./flowchart";
import host from "../../libs/utils";
import { post } from "../../service/http";
export default {
  data() {
    return {
      data: []
    };
  },
  created() {
    post(host.host3 + "QueryAllYWLC.ashx").then(res => {
      if (res.errCode === "SUCCESS") {
        this.data = res.data;
        for (let i = 0; i < this.data.length; i++) {
          this.data[i].LCT = JSON.parse(this.data[i].LCT);
          this.data[i].SP = JSON.parse(this.data[i].SP);
        }
      }
    });
  },
  components: {
    vodeoplayer,
    flowchart
  },
  methods: {
    
  }
};
</script>

<style scoped>
.business {
  width: 100%;
}
.business img {
  width: 100%;
}
.b-contain {
  width: 1080px;
  margin: 0px auto;
}
</style>