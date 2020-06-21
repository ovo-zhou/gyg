<template>
  <div>
    <el-form ref="form" :model="form" label-width="80px">
      <el-form-item label="业务名称">
        <el-input v-model="form.name"></el-input>
      </el-form-item>
      <el-form-item label="流程图">
        <el-upload
          :action="imgUploadUrl"
          list-type="picture-card"
          :on-preview="handlePictureCardPreview"
          :on-success="handleSuccess1"
          accept="image/jpeg, image/jpg, image/png"
          :file-list="imgList"
        >
          <i class="el-icon-plus"></i>
        </el-upload>
        <el-dialog :visible.sync="dialogVisible">
          <img width="100%" :src="dialogImageUrl" alt />
        </el-dialog>
      </el-form-item>
      <el-form-item label="视频">
        <el-upload
          class="upload-demo"
          :action="videoUploadUrl"
          :on-success="handleSuccess2"
          accept="video/mp4"
          :file-list="videoList"
        >
          <el-button size="small" type="primary">点击上传</el-button>
          <div slot="tip" class="el-upload__tip">只能上传mp4文件</div>
        </el-upload>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="release">发布</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import host from "../../../libs/utils";
import { post } from "../../../service/http";
export default {
  created() {
    this.videoUploadUrl = host.host3 + "UpLoadVideo.ashx";
    this.imgUploadUrl = host.host3 + "UpLoadImg.ashx";
  },
  data() {
    return {
      imgUploadUrl: "",
      videoUploadUrl: "",
      form: {
        name: ""
      },
      dialogImageUrl: "",
      dialogVisible: false,
      imgfilelist: [],
      videofileList: [],
      imgList: [],
      videoList: []
    };
  },
  methods: {
    handleRemove1(file, fileList) {
      console.log(file, fileList);
    },
    handlePictureCardPreview(file) {
      this.dialogImageUrl = file.url;
      this.dialogVisible = true;
    },
    handleSuccess1(res) {
      this.imgfilelist.push(res.url);
      // console.log(this.imgfilelist)
    },
    handleSuccess2(res) {
      //  console.log(res)
      this.videofileList.push(res.url);
      // console.log(this.videofileList)
    },
    release() {
      if (this.form.name === "") {
        this.$message.error("业务名称不能为空");
        return;
      }
      if (this.form.name.length > 50) {
        this.$message.error("名称长度过长");
        return;
      }
      let data = {
        YWMC: "",
        LCT: [],
        SP: []
      };
      data.YWMC = this.form.name;
      data.LCT = this.imgfilelist;
      data.SP = this.videofileList;
      // console.log(data);
      this.$alert("确认发布？", "提示", {
        confirmButtonText: "确定",
        callback: action => {
          if (action === "confirm") {
            post(host.host3 + "AddYWLC.ashx", data).then(res => {
              // console.log(res)
              if (res.errCode === "SUCCESS") {
                this.$message({
                  message: "发布成功",
                  type: "success"
                });
                this.form.name = "";
                this.imgList = [];
                this.videoList = [];
              }else{
                this.$message.error("出现了一点问题，请联系技术人员")
              }
            });
          }
        }
      });
    }
  }
};
</script>
<style scoped>
</style>