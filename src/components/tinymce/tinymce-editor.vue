<template>
  <div class="tinymce-editor">
    <div>
      <el-form :inline="true" :model="text" class="demo-form-inline">
        <el-form-item label="标题">
          <el-input v-model="text.title" placeholder="请输入标题"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary">发布</el-button>
        </el-form-item>
      </el-form>
    </div>
    <editor :id="tinymceId" v-model="tinymceHtml" :init="init"></editor>
  </div>
</template>

<script>
import {post} from '../../service/http'

import tinymce from "tinymce/tinymce";
import Editor from "@tinymce/tinymce-vue";
import "tinymce/icons/default/icons.min.js";
import "tinymce/themes/silver/theme";

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
  name: "tinymce",
  components: {
    Editor
  },
  data() {
    return {
      text: {
        title: "",
        image: ""
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
        height: 500,
        branding: false,
        images_upload_handler: (blobInfo, success, failure) => {
          let formdata = new window.FormData();
          formdata.append("file", blobInfo.blob());
          console.log(formdata.file)
          post("https://localhost:44309/Handler/Admin/SaveIcon.ashx", blobInfo.blob())
            .then(res => {
              if (res != "") {
                success(res);
              } else {
                failure("上传失败!");
              }
            });
        }
      }
    };
  },
  mounted() {
    tinymce.init({});
  }
};
</script>
<style scoped>
.btn {
  margin-top: 10px;
}
</style>