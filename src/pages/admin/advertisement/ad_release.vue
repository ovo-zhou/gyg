<template>
  <div class="adrelese">
    <el-form :model="form" label-width="100px">
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
      <el-form-item label="自定义内容">
    <vue-tinymce v-model="tinymceHtml" :setting="setting" />
       
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="btnHandler">{{btnMessage}}</el-button>
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
      form: {
        img: "",
        url: "",
      },
      imgUploadUrl: "",
      imgurl: "",
      tinymceHtml: "",
      btnMessage:"发布",
      setting: {
        menubar: false,
        toolbar:
          "undo redo | fullscreen | formatselect alignleft aligncenter alignright alignjustify indent2em| link unlink | numlist bullist | image media table | fontselect fontsizeselect forecolor backcolor lineheight| bold italic underline strikethrough | indent outdent | superscript subscript | removeformat |",
        toolbar_drawer: "false",
        quickbars_selection_toolbar:
          "removeformat | bold italic underline strikethrough | fontsizeselect forecolor backcolor",
        plugins:
          "link image media table lists fullscreen indent2em lineheight",
        language: "zh_CN",
        height: 600,
        images_upload_url: host.host2 + "upload.ashx",
        images_upload_base_path: host.baseUrl,
      },
    };
  },
  components: {
    tinymce
  },
  mounted() {
    this.imgUploadUrl = host.host3 + "UpLoadImg.ashx";
    if (this.$route.query.flag === "编辑") {
      this.form.img = this.$route.query.new.IMGURL;
      this.imgurl=this.$route.query.new.IMGURL.replace(host.baseUrl, '');
      this.form.url=this.$route.query.new.LINKURL;
      this.tinymceHtml = this.$route.query.new.CONTENT;
      this.btnMessage = "确认修改";
    }
  },
  methods: {
    handleAvatarSuccess(res) {
      //   console.log(res);
      this.imgurl = res.url;
      this.form.img = host.baseUrl + res.url;
    },
    btnHandler(){
      if(this.btnMessage==="发布"){
        this.release()
      }else{
        this.edit()
      }
    },
    edit(){
      if (this.imgurl == "") {
        this.$message.error("请上传图片");
        return;
      }
      var activeEditor = tinymce.activeEditor;
      var editBody = activeEditor.getBody();
      activeEditor.selection.select(editBody);
      var text = activeEditor.selection.getContent({ format: "text" }).trim();
      if(this.form.url==""&&text.length==0){
       this.$message.error("链接地址和自定义内容不能同时为空");
       return
      }
      if(this.form.url!=""&&text.length!=0){
       this.$message.error("不能同时输入链接地址和自定义内容");
       return
      }
      if(this.tinymceHtml.length>100000){
       this.$message.error("自定义内容不能太长哦！");
      }
      if(this.form.url.length>4000){
       this.$message.error("广告链接不能太长哦！");
      }
      let data = {
        ID:this.$route.query.new.ID,
        img: this.imgurl, //图片相对地址
        url: this.form.url, //广告链接
        content: this.tinymceHtml, //自定义的广告内容
      };
      post(host.host6+"UpDateAd.ashx",data).then(res=>{
        if(res.errCode=="SUCCESS"){
           this.$message({
            message: "修改成功",
            type: "success",
          });
          this.$router.push("/admin/admanage")
        }
      })
    },
    release() {
      if (this.imgurl == "") {
        this.$message.error("请上传图片");
        return;
      }
      var activeEditor = tinymce.activeEditor;
      var editBody = activeEditor.getBody();
      activeEditor.selection.select(editBody);
      var text = activeEditor.selection.getContent({ format: "text" }).trim();
      if(this.form.url==""&&text.length==0){
       this.$message.error("链接地址和自定义内容不能同时为空");
       return
      }
      if(this.form.url!=""&&text.length!=0){
       this.$message.error("不能同时输入链接地址和自定义内容");
       return
      }
      if(this.tinymceHtml.length>100000){
       this.$message.error("自定义内容不能太长哦！");
      }
      if(this.form.url.length>4000){
       this.$message.error("广告链接不能太长哦！");
      }
      let data = {
        img: this.imgurl, //图片相对地址
        url: this.form.url, //广告链接
        content: this.tinymceHtml, //自定义的广告内容
      };
      // console.log(data);
      post(host.host6 + "AddAd.ashx", data).then((res) => {
        //   console.log(res)
        if (res.errCode == "SUCCESS") {
          this.$message({
            message: "上传成功！",
            type: "success",
          });
          this.form.img = "";
          this.form.url = "";
          this.imgurl = "";
          this.tinymceHtml=""
        } else {
          this.$message.error("请上传失败，联系技术人员！");
          // console.log(res)
        }
      });
    },
  },
   watch: {
    $route(to, from) {
      if (to.query.flag != from.query.flag) {
        this.form.img = "";
        this.form.url = "";
        this.tinymceHtml = "";
        this.btnMessage = "发布";
      }
    },
  },
};
</script>
<style scoped>
.adrelese {
  width: 100%;
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