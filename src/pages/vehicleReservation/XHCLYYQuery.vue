<template>
  <div class="table-style">
    <el-table
      v-loading="loading"
      :data="body_data.slice((currentPage-1)*pagesize,currentPage*pagesize)"
      highlight-current-row
      @current-change="handleCurrentChangeRow"
      border
      style="width: 100%;font-size: 15px;"
      :height="tableHeight"
      :header-cell-style="{background:'#F5F5F5'}"
    >
      <el-table-column prop="HTBH" label="合同编号" width="230" align="left"></el-table-column>
      <el-table-column prop="QDRQ" label="签订日期" width="120" align="left"></el-table-column>
      <el-table-column prop="SFJK" label="是否进库" width="100" align="left"></el-table-column>
      <el-table-column prop="JGCM" label="进港船名" width="120" align="left"></el-table-column>
      <el-table-column prop="YJZD" label="预计总吨" width="100" align="left"></el-table-column>
      <el-table-column prop="HZ" label="货主" width="120" align="left"></el-table-column>
      <el-table-column prop="HL" label="货类" width="119" align="left"></el-table-column>
      <el-table-column prop="HWGG" label="规格型号" width="100" align="left"></el-table-column>
      <el-table-column prop="JGRQ" label="进港日期" width="110" align="left"></el-table-column>
      <el-table-column label="操作" width="120" align="center">
        <template slot-scope="scope">
          <el-link
            @click="appointmentEdit(scope.row)"
            type="text"
            size="small"
            style="font-size: 15px;color:green;"
            :underline="false"
          >预约编辑</el-link>
        </template>
      </el-table-column>
    </el-table>
    <div>
      <br>
      <br>
      <el-pagination
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page="currentPage"
        :page-sizes="[10,50,100,150]"
        :page-size="pagesize"
        layout="total, sizes,prev, pager, next, jumper"
        :total="count"
        align="left"
      ></el-pagination>
    </div>
    <label class="tishi">提示：根据果件司规定，超过15天的提货指令将自动失效。因此，如您有超过15天的提货指令，请联系受理室重新办理。</label>
  </div>
</template>
<script>
import { post } from "../../service/http.js";
import config from "../../libs/config.js";
export default {
  name:"XHCLYYQuery",
  data() {
    return {
      tableHeight:window.innerHeight-250,
      count: 0,
      pagesize: 10,
      currentPage: 0,
      body_data: [],
      loading: true
    };
  },
  mounted:function() {
    var hz = JSON.parse(sessionStorage.getItem("clientUser")).YHBH;
    var url = config.baseurl + config.CLYYQuery;
    var data = {
      LX: "XHCLYYQuery",
      HZ: hz,
      page: this.currentPage,
      pagesize: this.pagesize
    };
    var promise = post(url, data);
    promise.then(v => {
      if(v.errCode === "FAIL"){
        this.loading=false;
        this.$alert(v.errStr, '提示', {
          confirmButtonText: '确定',
          type: "info"
        })
      }else if (v.errCode === "SUCCESS") {
        console.log("************lp",v.data);
          this.count = v.data.count;
          this.currentPage=1;
          this.body_data =JSON.parse(v.data.data) ;
          console.log(this.body_data);
      }
    });
  },
  watch:{
    body_data(val){
      if(val.length>0){
        this.loading=false;
      }
    }
  },
  methods: {
    handleSizeChange: function(size) {
      this.currentPage = 1;
      this.pagesize = size;
      var url = config.baseurl + config.CLYYQuery;
      var hz = JSON.parse(sessionStorage.getItem("clientUser")).YHBH;
      var data = {
        LX: "XHCLYYQuery",
        HZ: hz,
        page: this.currentPage,
        pagesize: this.pagesize
      };
      var promise = post(url, data);
      promise.then(v => {
        if (v.errCode === "FAIL" || v.errCode === "SUCCESS") {
          this.body_data = JSON.parse(v.data.data);
          console.log(this.body_data);
        }
      });
      console.log(this.pagesize); //每页下拉显示数据
    },
    handleCurrentChange: function(currentPage) {
      this.currentPage = currentPage;
      if (this.count > 0) {
        var url = config.baseurl + config.CLYYQuery;
        var hz = JSON.parse(sessionStorage.getItem("clientUser")).YHBH;
        var data = {
          LX: "XHCLYYQuery",
          HZ: hz,
          page: this.currentPage,
          pagesize: this.pagesize
        };
        var promise = post(url, data);
        promise.then(v => {
          if (v.errCode === "FAIL" || v.errCode === "SUCCESS") {
            console.log(v.data);
            this.body_data = JSON.parse(v.data.data);
          }
        });
      }
      this.currentRow = currentPage;
      console.log(this.currentPage); //点击第几页
    },
    handleCurrentChangeRow: function(val) {
      this.currentRow = val;
    },
    appointmentEdit: function(row) {
      var redata = {
        body_data: row,
        BH: row.HTBH,
        SFZF: row.SFJK,
        TAG: "ht"
      };
      // this.$router.push({ name: "AppointmentEdit", query: redata });
      this.$router.push({ path: "/vehicle/appointmentEdit", query: redata });
    }
  }
};
</script>
<style scoped>
.tishi {
  color: #cc0000;
  font-size: x-large;
  width: 100%;
}
.rb-style {
  text-align: left;
  margin-top: -30px;
}
.table-style {
  margin-top: 10px;
  margin-left: 10px;
}
</style>
