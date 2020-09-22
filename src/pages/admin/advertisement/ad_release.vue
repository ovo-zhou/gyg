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
        <Editor id="tinymce" v-model="tinymceHtml" :init="init"></Editor>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="btnHandler">{{btnMessage}}</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>
<script>
import tinymce from "tinymce/tinymce";
import "tinymce/themes/silver/theme";
import Editor from "@tinymce/tinymce-vue";
import "tinymce/icons/default";
//插件
import "../../../assets/tinymce/plugins/lineheight/plugin";
import "tinymce/plugins/image"; // 插入上传图片插件
import "tinymce/plugins/media"; // 插入视频插件
import "tinymce/plugins/table"; // 插入表格插件
import "tinymce/plugins/link"; //超链接插件
import "tinymce/plugins/code"; //代码块插件
import "tinymce/plugins/lists"; // 列表插件
import "tinymce/plugins/contextmenu"; //右键菜单插件
import "tinymce/plugins/wordcount"; // 字数统计插件
import "tinymce/plugins/colorpicker"; //选择颜色插件
import "tinymce/plugins/textcolor"; //文本颜色插件
import "tinymce/plugins/fullscreen"; //全屏
import "tinymce/plugins/help";
import "tinymce/plugins/charmap";
import "tinymce/plugins/paste";
import "tinymce/plugins/print";
import "tinymce/plugins/preview";
import "tinymce/plugins/hr";
import "tinymce/plugins/anchor";
import "tinymce/plugins/pagebreak";
import "tinymce/plugins/spellchecker";
import "tinymce/plugins/searchreplace";
import "tinymce/plugins/visualblocks";
import "tinymce/plugins/visualchars";
import "tinymce/plugins/insertdatetime";
import "tinymce/plugins/nonbreaking";
import "tinymce/plugins/autosave";
import "tinymce/plugins/fullpage";
import "tinymce/plugins/toc";
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
      init: {
        language_url: "/tinymce/langs/zh_CN.js",
        language: "zh_CN",
        skin_url: "/tinymce/skins/ui/oxide",
        plugins:
          "lineheight lists image media table wordcount code fullscreen help  toc fullpage autosave nonbreaking insertdatetime visualchars visualblocks searchreplace spellchecker pagebreak link charmap paste print preview hr anchor",

        toolbar: [
          "newdocument undo redo | formatselect visualaid|cut copy paste selectall| bold italic underline strikethrough lineheight|codeformat blockformats| superscript subscript  | forecolor backcolor | alignleft aligncenter alignright alignjustify | outdent indent |  removeformat ",

          "code  bullist numlist | lists image media table link |fullscreen help toc fullpage restoredraft nonbreaking insertdatetime visualchars visualblocks searchreplace spellchecker pagebreak anchor charmap  pastetext print preview hr",
        ],
        branding: false,
        height: 630,
        images_upload_handler: function (blobInfo, success) {
          let xhr = new XMLHttpRequest();
          xhr.withCredentials = false;
          xhr.open("POST", host.host2 + "upload.ashx");
          xhr.onload = function () {
            let url = host.baseUrl + JSON.parse(xhr.responseText).url;
            success(url);
          };
          let formData = new FormData();
          formData.append("file", blobInfo.blob(), blobInfo.filename());
          xhr.send(formData);
        },
      },
    };
  },
  components: {
    Editor,
  },
  mounted() {
    tinymce.init({});
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
  width: 1000px;
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