<template>
  <div>
    <el-table :data="tableData" style="width: 100%">
      <el-table-column prop="date" label="发布日期" width="180"></el-table-column>
      <el-table-column prop="name" label="业务名称" width="200"></el-table-column>
      <el-table-column label="流程图" width="180">
        <template slot-scope="scope">
          <el-image
            style="width: 160px; height: 90px"
            :src="scope.row.imagelist[0]"
            :preview-src-list="scope.row.imagelist"
          ></el-image>
        </template>
      </el-table-column>
      <el-table-column label="视频" width="200">
        <template slot-scope="scope">
          <template v-for="(item,index)  in scope.row.videolist">
            <p :id="index" class="videoName" :key="index" @click="play(index,item,scope.row)">{{scope.row.name}}.mp4</p>
          </template>
        </template>
      </el-table-column>
      <el-table-column label="操作">
        <template>
          <el-button size="mini">编辑</el-button>
          <el-button size="mini" type="danger">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
    <el-popover placement="left" width="320" height="240" v-model="visible">
      <video id="play" :src="curVideo" width="320" height="240" controls></video>
    </el-popover>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tableData: [
        {
          date: "2016-05-02 22:22:22",
          name: "卸货卸货卸货卸货卸货卸货卸",
          imagelist: [
            "https://img-blog.csdn.net/20171124095749124?watermark/2/text/aHR0cDovL2Jsb2cuY3Nkbi5uZXQvcXFfMzA1NzQ3ODU=/font/5a6L5L2T/fontsize/400/fill/I0JBQkFCMA==/dissolve/70/gravity/Center",
            "https://img-blog.csdn.net/20171124095805906?watermark/2/text/aHR0cDovL2Jsb2cuY3Nkbi5uZXQvcXFfMzA1NzQ3ODU=/font/5a6L5L2T/fontsize/400/fill/I0JBQkFCMA==/dissolve/70/gravity/Center",
            "https://img-blog.csdn.net/20171124095811090?watermark/2/text/aHR0cDovL2Jsb2cuY3Nkbi5uZXQvcXFfMzA1NzQ3ODU=/font/5a6L5L2T/fontsize/400/fill/I0JBQkFCMA==/dissolve/70/gravity/Center",
            "https://img-blog.csdn.net/20171124095814928?watermark/2/text/aHR0cDovL2Jsb2cuY3Nkbi5uZXQvcXFfMzA1NzQ3ODU=/font/5a6L5L2T/fontsize/400/fill/I0JBQkFCMA==/dissolve/70/gravity/Center"
          ],
          videolist: [
            "http://vfx.mtime.cn/Video/2019/02/04/mp4/190204084208765161.mp4",
            "http://vfx.mtime.cn/Video/2019/02/04/mp4/190204084208765161.mp4",
            "http://vfx.mtime.cn/Video/2019/02/04/mp4/190204084208765161.mp4",
            "http://vfx.mtime.cn/Video/2019/02/04/mp4/190204084208765161.mp4"
          ]
        }
      ],
      visible: false,
      curVideo: ""
    };
  },
  methods: {
    play(index,e,row) {
      this.curVideo = e;
      this.visible = !this.visible;
      document.getElementById("play").pause();
      if(this.visible){
          document.getElementById(""+index).innerText="点击关闭"
      }
      if(!this.visible){
          let name=row.name+".mp4"
          document.getElementById(""+index).innerText=name
      }
    }
  }
};
</script>

<style scoped>
.videoName {
  color: #409eff; /*#66b1ff;*/
  font-weight: 500;
  font-size: 14px;
  cursor: pointer;
  line-height: 23px;
  text-align: left;
}
.videoName:hover {
  color: #66b1ff;
  text-decoration: underline;
  text-decoration-color: #409eff;
}
</style>