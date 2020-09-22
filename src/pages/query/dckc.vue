<template>
  <div class="dckc">
    <div class="title">
      <el-form :inline="true" :model="query" class="demo-form-inline">
        <el-form-item label="合同编号">
          <el-input v-model="query.htbh" placeholder="合同编号"></el-input>
        </el-form-item>
        <el-form-item label="型号规格">
          <el-input v-model="query.xhgg" placeholder="型号规格"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="onSubmit">查询</el-button>
        </el-form-item>
      </el-form>
    </div>

    <el-table
      :data="table"
      style="width: 100%"
      border
      highlight-current-row
      :header-cell-style="{background:'#F5F5F5'}"
    >
      <el-table-column prop="ZXHTBH" label="合同编号" width="200"></el-table-column>
      <el-table-column prop="HWMC" label="货物名称" width="100"></el-table-column>
      <el-table-column prop="HWGGXH" label="规格型号" width="150"></el-table-column>
      <el-table-column prop="JKL" label="进库量(吨)" width="100"></el-table-column>
      <el-table-column prop="CKL" label="出库量(吨)" width="100"></el-table-column>
      <el-table-column prop="KCCL" label="库场存量(吨)" width="110"></el-table-column>
      <el-table-column prop="JXSJKL" label="件箱数进库量(吨)" width="90"></el-table-column>
      <el-table-column prop="JXSCKL" label="件箱数出库量(吨)" width="90"></el-table-column>
      <el-table-column prop="JXSKCCL" label="库场件箱数存量(吨)" width="90"></el-table-column>
      <el-table-column prop="DC" label="堆位"></el-table-column>
    </el-table>
    <el-pagination
      @current-change="handleCurrentChange"
      :current-page="currentPage"
      :page-size="10"
      layout="total, prev, pager, next, jumper"
      :total="total"
    ></el-pagination>
  </div>
</template>

<script>
import host from "../../libs/utils";
import { post } from "../../service/http";
export default {
  data() {
    return {
      query: {
        htbh: "",
        xhgg: "",
      },
      table: [],
      total: "",
      currentPage: 0,
    };
  },
  mounted() {
    this.queData();
  },
  methods: {
    queData() {
      var url = host.host4 + "StockQueryByCargoOwner.ashx";
      var data = {
        HZ: JSON.parse(sessionStorage.getItem("clientUser")).KHQC,
        XHGG: this.query.xhgg,
        HTBH: this.query.htbh,
        page: this.currentPage,
      };
      var promise = post(url, data);
      promise.then((v) => {
        console.log(v);
        if (v.errCode === "SUCCESS") {
          this.total = v.data[0].datanum;
          if (this.total === 0) {
            return;
          }
          if (this.total > 0) {
            this.currentPage += 1;
            var url = host.host4 + "StockQueryByCargoOwner.ashx";
            var data = {
              HZ: JSON.parse(sessionStorage.getItem("clientUser")).KHQC,
              XHGG: this.query.xhgg,
              HTBH: this.query.htbh,
              page: this.currentPage,
            };
            // console.log(data)
            var promise = post(url, data);
            promise.then((v) => {
              if (v.errCode === "FAIL" || v.errCode === "SUCCESS") {
                this.table = v.data;
                // console.log(v.data)
              }
            });
          }
        }
      });
    },
    onSubmit() {
      this.currentPage = 0;
      this.total = 0;
      this.table = [];
      this.queData();
    },
    handleCurrentChange(val) {
      var url = host.host4 + "StockQueryByCargoOwner.ashx";
      var data = {
        HZ: JSON.parse(sessionStorage.getItem("clientUser")).KHQC,
        XHGG: this.query.xhgg,
        HTBH: this.query.htbh,
        page: val,
      };
      // console.log(data)
      var promise = post(url, data);
      promise.then((v) => {
        if (v.errCode === "FAIL" || v.errCode === "SUCCESS") {
          this.table = v.data;
          // console.log(v.data)
        }
      });
    },
  },
};
</script>

<style scoped>
.dckc {
  width: 100%;
}
</style>