<template>
  <div>
    <div id="app">
      <vue-cropper
        ref="cropper"
        :img="option.img"
        :output-size="option.size"
        :output-type="option.outputType"
        :info="true"
        :full="option.full"
        :can-move="option.canMove"
        :can-move-box="option.canMoveBox"
        :fixed-box="option.fixedBox"
        :original="option.original"
        :auto-crop="option.autoCrop"
        :auto-crop-width="option.autoCropWidth"
        :auto-crop-height="option.autoCropHeight"
        :center-box="option.centerBox"
        @real-time="realTime"
        :high="option.high"
      ></vue-cropper>
    </div>
    <div
      class="show-preview"
      :style="{
        width: previews.w + 'px',
        height: previews.h + 'px',
        overflow: 'hidden',
        margin: '5px',
      }"
    >
      <div :style="previews.div">
        <img :src="previews.url" :style="previews.img" />
      </div>
    </div>
    <div class="btnbox">
      <!-- <el-button type="primary" size="small"
        >添加图片<i class="el-icon-plus"></i
      ></el-button> -->
      <label class="btn" for="uploads"
        >添加图片<i class="el-icon-plus"></i
      ></label>
      <input
        type="file"
        id="uploads"
        style="position: absolute; clip: rect(0 0 0 0)"
        accept="image/png, image/jpeg, image/gif, image/jpg"
        @change="uploadImg($event, 1)"
      />
      <el-button type="primary" size="small" @click="refresh"
        >重置<i class="el-icon-refresh"></i
      ></el-button>
      <el-button type="primary" size="small" @click="down"
        >上传到服务器<i class="el-icon-upload el-icon--right"></i
      ></el-button>
    </div>
    
  </div>
</template>
<script>
import { VueCropper } from "vue-cropper";
import host from "../../../libs/utils";
import { post } from "../../../service/http";
export default {
  data() {
    return {
      previews: {},
      fileName: "",
      imgUrl: "",
      option: {
        img: "",
        size: 1,
        full: false,
        outputType: "png",
        canMove: true,
        fixedBox: true,
        original: false,
        canMoveBox: true,
        autoCrop: true,
        // 只有自动截图开启 宽度高度才生效
        autoCropWidth: 300,
        autoCropHeight: 150,
        centerBox: false,
        high: true,
      },
    };
  },
  components: {
    VueCropper,
  },
  methods: {
    uploadImg(e, num) {
      //上传图片
      // this.option.img
      var file = e.target.files[0];
      this.fileName = file.name;
      if (!/\.(gif|jpg|jpeg|png|bmp|GIF|JPG|PNG)$/.test(e.target.value)) {
        alert("图片类型必须是.gif,jpeg,jpg,png,bmp中的一种");
        return false;
      }
      var reader = new FileReader();
      reader.onload = (e) => {
        let data;
        if (typeof e.target.result === "object") {
          // 把Array Buffer转化为blob 如果是base64不需要
          data = window.URL.createObjectURL(new Blob([e.target.result]));
        } else {
          data = e.target.result;
        }
        if (num === 1) {
          this.option.img = data;
        } else if (num === 2) {
          this.example2.img = data;
        }
      };
      // 转化为base64
      // reader.readAsDataURL(file)
      // 转化为blob
      reader.readAsArrayBuffer(file);
    },
    refresh() {
      this.$refs.cropper.refresh();
    },
    realTime(data) {
      // console.log(data);
      this.previews = data;
    },
    down() {
      if (this.option.img == "" && this.fileName == "") {
        this.$message.error("请先上传封面图！");
        return;
      }
      let formData = new FormData();
      // 输出
      this.$refs.cropper.getCropBlob((data) => {
        formData.append("file", data, this.fileName);
        post(host.host2 + "upload.ashx", formData).then((res) => {
          //   console.log(res);
          if (res.url != "") {
            this.imgUrl = res.url;
            this.$message({
              message: "封面图上传成功！",
              type: "success",
            });
          }
        });
      });
    },
  },
};
</script>
<style scoped>
#app {
  width: 600px;
  height: 300px;
}
.btnbox {
  margin-top: 20px;
}
.btn {
  color: #fff;
  background-color: #409eff;
  border-color: #409eff;
  font-size: 12px;
  text-align: center;
  border-radius: 3px;
  padding: 8px 15px;
  cursor: pointer;
  margin-right: 10px;
  position: relative;
  top: 1px;
}
</style>