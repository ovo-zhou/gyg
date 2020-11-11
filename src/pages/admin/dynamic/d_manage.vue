<template>
  <div class="dynamic">
    <el-form :inline="true" class="demo-form-inline">
      <el-form-item label="类型">
        <el-select v-model="LM" placeholder="请选择">
          <el-option label="行业动态(外网)" value="行业动态"></el-option>
          <el-option label="公司要闻(内网)" value="公司要闻"></el-option>
          <el-option label="公开新闻(内外网)" value="公开新闻"></el-option>
          <el-option label="对外公告(外网)" value="对外公告"></el-option>
          <el-option label="对内公告(内网)" value="对内公告"></el-option>
          <el-option label="公开公告(内外网)" value="公开公告"></el-option>
          <el-option label="党群动态" value="党群动态"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="querybtn">查询</el-button>
      </el-form-item>
    </el-form>
    <el-table :data="newsdata" style="width: 100%">
      <el-table-column
        prop="FBSJ"
        label="发布日期"
        width="200"
      ></el-table-column>
      <el-table-column
        prop="XWBT"
        label="动态标题"
        width="400"
      ></el-table-column>
      <el-table-column
        prop="SHZT"
        label="审核状态"
        width="100"
      ></el-table-column>
      <el-table-column label="审核操作" width="200">
        <template slot-scope="scope">
          <el-button size="mini" type="primary" @click="handlePass(scope.row)"
            >通过</el-button
          >
          <el-button size="mini" type="danger" @click="handleNoPass(scope.row)"
            >不通过</el-button
          >
        </template>
      </el-table-column>
      <el-table-column label="操作" width="300">
        <template slot-scope="scope">
          <el-button size="mini" type="primary" @click="handleLook(scope.row)"
            >查看</el-button
          >
          <el-button size="mini" @click="handleEdit(scope.row)">编辑</el-button>
          <el-button
            size="mini"
            type="danger"
            @click="handleDelete(scope.$index, scope.row)"
            >删除</el-button
          >
        </template>
      </el-table-column>
      <el-table-column label="公众号置顶" width="100">
        <template slot-scope="scope">
          <el-button size="mini" type="primary" @click="handleTop(scope.row)">置顶</el-button>
        </template>
      </el-table-column>
    </el-table>
    <div class="block">
      <el-pagination
        background
        @current-change="handleCurrentChange"
        :page-size="6"
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
      LM: "行业动态",
      total: 0,
      newsdata: [],
    };
  },
  methods: {
    handlePass(raw) {
      // console.log(raw)
      let data = {
        ID: raw.ID,
        SHZT: "SHTG",
      };
      post(host.host2 + "updateSHZT.ashx", data).then((res) => {
        // console.log(res)
        if (res.errCode == "SUCCESS") {
          this.$message({
            message: "更新审核状态成功",
            type: "success",
          });
          raw.SHZT = "通过";
        }
      });
    },
    handleNoPass(raw) {
      // console.log(raw)
      let data = {
        ID: raw.ID,
        SHZT: "SHNTG",
      };
      post(host.host2 + "updateSHZT.ashx", data).then((res) => {
        // console.log(res)
        if (res.errCode == "SUCCESS") {
          this.$message({
            message: "更新审核状态成功",
            type: "success",
          });
          raw.SHZT = "不通过";
        }
      });
    },
    querybtn() {
      this.queryTotal();
      this.queryNews(1);
    },
    handleCurrentChange(val) {
      this.queryNews(val);
    },
    queryTotal() {
      post(host.host2 + "QueryNews.ashx", {
        page: 0,
        LM: this.LM,
        clientLX: "admin",
      }).then((res) => {
        console.log(res);
        if (res.errCode === "SUCCESS") {
          this.total = res.data[0].datanum;
          if (this.total == 0) {
            this.newsdata = [];
          }
        }
      });
    },
    queryNews(val) {
      post(host.host2 + "QueryNews.ashx", {
        page: val,
        LM: this.LM,
        clientLX: "admin",
      }).then((res) => {
        if (res.errCode === "SUCCESS") {
          console.log(res);
          this.newsdata = res.data;
          for (let i = 0; i < this.newsdata.length; i++) {
            if (this.newsdata[i].SHZT == "0") {
              this.newsdata[i].SHZT = "未审核";
            }
            if (this.newsdata[i].SHZT == "1") {
              this.newsdata[i].SHZT = "通过";
            }
            if (this.newsdata[i].SHZT == "2") {
              this.newsdata[i].SHZT = "不通过";
            }
          }
        }
      });
    },
    handleLook(row) {
      // console.log(row);
      this.$router.push({
        path: "/admin/drelease",
        query: {
          flag: "查看",
          new: row,
        },
      });
    },
    handleEdit(row) {
      // console.log(row);
      if (row.SHZT == "通过") {
        this.$message({
          message: "审核通过的新闻，不能修改哦！",
          type: "success",
        });
        return;
      }
      this.$router.push({
        path: "/admin/drelease",
        query: {
          flag: "编辑",
          new: row,
        },
      });
    },
    handleDelete(index, row) {
      // console.log(row.ID)
      this.$alert("删除操作不可逆，确认删除？", "警告", {
        confirmButtonText: "确定",
        callback: (action) => {
          if (action === "confirm") {
            post(host.host2 + "DeleteNews.ashx", { ID: row.ID }).then((res) => {
              if (res.errCode === "SUCCESS") {
                this.$message({
                  message: "删除成功",
                  type: "success",
                });
                this.newsdata.splice(index, 1);
              } else {
                this.$message.error("出现了一点问题，请联系技术人员");
              }
            });
          }
        },
      });
    },
    handleTop(row){
      if(row.LM==="公司要闻"||row.LM==="对内公告"){
        this.$message.error("内网新闻和公告不能在公众号置顶哦ovo");
        return
      }
      let data={
        LM:row.LM,
        ID:row.ID
      }
      console.log(data)
      post(host.host2+"SetNewTop.ashx",data).then(res=>{
        console.log(res)
        if(res.errCode==="SUCCESS"){
           this.$message({
                  message: "置顶成功",
                  type: "success",
                });
        }
      })
    }
  },
  mounted() {
    this.queryTotal();
    this.queryNews(1);
  },
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