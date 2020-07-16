<template>
  <div>
    <div class="title">
      <el-form ref="form" :model="form" label-width="80px">
        <el-form-item label="标题">
          <el-input v-model="form.title"></el-input>
        </el-form-item>
      </el-form>
    </div>
    <Editor id="tinymce" v-model="tinymceHtml" :init="init"></Editor>
    <template v-if="show">
      <div class="btn">
        <el-button type="primary" @click="handleClick">{{btnMessage}}</el-button>
      </div>
    </template>
  </div>
</template>

<script>
import tinymce from "tinymce/tinymce";
import "tinymce/themes/silver/theme";
import Editor from "@tinymce/tinymce-vue";
// import "tinymce/icons/default/icons.min.js";
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
        title: ""
      },
      tinymceHtml: "",
      show: true,
      btnMessage: "发布",
      flag: "发布",
      init: {
        language_url: "/tinymce/langs/zh_CN.js",
        language: "zh_CN",
        skin_url: "/tinymce/skins/ui/oxide",
        plugins:
          "lineheight lists image media table wordcount code fullscreen help  toc fullpage autosave nonbreaking insertdatetime visualchars visualblocks searchreplace spellchecker pagebreak link charmap paste print preview hr anchor",

        toolbar: [
          "newdocument undo redo | formatselect visualaid|cut copy paste selectall| bold italic underline strikethrough lineheight|codeformat blockformats| superscript subscript  | forecolor backcolor | alignleft aligncenter alignright alignjustify | outdent indent |  removeformat ",

          "code  bullist numlist | lists image media table link |fullscreen help toc fullpage restoredraft nonbreaking insertdatetime visualchars visualblocks searchreplace spellchecker pagebreak anchor charmap  pastetext print preview hr"
        ],
        branding: false,
        height: 630,
        images_upload_handler: function(blobInfo, success) {
          let xhr = new XMLHttpRequest();
          xhr.withCredentials = false;
          xhr.open("POST", host.host2 + "upload.ashx");
          xhr.onload = function() {
            let url = JSON.parse(xhr.responseText).url;
            success(url);
          };
          let formData = new FormData();
          formData.append("file", blobInfo.blob(), blobInfo.filename());
          xhr.send(formData);
        }
      }
    };
  },
  mounted() {
    tinymce.init({});
  },
  created() {
    if (this.$route.query.flag === "查看") {
      this.flag = "查看";
      this.form.title = this.$route.query.new.XWBT;
      this.imageUrl = this.$route.query.new.COVER_IMG;
      this.tinymceHtml = this.$route.query.new.XWNR;
      this.show = false;
    }
    if (this.$route.query.flag === "编辑") {
      this.flag = "编辑";
      this.form.title = this.$route.query.new.XWBT;
      this.imageUrl = this.$route.query.new.COVER_IMG;
      this.tinymceHtml = this.$route.query.new.XWNR;
      this.show = true;
      this.btnMessage = "确认修改";
    }
  },
  components: {
    Editor
  },
  methods: {
    handleClick() {
      if (this.flag === "发布") {
        this.handleRelease();
      } else if (this.flag === "编辑") {
        this.handleEdit();
      }
    },
    handleEdit() {
      if (this.form.title === "") {
        this.$message.error("标题不能为空");
        return;
      }
      if (this.tinymceHtml === "") {
        this.$message.error("请填写内容");
        return;
      }
      if (this.form.title.length > 200) {
        this.$message.error("标题过长");
        return;
      }
      let data = {
        ID: "",
        LM: "通知公告",
        XWBT: "",
        XWNR: "",
        FBRBH: "",
        FBRXM: "",
        SHRBH: "",
        SHRXM: "",
        COVER_IMG: ""
      };
      data.ID = this.$route.query.new.ID;
      data.XWBT = this.form.title;
      data.XWNR = this.tinymceHtml;
      data.FBRBH = JSON.parse(sessionStorage.getItem("user")).Yhbh;
      data.FBRXM = JSON.parse(sessionStorage.getItem("user")).XM;
      this.$alert("确认修改？", "提示", {
        confirmButtonText: "确定",
        callback: action => {
          if (action === "confirm") {
            post(host.host2 + "UpdateNews.ashx", data).then(res => {
              if (res.errCode === "SUCCESS") {
                this.$message({
                  message: "修改成功",
                  type: "success"
                });
                this.form.title = "";
                this.imageUrl = "";
                this.tinymceHtml = "";
                this.$router.push("/admin/nmanage");
              }else{
                this.$message.error("出现了一点问题，请联系技术人员")
              }
            });
          }
        }
      });
    },
    handleRelease() {
      if (this.form.title === "") {
        this.$message.error("标题不能为空");
        return;
      }
      if (this.tinymceHtml === "") {
        this.$message.error("请填写内容");
        return;
      }
      if (this.form.title.length > 200) {
        this.$message.error("标题过长");
        return;
      }
      let data = {
        LM: "通知公告",
        XWBT: "",
        XWNR: "",
        FBRBH: "",
        FBRXM: "",
        SHRBH: "",
        SHRXM: "",
        COVER_IMG: ""
      };
      data.XWBT = this.form.title;
      data.XWNR = this.tinymceHtml;
      data.FBRBH = JSON.parse(sessionStorage.getItem("user")).Yhbh;
      data.FBRXM = JSON.parse(sessionStorage.getItem("user")).XM;
      this.$alert("确认发布？", "提示", {
        confirmButtonText: "确定",
        callback: action => {
          if (action === "confirm") {
            post(host.host2 + "AddNews.ashx", data).then(res => {
              // console.log(res);
              if (res.errCode === "SUCCESS") {
                this.$message({
                  message: "发布成功",
                  type: "success"
                });
                this.form.title = "";
                this.imageUrl = "";
                this.tinymceHtml = "";
              }else{
                this.$message.error("出现了一点问题，请联系技术人员")
              }
            });
          }
        }
      });
    }
  },
  watch: {
    $route(to, from) {
      if (to.query.flag != from.query.flag) {
        this.flag = "发布";
        this.form.title = "";
        this.imageUrl = "";
        this.tinymceHtml = "";
        this.show = true;
        this.btnMessage = "发布";
      }
    }
  }
};
</script>

<style scoped>
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
.btn {
  margin-top: 10px;
}
</style>