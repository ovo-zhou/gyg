<template>
  <div class="zxfjf">
    <div>
      <el-form :inline="true" class="demo-form-inline">
        <el-form-item>
          <el-radio v-model="radio" label="XH">按卸货收费</el-radio>
          <el-radio v-model="radio" label="ZH">按装货收费</el-radio>
        </el-form-item>
        <el-form-item label="开始时间">
          <el-date-picker type="date" placeholder="选择日期" v-model="startTime"></el-date-picker>
        </el-form-item>
        <el-form-item label="结束时间">
          <el-date-picker type="date" placeholder="选择日期" v-model="endTime"></el-date-picker>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="onSubmit">查询</el-button>
        </el-form-item>
      </el-form>
    </div>
    <el-table :data="table" style="width: 100%">
      <el-table-column fixed prop="LHDBH" label="理货单编号" width="100"></el-table-column>
      <el-table-column fixed prop="HTBH" label="合同号"></el-table-column>
      <el-table-column prop="LX" label="类型"></el-table-column>
      <el-table-column prop="HZ" label="货类"></el-table-column>
      <el-table-column prop="HWGGXH" label="规格型号"></el-table-column>
      <el-table-column prop="CZGC" label="操作过程"></el-table-column>
      <el-table-column prop="ZL" label="重量"></el-table-column>
      <el-table-column prop="JXS" label="件数"></el-table-column>
      <el-table-column prop="TJ" label="体积"></el-table-column>
      <el-table-column prop="JFFS" label="计费方式"></el-table-column>
      <el-table-column prop="JFDJ" label="单价"></el-table-column>
      <el-table-column prop="YSJE" label="应收"></el-table-column>
      <el-table-column prop="SFYJF" label="是否已记账" width="100"></el-table-column>
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
import host from '../../libs/utils'
import {post} from '../../service/http'
export default {
  data() {
    return {
      radio: "XH",
      startTime: "",
      endTime: new Date(),
      table: [],
      currentPage: 1,
      total: 0
    };
  },
  watch:{
    startTime(val, oldVal) {
      if (this.endTime.getTime < this.startTime.getTime) {
        this.$message.error("开始时间不能大于结束时间");
        this.startTime = oldVal;
      }
    },
    endTime(val, oldVal) {
      if (this.endTime.getTime < this.startTime.getTime) {
        this.$message.error("开始时间不能大于结束时间");
        this.endTime = oldVal;
      }
    }
  },
  methods:{
    onSubmit() {
      this.table = [];
      var url = host.host5 + "QueZXZYJF.ashx";
      var data = {
        HZ: JSON.parse(sessionStorage.getItem("clientUser")).YHBH,
        CXLB: this.radio,
        startTime: this.startTime,
        endTime: this.endTime,
        CBBH: "",
        HTH: "",
        HL: "",
        CZGC: "0",
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
      var url = host.host5 + "QueZXZYJF.ashx";
      var data = {
        HZ: JSON.parse(sessionStorage.getItem("clientUser")).YHBH,
        CXLB: this.radio,
        startTime: this.startTime,
        endTime: this.endTime,
        CBBH: "",
        HTH: "",
        HL: "",
        CZGC: "0",
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
    open(val) {
      this.$confirm(val, "提示", {
        confirmButtonText: "确定",
        type: "warning"
      })
        .then(() => {
          this.loading = false;
        })
        .catch(() => {
          this.loading = false;
        });
    }
  },
  mounted() {
    let time = new Date();
    time.setTime(time - 3600 * 1000 * 24 * 30);
    this.startTime = time;
  }
};
</script>

<style scoped>
.zxfjf {
  width: 100%;
}
</style>