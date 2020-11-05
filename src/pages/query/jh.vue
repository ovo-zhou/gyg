<template>
  <div class="zxfjf">
    <div>
      <el-form :inline="true" class="demo-form-inline">
        <el-form-item label="工班日期">
          <el-date-picker type="date" placeholder="选择日期" value-format="yyyy/MM/dd" v-model="time"></el-date-picker>
        </el-form-item>
        <el-form-item label="在港状态">
          <el-select v-model="ZGZT">
            <el-option label="查询全部" value="0"></el-option>
            <el-option label="在港" value="1"></el-option>
            <el-option label="离港" value="2"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="onSubmit">查询</el-button>
        </el-form-item>
      </el-form>
    </div>
      
    <el-table :data="table"  style="width: 100%" border highlight-current-row :header-cell-style="{background:'#F5F5F5'}">
      <el-table-column prop="JGHTYDBH" label="合同运单编号（进港）" width="160"></el-table-column>
      <el-table-column prop="CGHTYDBH" label="合同运单编号（出港）" width="200"></el-table-column>
      <el-table-column prop="BQH" label="标签号" width="135"></el-table-column>
      <el-table-column prop="ZGZT" label="在港状态" width="50"></el-table-column>
      <el-table-column prop="ZL" label="重量" width="60"></el-table-column>
      <el-table-column prop="JXS" label="件箱数" width="70"></el-table-column>
      <el-table-column prop="JHGG" label="件货规格" width="80"></el-table-column>
      <el-table-column prop="ZGHZ" label="货主" width="90"></el-table-column>
      <el-table-column prop="JGHZ" label="进货货主" width="90"></el-table-column>
      <el-table-column prop="CGHZ" label="提货人" width="90"></el-table-column>
      <el-table-column prop="HLMC" label="货类名称" width="80"></el-table-column>
      <el-table-column prop="JHGG" label="货物规格" width="80"></el-table-column>
      <el-table-column prop="HQBGHTH" label="货权变更合同号" width="80"></el-table-column>
      <el-table-column prop="JGCB" label="进港船舶" width="80"></el-table-column>
      <el-table-column prop="JGSJ" label="进港时间" width="160"></el-table-column>
      <el-table-column prop="LGCB" label="离港船舶" width="80"></el-table-column>
      <el-table-column prop="LGSJ" label="离港时间" width="160"></el-table-column>
      <el-table-column prop="BZ" label="件货信息备注" width="300"></el-table-column>
    </el-table>
    <el-pagination
      @current-change="handleCurrentChange"
      :current-page="currentPage"
      :page-size="10"
      layout="total, prev, pager, next, jumper"
      :total="total"
    ></el-pagination>
    <p style="color:red;font-size:20px">由于统计时间和审核时间的不同，本数据仅做参考，实际数据以业务部数据为准。</p>
  </div>
</template>

<script>
import host from "../../libs/utils";
import { post } from "../../service/http";
export default {
  data() {
    return {
      currentPage: 0,
      total: 0,
      table: [],
      time: "",
      checked: true,
      ZGZT: "0",
      CPH: "",
      resulttable: [],
    };
  },
  created() {
    let date = new Date();
    let year = date.getFullYear();
    let month = date.getMonth() + 1;
    if (month < 10) {
      month = "0" + month;
    }
    let day = date.getDate();
    if (day < 10) {
      day = "0" + day;
    }
    this.time = year + "/" + month + "/" + day;
    this.onSubmit();
  },
  methods: {
    onSubmit() {
      this.table = [];
      var url = host.host5 + "QueJHBQ.ashx";
      var data = {
        HZ: JSON.parse(sessionStorage.getItem("clientUser")).YHBH,
        LX: "JH",
        GBRQ: this.time,
        ZGZT: this.ZGZT,
      };
      if (data.GBRQ == null || data.GBRQ == "") {
        this.open("日期不能为空！");
        return;
      }
      // console.log(data);
      var promise = post(url, data);
      promise.then((v) => {
        // console.log(v);
        if (v.errCode == "SUCCESS") {
          this.resulttable = this.selectZGZT(v.data, this.ZGZT);
          this.total = this.resulttable.length;
          if (this.total == "0") {
            // this.open("此工班日期内没有数据！");
          } else {
            this.table = this.resulttable.slice(0, 10);
          }
        } else {
          this.open("出了点错误请联系技术人员");
        }
      });
    },
    handleCurrentChange(val) {
      this.table = this.resulttable.slice(10 * (val - 1), 10 * val);
    },
     open(val) {
      this.$confirm(val, "提示", {
        confirmButtonText: "确定",
        type: "warning",
      });
    },
    selectZGZT(data, ZGZT) {
      if (ZGZT == "0") {
        return data;
      }
      if (ZGZT == "1") {
        for (let i = 0; i < data.length; i++) {
          if (data[i].ZGZT == "离港") {
            data.splice(i, 1);
            --i;
          }
        }
        return data;
      }
      if (ZGZT == "2") {
        for (let i = 0; i < data.length; i++) {
          if (data[i].ZGZT == "在港") {
            data.splice(i, 1);
            --i;
          }
        }
        return data;
      }
    },
  },
};
</script>

<style>
</style>