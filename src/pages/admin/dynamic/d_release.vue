<template>
  <div>
    <div class="title">
      <el-form ref="form" :model="form" label-width="80px">
        <el-form-item label="标题">
          <el-input v-model="form.title"></el-input>
        </el-form-item>
        <el-form-item label="封面图">
          <el-upload
            class="avatar-uploader"
            action="http://localhost:44309/Handler/Admin/SaveIcon.ashx"
            :show-file-list="false"
            :on-success="handleAvatarSuccess"
          >
            <img v-if="imageUrl" :src="imageUrl" class="avatar" />
            <i v-else class="el-icon-plus avatar-uploader-icon"></i>
          </el-upload>
        </el-form-item>
      </el-form>
    </div>
    <Editor id="tinymce" v-model="tinymceHtml" :init="init"></Editor>
    <div class="btn">
      <el-button type="primary">发布</el-button>
    </div>
  </div>
</template>

<script>
import tinymce from "tinymce/tinymce";
import "tinymce/themes/silver/theme";
import Editor from "@tinymce/tinymce-vue";
import "tinymce/icons/default/icons.min.js";

//插件
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
export default {
  data() {
    return {
      imageUrl: "",
      form: {
        title: ""
      },
      tinymceHtml: "",
      init: {
        language_url: "/tinymce/langs/zh_CN.js",
        language: "zh_CN",
        skin_url: "/tinymce/skins/ui/oxide",
        plugins:
          "lists image media table wordcount code fullscreen help  toc fullpage autosave nonbreaking insertdatetime visualchars visualblocks searchreplace spellchecker pagebreak link charmap paste print preview hr anchor",

        toolbar: [
          "newdocument undo redo | formatselect visualaid|cut copy paste selectall| bold italic underline strikethrough |codeformat blockformats| superscript subscript  | forecolor backcolor | alignleft aligncenter alignright alignjustify | outdent indent |  removeformat ",

          "code  bullist numlist | lists image media table link |fullscreen help toc fullpage restoredraft nonbreaking insertdatetime visualchars visualblocks searchreplace spellchecker pagebreak anchor charmap  pastetext print preview hr"
        ],
        branding: false,
        height: 630,
        images_upload_handler: function(blobInfo, success) {
          let xhr = new XMLHttpRequest();
          xhr.withCredentials = false;
          xhr.open(
            "POST",
            "http://localhost:44309/Handler/Admin/SaveIcon.ashx"
          );
          xhr.onload = function() {
            success(xhr.responseText);
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
  components: {
    Editor
  },
  methods: {
    handleAvatarSuccess(res) {
      console.log(res);
      this.imageUrl = res;
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