<template>
  <div class="dynamic">
    <el-table :data="newsdata" style="width: 100%">
      <el-table-column prop="FBSJ" label="发布日期" width="200"></el-table-column>
      <el-table-column prop="XWBT" label="公告标题" width="400"></el-table-column>
      <el-table-column label="操作" width="300">
        <template slot-scope="scope">
          <el-button size="mini" type="primary" @click="handleLook(scope.row)">查看</el-button>
          <el-button size="mini" @click="handleEdit(scope.row)">编辑</el-button>
          <el-button size="mini" type="danger" @click="handleDelete(scope.$index,scope.row)">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
    <div class="block">
      <el-pagination
        background
        @current-change="handleCurrentChange"
        :page-size="10"
        layout="total, prev, pager, next,jumper"
        :total="total"
      ></el-pagination>
    </div>
  </div>
</template>

<script>
import host from "../../../libs/utils";
import { post } from "../../../service/http";
export default {
  data() {
    return {
      total: 0,
      newsdata: []
    };
  },
  methods: {
    handleCurrentChange(val) {
      this.queryNews(val);
    },
    queryTotal() {
      post(host.host2 + "QueryNews.ashx", { page: 0, LM: "通知公告" }).then(
        res => {
          // console.log(res);
          if (res.errCode === "SUCCESS") {
            this.total = res.data[0].datanum;
          }
        }
      );
    },
    queryNews(val) {
      post(host.host2 + "QueryNews.ashx", { page: val, LM: "通知公告" }).then(
        res => {
          if (res.errCode === "SUCCESS") {
            this.newsdata = res.data;
            // console.log(this.newsdata);
          }
        }
      );
    },
    handleLook(row) {
      // console.log(row);
      this.$router.push({
        path: "/admin/nrelease",
        query: {
          flag: "查看",
          new: row
        }
      });
    },
    handleEdit(row) {
      // console.log(row);
      this.$router.push({
        path: "/admin/nrelease",
        query: {
          flag: "编辑",
          new: row
        }
      });
    },
    handleDelete(index,row) {
      // console.log(row.ID)
      this.$alert("删除操作不可逆，确认删除？", "警告", {
        confirmButtonText: "确定",
        callback: action => {
          if (action === "confirm") {
            post(host.host2 + "DeleteNews.ashx", { ID: row.ID }).then(res => {
              if (res.errCode === "SUCCESS") {
                this.$message({
                  message: "删除成功",
                  type: "success"
                });
                this.newsdata.splice(index,1)
              }else{
                this.$message.error("出现了一点问题，请联系技术人员")
              }
            });
          }
        }
      });
    }
  },
  mounted() {
    this.queryTotal();
    this.queryNews(1);
  }
};
</script>

<style scoped>
.dynamic {
  width: 100%;
  height: 100%;
}
.block {
  margin-top: 20px;
}
</style>