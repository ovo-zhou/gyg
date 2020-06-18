<template>
  <div>
    <el-table :data="tableData" style="width: 100%">
      <el-table-column prop="FBSJ" label="发布日期" width="180"></el-table-column>
      <el-table-column prop="YWMC" label="业务名称" width="200"></el-table-column>
      <el-table-column label="流程图" width="180">
        <template slot-scope="scope">
          <el-image
            style="width: 160px; height: 90px"
            :src="scope.row.LCT[0]"
            :preview-src-list="scope.row.LCT"
          ></el-image>
        </template>
      </el-table-column>
      <el-table-column label="视频" width="200">
        <template slot-scope="scope">
          <template v-for="(item,index)  in scope.row.SP">
            <p :id="index" class="videoName" :key="index" @click="play(index,item,scope.row)">{{scope.row.YWMC}}.mp4</p>
          </template>
        </template>
      </el-table-column>
      <el-table-column label="操作">
        <template slot-scope="scope">
          <el-button size="mini" @click="handleEdit(scope.row)">编辑</el-button>
          <el-button size="mini" type="danger">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
    <el-popover placement="left" width="320" height="240" v-model="visible">
      <video id="play" :src="curVideo" width="320" height="240" controls></video>
    </el-popover>
  </div>
</template>

<script>
import { post } from '../../../service/http';
import host from '../../../libs/utils'
export default {
  data() {
    return {
      tableData: [
  ],
      visible: false,
      curVideo: ""
    };
  },
  created(){
   this.getData()
  },
  methods: {
    getData(){
      post(host.host3+"QueryAllYWLC.ashx",{}).then(res=>{
       if(res.errCode==="SUCCESS"){
          this.tableData=res.data
          for(let i=0;i<this.tableData.length;i++){
            this.tableData[i].LCT=JSON.parse(this.tableData[i].LCT)
            this.tableData[i].SP=JSON.parse(this.tableData[i].SP)
          }
          console.log( JSON.parse(this.tableData[0].LCT)[1])
       }
      })
    },
    play(index,e,row) {
      this.curVideo = e;
      this.visible = !this.visible;
      document.getElementById("play").pause();
      if(this.visible){
          document.getElementById(""+index).innerText="点击关闭"
      }
      if(!this.visible){
          let name=row.YWMC+".mp4"
          document.getElementById(""+index).innerText=name
      }
    },
    handleEdit(row){
      console.log(row)
    }
  }
};
</script>

<style scoped>
.videoName {
  color: #409eff; /*#66b1ff;*/
  font-weight: 500;
  font-size: 14px;
  cursor: pointer;
  line-height: 23px;
  text-align: left;
}
.videoName:hover {
  color: #66b1ff;
  text-decoration: underline;
  text-decoration-color: #409eff;
}
</style>