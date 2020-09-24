<template>
  <div>
    <vue-tinymce v-model="content" :setting="setting" />
  </div>
</template>

<script>
import host from "../../libs/utils";
export default {
  name: "app",
  data() {
    return {
      content: "",
      setting: {
        menubar: false,
        toolbar:
          "undo redo | fullscreen | formatselect alignleft aligncenter alignright alignjustify indent2em| link unlink | numlist bullist | image media table | fontselect fontsizeselect forecolor backcolor lineheight| bold italic underline strikethrough | indent outdent | superscript subscript | removeformat |",
        toolbar_drawer: "sliding",
        quickbars_selection_toolbar:
          "removeformat | bold italic underline strikethrough | fontsizeselect forecolor backcolor",
        plugins:
          "link image media table lists fullscreen quickbars indent2em lineheight",
        language: "zh_CN",
        height: 600,
        images_upload_url: host.host2 + "upload.ashx",
        images_upload_base_path: host.baseUrl,
      },
    };
  },
};
</script>

<style>
</style>