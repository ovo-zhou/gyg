<template>
  <div class="adrelese">
    <el-form :model="form" label-width="80px">
      <el-form-item label="广告图片">
        <el-upload
          class="avatar-uploader"
          :action="imgUploadUrl"
          :show-file-list="false"
          :on-success="handleAvatarSuccess"
        >
          <img v-if="form.img" :src="form.img" class="avatar" />
          <i v-else class="el-icon-plus avatar-uploader-icon"></i>
        </el-upload>
      </el-form-item>
      <el-form-item label="广告链接">
        <el-input v-model="form.url"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="release">发布</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>
<script>
import { baseurl } from "../../../libs/config";
import host from "../../../libs/utils";
import { post } from "../../../service/http";
export default {
  data() {
    return {
      form: {
        img: "",
        url: "",
      },
      imgUploadUrl: "",
      imgurl: "",
    };
  },
  mounted() {
    this.imgUploadUrl = host.host3 + "UpLoadImg.ashx";
  },
  methods: {
    handleAvatarSuccess(res) {
    //   console.log(res);
      this.imgurl = res.url;
      this.form.img = host.baseUrl + res.url;
    },
    release() {
      if (this.imgurl == "") {
        this.$message.error("请上传图片");
        return;
      }
      if (this.form.url == "") {
        this.$message.error("请上传链接");
        return;
      }
      let data = {
        img: this.imgurl,
        url: this.form.url,
      };
      post(host.host6 + "AddAd.ashx", data).then((res) => {
        //   console.log(res)
        if (res.errCode == "SUCCESS") {
          this.$message({
            message: "上传成功！",
            type: "success",
          });
          this.form.img=""
          this.form.url=""
          this.imgurl=""
        }else{
        this.$message.error("请上传失败，联系技术人员！");
        }
      });
    },
  },
};
</script>
<style scoped>
.adrelese {
  width: 600px;
}
.avatar-uploader .el-upload {
  border: 1px dashed #d9d9d9;
  border-radius: 6px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
}
.avatar-uploader .el-upload:hover {
  border-color: #409eff;
}
.avatar-uploader-icon {
  font-size: 28px;
  color: #8c939d;
  width: 178px;
  height: 178px;
  line-height: 178px;
  text-align: center;
}
.avatar {
  width: 178px;
  height: 178px;
  display: block;
}
</style>