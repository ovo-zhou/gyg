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
        >
          <i class="el-icon-plus"></i>
        </el-upload>
        <el-dialog :visible.sync="dialogVisible">
          <img width="100%" :src="dialogImageUrl" alt />
        </el-dialog>
      </el-form-item>
      <el-form-item label="视频">
        <el-upload class="upload-demo" :action="videoUploadUrl" :on-success="handleSuccess2">
          <el-button size="small" type="primary">点击上传</el-button>
          <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>
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
import {post} from '../../../service/http'
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
      videofileList: []
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
        if(this.form.name===""){
          this.$message.error("业务名称不能为空")
          return
        }
        let data = {
          YWMC: "",
          LCT: [],
          SP: []
        };
        data.YWMC = this.form.name;
        data.LCT = this.imgfilelist;
        data.SP = this.videofileList;
        console.log(data);
        post(host.host3+"AddYWLC.ashx",data).then(res=>{
          console.log(res)
        })
    }
  }
};
</script>
<style scoped>
</style>