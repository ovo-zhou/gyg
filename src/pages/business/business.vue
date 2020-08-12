<template>
  <div class="business">
    <img src="../../assets/ywlc.png" alt />
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
          for(let j=0;j<this.data[i].LCT.length;j++){
              this.data[i].LCT[j]=host.baseUrl+this.data[i].LCT[j]
            }
          this.data[i].SP = JSON.parse(this.data[i].SP);
          for(let k=0;k<this.data[i].SP.length;k++){
              this.data[i].SP[k]=host.baseUrl+ this.data[i].SP[k]
            }
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
@media screen and (max-width: 1000px)
{
.business img{ width:1080px; }
}
.b-contain {
  width: 1080px;
  margin: 0px auto;
}
</style>