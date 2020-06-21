<template>
  <div class="dcjf">
    <div>
      <el-form :inline="true" class="demo-form-inline">
        <el-form-item label="开始时间">
          <el-date-picker type="date" placeholder="选择日期" v-model="startTime"></el-date-picker>
        </el-form-item>
        <el-form-item label="合同编号">
          <el-input v-model="ZYHTH" placeholder="合同编号"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="onSubmit">查询</el-button>
        </el-form-item>
      </el-form>
    </div>
    <el-table :data="table" style="width: 100%">
      <el-table-column prop="ZXHTBH" label="合同编号"></el-table-column>
      <el-table-column prop="CBMC" label="船舶"></el-table-column>
      <el-table-column :formatter="dateFormat" prop="SCXHRQ" label="首次卸货日"></el-table-column>
      <el-table-column fixed prop="HWLBMC" label="货类"></el-table-column>
      <el-table-column prop="HWGGXH" label="规格型号"></el-table-column>
      <el-table-column prop="JFFS" label="计费方式"></el-table-column>
      <el-table-column prop="ZJ" label="总价"></el-table-column>
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
      table: [],
      ZYHTH: "",
      startTime: new Date(),
      total: 0,
      currentPage: 1
    };
  },
  methods:{
    onSubmit() {
      this.table = [];
      var url = host.host5 + "QueDCJF.ashx";
      var data = {
        ZYHTH: this.ZYHTH,
        HZ: JSON.parse(sessionStorage.getItem("clientUser")).YHBH,
        startTime: this.startTime,
        PageIndex: "1"
      };
      var promise = post(url, data);
      promise.then(v => {
        if (v.errCode === "SUCCESS") {
          this.total = v.data[0].datanum;
          if (this.total === 0) {
            this.open(v.data[1].data);
          }
          this.table = v.data[1].data;
        } else {
          this.open("查询失败，请再次查询或联系管理员");
        }
      });
    },
    handleCurrentChange(val) {
      this.table = [];
      var url = host.host5 + "QueDCJF.ashx";
      var data = {
        ZYHTH: this.ZYHTH,
        HZ: JSON.parse(sessionStorage.getItem("clientUser")).YHBH,
        startTime: this.startTime,
        PageIndex: val
      };
      var promise = post(url, data);
      promise.then(v => {
        if (v.errCode === "SUCCESS") {
          this.total = v.data[0].datanum;
          if (this.total === 0) {
            this.open(v.data[1].data);
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

<style scoped>
.dcjf {
  width: 100%;
}
</style>