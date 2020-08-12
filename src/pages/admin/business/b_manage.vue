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
            <p class="videoName" :key="index" @click="play(item,scope.row)">{{scope.row.YWMC}}.mp4</p>
          </template>
        </template>
      </el-table-column>
      <el-table-column label="操作">
        <template slot-scope="scope">
          <el-button size="mini" @click="handleEdit(scope.row)">编辑</el-button>
          <el-button size="mini" type="danger" @click="handleDelete(scope.$index,scope.row)">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
    <el-dialog title="视频预览" :visible.sync="dialogVisible" width="30%" :before-close="handleClose">
      <video id="play" :src="curVideo" width="440" height="240" controls></video>
    </el-dialog>
    <el-dialog title="图像预览" :visible.sync="dialogVisible2" width="30%">
      <el-image style="width: 440px; height: 240px" :src="curImg"></el-image>
    </el-dialog>
    <el-dialog title="编辑" :visible.sync="dialogVisible1" width="40%" :before-close="handleClose1">
      <el-form ref="form" :model="curRow" label-width="100px">
        <el-form-item label="业务名称">
          <el-input v-model="curRow.YWMC"></el-input>
        </el-form-item>
        <el-form-item label="已有流程图">
          <el-tag
            v-for="item in curRow.LCT"
            :key="item"
            closable
            @click="showImg(item)"
            @close="deleteImg(item)"
          >点击查看</el-tag>
        </el-form-item>
        <el-form-item label="新增流程图">
          <el-upload
            :action="imgUploadUrl"
            list-type="picture-card"
            :on-preview="handlePictureCardPreview"
            :on-success="handleSuccess1"
            accept="image/jpeg, image/jpg, image/png"
          >
            <i class="el-icon-plus"></i>
          </el-upload>
          <el-dialog :visible.sync="dialogVisible">
            <img width="100%" :src="dialogImageUrl" alt />
          </el-dialog>
        </el-form-item>
        <el-form-item label="已有视频">
          <el-tag
            v-for="item in curRow.SP"
            :key="item"
            closable
            @click="showVideo(item)"
            @close="deleteVideo(item)"
          >点击查看</el-tag>
        </el-form-item>
        <el-form-item label="新增视频">
          <el-upload class="upload-demo" :action="videoUploadUrl" :on-success="handleSuccess2" accept="video/mp4">
            <el-button size="small" type="primary">点击上传</el-button>
            <div slot="tip" class="el-upload__tip">只能上传MP4文件</div>
          </el-upload>
        </el-form-item>
      </el-form>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible1 = false">取 消</el-button>
        <el-button type="primary" @click="handleModify">提 交</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
import { post } from "../../../service/http";
import host from "../../../libs/utils";
export default {
  data() {
    return {
      imgUploadUrl: "",
      videoUploadUrl: "",
      tableData: [],
      dialogVisible: false,
      dialogVisible1: false,
      dialogVisible2: false,
      curVideo: "",
      curImg: "",
      curRow: "",
      form: {
        name: ""
      }
    };
  },
  created() {
    this.getData();
    this.videoUploadUrl = host.host3 + "UpLoadVideo.ashx";
    this.imgUploadUrl = host.host3 + "UpLoadImg.ashx";
  },
  methods: {
    getData() {
      post(host.host3 + "QueryAllYWLC.ashx", {}).then(res => {
        if (res.errCode === "SUCCESS") {
          this.tableData = res.data;
          for (let i = 0; i < this.tableData.length; i++) {
            this.tableData[i].LCT = JSON.parse(this.tableData[i].LCT);
            for(let j=0;j<this.tableData[i].LCT.length;j++){
              this.tableData[i].LCT[j]=host.baseUrl+this.tableData[i].LCT[j]
            }
            this.tableData[i].SP = JSON.parse(this.tableData[i].SP);
            for(let k=0;k<this.tableData[i].SP.length;k++){
              this.tableData[i].SP[k]=host.baseUrl+ this.tableData[i].SP[k]
            }
          }
          console.log(JSON.parse(this.tableData));
        }
      });
    },
    play(item) {
      this.dialogVisible = true;
      this.curVideo =item;
    },
    handleEdit(row) {
      console.log(row);
      this.curRow = row;
      this.dialogVisible1 = true;
    },
    handleDelete(index, row) {
      // console.log(row.ID);
      this.$alert("删除操作不可逆，确认删除？", "警告", {
        confirmButtonText: "确定",
        callback: action => {
          if (action === "confirm") {
            post(host.host3 + "DeleteYWLC.ashx", { ID: row.ID }).then(res => {
              // console.log(res);
              if (res.errCode === "SUCCESS") {
                this.$message({
                  message: "删除成功",
                  type: "success"
                });
                this.tableData.splice(index, 1);
              }
            });
          }
        }
      });
    },
    handleClose(done) {
      document.getElementById("play").pause();
      done();
    },
    handleClose1(done) {
      done();
    },
    handleSuccess1(res) {
      this.curRow.LCT.push(host.baseUrl+ res.url);
      // console.log(this.curRow);
    },
    handleSuccess2(res) {
      this.curRow.SP.push(host.baseUrl+ res.url);
      // console.log(this.curRow);
    },
    handleModify() {
      this.$alert("确认修改？", "提示", {
        confirmButtonText: "确定",
        callback: action => {
          if (action === "confirm") {
            for(let i=0;i<this.curRow.LCT.length;i++){
              this.curRow.LCT[i]=this.curRow.LCT[i].replace(host.baseUrl,"")
            }
            for(let j=0;j<this.curRow.LCT.length;j++){
              this.curRow.SP[j]=this.curRow.SP[j].replace(host.baseUrl,"")
            }
            post(host.host3 + "UpdateYWLC.ashx", this.curRow).then(res => {
              if (res.errCode === "SUCCESS") {
                this.$message({
                  message: "修改成功",
                  type: "success"
                });
                this.curRow = "";
              }
            });
          }
        }
      });
    },
    showImg(item) {
      this.curImg = item;
      this.dialogVisible2 = true;
    },
    showVideo(item) {
      this.curVideo = item;
      this.dialogVisible = true;
    },
    getIndex(item, arr) {
      for (let index = 0; index < arr.length; index++) {
        if (arr[index] == item) {
          return index;
        }
      }
    },
    deleteImg(item) {
      this.$alert("删除后记得提交哦", "提示", {
        confirmButtonText: "确定",
        callback: action => {
          if (action === "confirm") {
            let index = this.getIndex(item, this.curRow.LCT);
            this.curRow.LCT.splice(index, 1);
          }
        }
      });
    },
    deleteVideo(item) {
      this.$alert("删除后记得提交哦", "提示", {
        confirmButtonText: "确定",
        callback: action => {
          if (action === "confirm") {
            let index = this.getIndex(item, this.curRow.SP);
            this.curRow.SP.splice(index, 1);
          }
        }
      });
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