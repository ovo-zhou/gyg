<template>
  <div>
          <el-form ref="form" :model="form" label-width="80px">
            <el-form-item label="标题">
              <el-input v-model="form.title"></el-input>
            </el-form-item>
            <el-form-item label="视频封面">
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
            <el-form-item label="视频上传">
              <el-upload
                class="upload-demo"
                :action="videoUploadUrl"
                :on-success="handleSuccess2"
                accept="video/mp4"
                :limit="1"
              >
                <el-button size="small" type="primary">点击上传</el-button>
                <div slot="tip" class="el-upload__tip">只能上传mp4文件</div>
              </el-upload>
            </el-form-item>
            <el-form-item>
              <el-button type="primary" @click="onSubmit">发布</el-button>
            </el-form-item>
          </el-form>
        </div>
</template>
<script>
import host from "../../../libs/utils";
import { post } from "../../../service/http";
export default {
  data() {
    return {
        data:[],
      imgUploadUrl: "",
      videoUploadUrl: "",
      dialogImageUrl: "",
      dialogVisible: false,
      imgfile: "",
      videofile: "",
      imglist: [],
      form: {
        title: "",
      },
    };
  },
  mounted() {
    this.videoUploadUrl = host.host3 + "UpLoadVideo.ashx";
    this.imgUploadUrl = host.host3 + "UpLoadImg.ashx";
    
  },
  methods: {
    handlePictureCardPreview(file) {
      this.dialogImageUrl = file.url;
      this.dialogVisible = true;
    },
    handleSuccess1(res) {
      this.imgfile = res.url;
      console.log(this.imgfile);
    },
    handleSuccess2(res) {
      this.videofile = res.url;
      console.log(this.videofile);
    },
    onSubmit() {
      if (this.form.title == "") {
        this.$message.error("标题不能为空");
        return;
      }
      if (this.imgfile == "") {
        this.$message.error("视频封面不能为空");
        return;
      }
      if (this.videofile == "") {
        this.$message.error("请上传视频");
        return;
      }

      let data = {
        LM: "直击风采",
        XWBT: "",
        XWNR: "",
        FBRBH: "",
        FBRXM: "",
        SHRBH: "",
        SHRXM: "",
        COVER_IMG: "",
      };
      data.XWBT = this.form.title;
      data.XWNR = this.videofile;
      data.COVER_IMG = this.imgfile;
      data.FBRBH = JSON.parse(sessionStorage.getItem("user")).Yhbh;
      data.FBRXM = JSON.parse(sessionStorage.getItem("user")).XM;
      this.$alert("确认发布？", "提示", {
        confirmButtonText: "确定",
        callback: (action) => {
          if (action === "confirm") {
            post(host.host2 + "AddNews.ashx", data).then((res) => {
              console.log(res);
              if (res.errCode === "SUCCESS") {
                this.$message({
                  message: "发布成功",
                  type: "success",
                });
              } else {
                this.$message.error("出现了一点问题，请联系技术人员");
              }
            });
          }
        },
      });
    },
  },
};
</script>
<style scoped>
</style>