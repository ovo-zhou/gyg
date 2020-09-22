<template>
  <div>
    <el-table :data="tableData" style="width: 100%">
      <el-table-column prop="FBSJ" label="发布时间" width="180"></el-table-column>
      <el-table-column label="广告图片" width="180">
        <template slot-scope="scope">
          <el-image style="width: 200px; height: 100px" :src="scope.row.IMGURL" :fit="fit"></el-image>
        </template>
      </el-table-column>
      <el-table-column prop="LINKURL" label="链接地址" width="280"></el-table-column>
      <el-table-column label="自定义内容" width="100">
        <template slot-scope="scope">
          <el-link type="primary" @click="toContent(scope.row)">点击查看</el-link>
        </template>
      </el-table-column>
      <el-table-column label="操作" width="200">
        <template slot-scope="scope">
          <el-button size="mini" @click="editHandler(scope.row)">编辑</el-button>
          <el-button size="mini" type="danger" @click="deleteHandler(scope.row)">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
    <el-dialog title="自定义内容" :visible.sync="dialogVisible" width="1000px">
      <div id="content" v-html="content"></div>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>
<script>
import host from "../../../libs/utils";
import { post } from "../../../service/http";
export default {
  data() {
    return {
      tableData: [],
      dialogVisible: false,
      content: "",
    };
  },
  created() {
    this.queryAll()
  },
  methods: {
    queryAll(){
      post(host.host6 + "QueryALLAd.ashx").then((res) => {
      this.tableData = res.data;
      for (let i = 0; i < this.tableData.length; i++) {
        this.tableData[i].IMGURL = host.baseUrl + this.tableData[i].IMGURL;
      }
    });
    },
    toContent(row) {
      this.content = row.CONTENT;
      this.dialogVisible = true;
    },
    deleteHandler(row) {
      console.log(row);
      this.$alert("确认删除吗？", "确认", {
        confirmButtonText: "确定",
        callback: (action) => {
          if (action == "cancel") {
            return;
          } else {
            post(host.host6 + "DeleteAd.ashx", { ID: row.ID }).then((res) => {
              if (res.errCode == "SUCCESS") {
                this.$message({
                  message: "删除成功",
                  type: "success",
                });
                this.queryAll()
              }
            });
          }
        },
      });
    },
    editHandler(row){
      this.$router.push({
        path: "/admin/adrelease",
        query: {
          flag: "编辑",
          new: row,
        },
      });
    }
  },
};
</script>
<style scoped>
.content {
  width: 600px;
  height: 500px;
}
</style>