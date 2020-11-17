<template>
  <div class="dynamic">
    <el-table :data="newsdata" style="width: 100%">
      <el-table-column prop="FBSJ" label="发布日期" width="200"></el-table-column>
      <el-table-column prop="XWBT" label="风采标题" width="400"></el-table-column>
      <el-table-column prop="SHZT" label="审核状态" width="100"></el-table-column>
      <el-table-column label="审核操作" width="200">
        <template slot-scope="scope">
          <el-button size="mini" type="primary" @click="handlePass(scope.row)">通过</el-button>
          <el-button size="mini" type="danger" @click="handleNoPass(scope.row)">不通过</el-button>
        </template>
      </el-table-column>
      <el-table-column label="操作" width="300">
        <template slot-scope="scope">
          <el-button size="mini" type="danger" @click="handleDelete(scope.$index,scope.row)">删除</el-button>
        </template>
      </el-table-column>
      <el-table-column label="公众号置顶" width="100">
        <template slot-scope="scope">
          <el-button size="mini" type="primary" @click="handleTop(scope.row)">{{getTopText(scope.row.TOP)}}</el-button>
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
      newsdata: [],
    };
  },
  computed:{
    getTopText() {
        return (top) => {
            if(top==='1')
            {
              return "已置顶"
            }else{
              return "置顶"
            }
        }
      },
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
        LM: "直击风采",
        clientLX: "admin",
      }).then((res) => {
        if (res.errCode === "SUCCESS") {
          this.total = res.data[0].datanum;
        }
      });
    },
    queryNews(val) {
      post(host.host2 + "QueryNews.ashx", {
        page: val,
        LM: "直击风采",
        clientLX: "admin",
      }).then((res) => {
        console.log(res);
        if (res.errCode === "SUCCESS") {
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
                this.querybtn()
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