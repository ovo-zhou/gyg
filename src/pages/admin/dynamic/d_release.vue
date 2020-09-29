<template>
  <div>
    <div class="title">
      <el-form ref="form" :model="form" label-width="80px">
        <el-form-item label="标题">
          <el-input v-model="form.title"></el-input>
        </el-form-item>
        <el-form-item label="类型">
          <el-select v-model="form.LM" placeholder="请选择">
            <el-option label="行业动态(外网)" value="行业动态"></el-option>
            <el-option label="公司要闻(内网)" value="公司要闻"></el-option>
            <el-option label="公开新闻(内外网)" value="公开新闻"></el-option>
            <el-option label="对外公告(外网)" value="对外公告"></el-option>
            <el-option label="对内公告(内网)" value="对内公告"></el-option>
            <el-option label="公开公告(内外网)" value="公开公告"></el-option>
            <el-option label="党群动态" value="党群动态"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="发布时间">
          <el-date-picker
            v-model="time"
            type="datetime"
            placeholder="选择日期时间"
            default-time="12:00:00"
            value-format="yyyy/MM/dd HH:mm:ss"
          ></el-date-picker>
        </el-form-item>
        <el-form-item label="封面图">
          <el-upload
            class="avatar-uploader"
            :action="imgUpLoadUrl"
            :show-file-list="false"
            :on-success="handleAvatarSuccess"
            accept="image/jpeg, image/jpg, image/png"
          >
            <img v-if="imageUrl" :src="imageUrl" class="avatar" />
            <i v-else class="el-icon-plus avatar-uploader-icon"></i>
          </el-upload>
          <span style="color:red">图片比例大致为300：150,宽高略微不一致也行，没有封面图可以不用上传</span>
        </el-form-item>
      </el-form>
    </div>
    <div style="width: 800px">
      <vue-tinymce v-model="tinymceHtml" :setting="setting" />
    </div>
    <template v-if="show">
      <div class="btn">
        <el-button type="primary" @click="handleClick">{{
          btnMessage
        }}</el-button>
      </div>
    </template>
  </div>
</template>

<script>
import host from "../../../libs/utils";
import { post } from "../../../service/http";
import { dateToString1 } from "../../../assets/vehicleResJs/common";
export default {
  data() {
    return {
      form: {
        title: "",
        LM: "行业动态",
      },
      tinymceHtml: "",
      imageUrl: "",
      imgUpLoadUrl: "",
      path: "",
      show: true,
      btnMessage: "发布",
      flag: "发布",
      time: "",
      setting: {
        menubar: false,
        toolbar:
          "preview| fullscreen | formatselect alignleft aligncenter alignright alignjustify indent2em| link unlink | numlist bullist | image media table | fontselect fontsizeselect forecolor backcolor lineheight| bold italic underline strikethrough | indent outdent | superscript subscript | removeformat | cut copy paste pastetext ",
        toolbar_drawer: "false",
        plugins:
          "link image media table lists fullscreen indent2em lineheight preview",
        language: "zh_CN",
        height: 1200,
        images_upload_url: host.host2 + "upload.ashx",
        images_upload_base_path: host.baseUrl,
      },
    };
  },
  mounted() {
    this.time = dateToString1(new Date());
    this.imgUpLoadUrl = host.host2 + "upload.ashx";
  },
  created() {
    if (this.$route.query.flag === "查看") {
      this.flag = "查看";
      this.form.title = this.$route.query.new.XWBT;
      this.form.LM = this.$route.query.new.LM;
      this.time = this.$route.query.new.FBSJ;
      this.imageUrl = host.baseUrl + this.$route.query.new.COVER_IMG;
      this.tinymceHtml = this.$route.query.new.XWNR;
      this.show = false;
    }
    if (this.$route.query.flag === "编辑") {
      this.flag = "编辑";
      this.form.title = this.$route.query.new.XWBT;
      this.form.LM = this.$route.query.new.LM;
      this.time = this.$route.query.new.FBSJ;
      this.imageUrl = host.baseUrl + this.$route.query.new.COVER_IMG;
      this.tinymceHtml = this.$route.query.new.XWNR;
      this.show = true;
      this.btnMessage = "确认修改";
      // console.log(this.form.LM)
    }
  },
  components: {
    tinymce,
  },
  methods: {
    handleAvatarSuccess(res) {
      // console.log(res);
      this.path = res.location;
      this.imageUrl = host.baseUrl + res.location;
    },
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
      if (this.time == "" || this.time == null) {
        this.$message.error("请选择发布时间！");
        return;
      }
      let data = {
        ID: "",
        LM: "",
        FBSJ: "",
        XWBT: "",
        XWNR: "",
        FBRBH: "",
        FBRXM: "",
        SHRBH: "",
        SHRXM: "",
        COVER_IMG: "",
      };
      data.ID = this.$route.query.new.ID;
      data.LM = this.form.LM;
      data.FBSJ = this.time;
      data.XWBT = this.form.title;
      data.XWNR = this.tinymceHtml;
      data.FBRBH = JSON.parse(sessionStorage.getItem("user")).Yhbh;
      data.FBRXM = JSON.parse(sessionStorage.getItem("user")).XM;
      data.COVER_IMG = this.path;
      // console.log(data);
      this.$alert("确认修改？", "提示", {
        confirmButtonText: "确定",
        callback: (action) => {
          if (action === "confirm") {
            post(host.host2 + "UpdateNews.ashx", data).then((res) => {
              if (res.errCode === "SUCCESS") {
                this.$message({
                  message: "修改成功",
                  type: "success",
                });
                this.form.title = "";
                this.imageUrl = "";
                this.tinymceHtml = "";
                this.time = "";
                this.$router.push("/admin/dmanage");
              } else {
                this.$message.error("出现了一点问题，请联系技术人员");
              }
            });
          }
        },
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
      if (this.time == "" || this.time == null) {
        this.$message.error("请选择发布时间！");
        return;
      }
      let data = {
        LM: "",
        FBSJ: "",
        XWBT: "",
        XWNR: "",
        FBRBH: "",
        FBRXM: "",
        SHRBH: "",
        SHRXM: "",
        COVER_IMG: "",
      };
      data.LM = this.form.LM;
      data.FBSJ = this.time;
      data.XWBT = this.form.title;
      data.XWNR = this.tinymceHtml;
      data.FBRBH = JSON.parse(sessionStorage.getItem("user")).Yhbh;
      data.FBRXM = JSON.parse(sessionStorage.getItem("user")).XM;
      data.COVER_IMG = this.path;
      // console.log(data);
      this.$alert("确认发布？", "提示", {
        confirmButtonText: "确定",
        callback: (action) => {
          if (action === "confirm") {
            post(host.host2 + "AddNews.ashx", data).then((res) => {
              // console.log(res);
              if (res.errCode === "SUCCESS") {
                this.$message({
                  message: "发布成功",
                  type: "success",
                });
                this.form.title = "";
                this.imageUrl = "";
                this.tinymceHtml = "";
                this.time = "";
              } else {
                this.$message.error("出现了一点问题，请联系技术人员");
              }
            });
          }
        },
      });
    },
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
    },
  },
};
</script>

<style scoped>
.title {
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
.btn {
  margin-top: 10px;
}
.look {
  width: 100%;
  min-height: 1200;
  background: white;
}
</style>