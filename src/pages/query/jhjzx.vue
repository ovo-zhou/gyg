<template>
  <div class="zxfjf">
    <div>
      <el-form :inline="true" class="demo-form-inline">
        <el-form-item>
          <el-radio v-model="radio" label="JH">件货</el-radio>
          <el-radio v-model="radio" label="JZX">集装箱</el-radio>
        </el-form-item>
        <el-form-item label="工班日期">
          <el-date-picker type="date" placeholder="选择日期" v-model="time"></el-date-picker>
        </el-form-item>
        <el-form-item>
          <el-input v-model="CPH" placeholder="车牌号"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="onSubmit">查询</el-button>
        </el-form-item>
      </el-form>
    </div>
    <el-table :data="table" style="width: 100%">
      <el-table-column prop="JGHTYDBH" label="合同运单编号（进港）" width="180"></el-table-column>
      <el-table-column prop="CGHTYDBH" label="合同运单编号（进港）" width="180"></el-table-column>
      <el-table-column :formatter="dateFormat" prop="GBRQ" label="工班日期"></el-table-column>
      <el-table-column prop="BC" label="班次"></el-table-column>
      <el-table-column prop="ZGZT" label="在港状态"></el-table-column>
      <el-table-column prop="ZL" label="重量"></el-table-column>
      <el-table-column prop="JXS" label="件箱数"></el-table-column>
      <el-table-column prop="JHGG" label="件货规格"></el-table-column>
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
      currentPage: 1,
      total: 0,
      table: [],
      time: "",
      checked: true,
      BC: "0",
      radio: "JH",
      CPH: ""
    };
  },
  methods:{
    onSubmit() {
      this.table = [];
      var url = host.host5 + "QueJHBQ.ashx";
      var data = {
        HZ: JSON.parse(sessionStorage.getItem("clientUser")).YHBH,
        LX: this.radio,
        GBRQ: this.time,
        BC: this.BC,
        CPH: this.CPH,
        PageIndex: "1"
      };
      var promise = post(url, data);
      promise.then(v => {
        if (v.errCode === "SUCCESS") {
          this.total = v.data[0].datanum;
          if (this.total === 0) {
            this.open("没有数据，请扩大查询范围");
          }
          this.table = v.data[1].data;
        } else {
          this.open("查询失败，请再次查询或联系管理员");
        }
      });
    },
    handleCurrentChange(val) {
      this.table = [];
      var url = host.host5 + "QueJHBQ.ashx";
      var data = {
        HZ: JSON.parse(sessionStorage.getItem("clientUser")).YHBH,
        LX: this.radio,
        GBRQ: this.time,
        BC: this.BC,
        CPH: this.CPH,
        PageIndex: val
      };
      var promise = post(url, data);
      promise.then(v => {
        if (v.errCode === "SUCCESS") {
          this.total = v.data[0].datanum;
          if (this.total === 0) {
            this.open("没有数据，请扩大查询范围");
          }
          this.table = v.data[1].data;
        } else {
          this.open("查询失败，请再次查询或联系管理员");
        }
      });
    },
     dateFormat(row, column, cellValue) {
      var i = cellValue.indexOf(" ");
      return cellValue.substring(0, i);
    },
     open(val) {
      this.$confirm(val, "提示", {
        confirmButtonText: "确定",
        type: "warning"
      })
    }
  }
};
</script>

<style>
</style>