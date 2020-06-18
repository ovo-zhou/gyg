<template>
  <div class="dynamic">
    <el-table :data="newsdata" style="width: 100%">
      <el-table-column prop="FBSJ" label="发布日期" width="200"></el-table-column>
      <el-table-column prop="XWBT" label="动态标题" width="400"></el-table-column>
      <el-table-column label="操作" width="300">
        <template slot-scope="scope">
          <el-button size="mini" type="primary" @click="handleLook(scope.row)">查看</el-button>
          <el-button size="mini" @click="handleEdit(scope.row)">编辑</el-button>
          <el-button size="mini" type="danger" @click="handleDelete(scope.row)">删除</el-button>
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
      post(host.host2 + "QueryNews.ashx", { page: 0, LM: "行业动态" }).then(
        res => {
          console.log(res);
          if (res.errCode === "SUCCESS") {
            this.total = res.data[0].datanum;
          }
        }
      );
    },
    queryNews(val) {
      post(host.host2 + "QueryNews.ashx", { page: val, LM: "行业动态" }).then(
        res => {
          if (res.errCode === "SUCCESS") {
            this.newsdata = res.data;
            console.log(this.newsdata);
          }
        }
      );
    },
    handleLook(row) {
      console.log(row);
      this.$router.push({
        path:'/admin/drelease',
        query:{
          flag:"查看",
          new:row
        }
      })
    },
    handleEdit(row) {
      console.log(row);
      this.$router.push({
        path:'/admin/drelease',
        query:{
          flag:"编辑",
          new:row
        }
      })
    },
    handleDelete(row) {
      console.log(row.ID)
      post(host.host2+"DeleteNews.ashx",{ID:row.ID}).then(res=>{
        if(res.errCode==="SUCCESS"){
          this.$message({
            message: "删除成功",
            type: "success"
          });
          this.queryNews(1);
        }
      })
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