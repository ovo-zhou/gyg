<template>
  <el-main>
    <div class="rb-style">
      <label style="color:red;">查询条件</label>
      <a style="margin-left:25px"></a>
      <el-radio v-model="TAG" label="tyd" @change="radioZH">装货</el-radio>
      <el-radio v-model="TAG" label="ht" @change="radioXH">卸货</el-radio>
      <el-button type="primary" plain icon="el-icon-search" @click="QueryLSJGCL">查询</el-button>
    </div>
    <div class="table-style1" :style="style" v-if="TAG==='tyd'">
      <el-table
        v-loading="loading"
        :data="LSJGCL_data.slice((currentPage-1)*pagesize,currentPage*pagesize)"
        highlight-current-row
        @current-change="handleCurrentChangeRow"
        border
        style="width: 100%;font-size: 15px;"
        :height="tableHeight"
        :header-cell-style="{background:'#F5F5F5'}"
      >
        <el-table-column fixed type="index" width="50"></el-table-column>
        <el-table-column prop="TYDBH" label="提运单编号" width="260" align="left"></el-table-column>
        <el-table-column prop="QDRQ" label="签订日期" width="100" align="left"></el-table-column>
        <el-table-column prop="SFZF" label="是否直放" width="100" align="left"></el-table-column>
        <el-table-column prop="JGCM" label="进港船名" width="120" align="left"></el-table-column>
        <el-table-column prop="JHTHD" label="计划提货吨" width="100" align="left"></el-table-column>
        <el-table-column prop="HZ" label="货主" width="100" align="left"></el-table-column>
        <el-table-column prop="HL" label="货类" width="100" align="left"></el-table-column>
        <el-table-column prop="HWGG" label="规格型号" width="100" align="left"></el-table-column>
        <el-table-column prop="JGRQ" label="进港日期" width="100" align="left"></el-table-column>
        <el-table-column label="操作" width="120" align="center">
          <template slot-scope="scope">
            <el-link
              @click="InboundVehicleList(scope.row)"
              type="text"
              size="small"
              style="font-size: 15px;color:green;"
              :underline="false"
            >进港车辆清单</el-link>
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
          :page-sizes="[50,100,150,200]"
          :page-size="pagesize"
          layout="total, sizes,prev, pager, next, jumper"
          :total="count"
          align="left"
        ></el-pagination>
      </div>
    </div>

    <div class="table-style1" :style="style" v-if="TAG==='ht'">
      <el-table
        v-loading="loading"
        :data="LSJGCL_data"
        highlight-current-row
        @current-change="handleCurrentChangeRow"
        border
        style="width: 100%;font-size: 15px;"
        :height="tableHeight"
        :header-cell-style="{background:'#F5F5F5'}"
      >
        <el-table-column fixed type="index" width="50"></el-table-column>
        <el-table-column prop="HTBH" label="合同编号" width="220" align="left"></el-table-column>
        <el-table-column prop="QDRQ" label="签订日期" width="100" align="left"></el-table-column>
        <el-table-column prop="SFJK" label="是否进库" width="100" align="left"></el-table-column>
        <el-table-column prop="JGCM" label="进港船名" width="110" align="left"></el-table-column>
        <el-table-column prop="YJZD" label="预计总吨" width="100" align="left"></el-table-column>
        <el-table-column prop="HZ" label="货主" width="100" align="left"></el-table-column>
        <el-table-column prop="HL" label="货类" width="100" align="left"></el-table-column>
        <el-table-column prop="HWGG" label="规格型号" width="100" align="left"></el-table-column>
        <el-table-column prop="JGRQ" label="进港日期" width="100" align="left"></el-table-column>
        <el-table-column label="操作" width="120" align="center">
          <template slot-scope="scope">
            <el-link
              @click="InboundVehicleList(scope.row)"
              type="text"
              size="small"
              style="font-size: 15px;color:green;"
              :underline="false"
            >进港车辆清单</el-link>
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
          :page-sizes="[50,100,150,200]"
          :page-size="pagesize"
          layout="total, sizes,prev, pager, next, jumper"
          :total="count"
          align="left"
        ></el-pagination>
      </div>
    </div>
  </el-main>
</template>
<script>
import { get, post } from "../../service/http.js";
import config from "../../service/utils/config.js";
import axios from "axios";
import { Promise } from "q";
export default {
  name:"LSJGCLQuery",
  data() {
    return {
      tableHeight:window.innerHeight-300,
      TAG: "",
      style: "display: none;",
      LSJGCL_data:[],
      count: 0,
      pagesize: 50,
      currentPage: 0,
      loading: true
    };
  },
  created() {
    this.TAG = "tyd";
    // this.QueryLSJGCL();
    // 添加请求拦截器
  //   axios.interceptors.request.use(
  //     config => {
  //       console.log(config);
  //       this.loading = true;
  //       return config;
  //     },
  //     function(error) {
  //       return Promise.reject(error);
  //     }
  //   );
  //   // 添加响应拦截器
  //   axios.interceptors.response.use(
  //     response => {
  //       // 对响应数据做点什么
  //       console.log(response);
  //       this.loading = false;
  //       return response;
  //     },
  //     function(error) {
  //       // 对响应错误做点什么
  //       return Promise.reject(error);
  //     }
  //   );
  },
  watch:{
    LSJGCL_data(val){
      if(val.length>0){
        this.loading=false;
      }
    }
  },
  methods: {
    radioZH() {
      this.style = "display: none;";
    },
    radioXH() {
      this.style = "display: none;";
    },
    QueryLSJGCL: function() {
      this.style = "";
      this.LSJGCL_data=[];
      // this.currentPage = 0;
      var url = config.baseurl + config.CLYYQuery;
      var hz = JSON.parse(localStorage.getItem("clientUser")).YHBH;
      var data = {
        LX: "LSJGCLQuery",
        TAG: this.TAG,
        HZ: hz,
        page: this.currentPage,
        pagesize: this.pagesize
      };
      var promise = post(url, data);
      console.log("*******************", hz);
      promise.then(v => {
        if (v.errCode === "FAIL" || v.errCode === "SUCCESS") {
          console.log("*******************", v.data);
          this.count = v.data.count;
          if (this.count > 0) {
            this.currentPage = 1;
            // this.LSJGCL_data = JSON.parse(v.data.data);
            this.LSJGCL_data = JSON.parse(v.data.data);
            console.log("LSJGCL_data", this.LSJGCL_data);
          } else {
            this.loading = false;
            this.$alert('暂无历史进港车辆', '提示', {
              confirmButtonText: '确定',
              type: "info"
            })
          }
        }
      })
    },
    handleSizeChange: function(size) {
      this.currentPage = 1;
      this.pagesize = size;
      var url = config.baseurl + config.CLYYQuery;
      var hz = JSON.parse(localStorage.getItem("clientUser")).YHBH;
      var data = {
        LX: "LSJGCLQuery",
        TAG: this.TAG,
        HZ: hz,
        page: this.currentPage,
        pagesize: this.pagesize
      };
      var promise = post(url, data);
      promise.then(v => {
        if (v.errCode === "FAIL" || v.errCode === "SUCCESS") {
          this.LSJGCL_data = JSON.parse(v.data.data);
          console.log(this.LSJGCL_data);
        }
      });
      console.log(this.pagesize); //每页下拉显示数据
    },
    handleCurrentChange: function(currentPage) {
      this.currentPage = currentPage;
      if (this.count > 0) {
        var url = config.baseurl + config.CLYYQuery;
        var hz = JSON.parse(localStorage.getItem("clientUser")).YHBH;
        var data = {
          LX: "LSJGCLQuery",
          TAG: this.TAG,
          HZ: hz,
          page: this.currentPage,
          pagesize: this.pagesize
        };
        var promise = post(url, data);
        promise.then(v => {
          if (v.errCode === "FAIL" || v.errCode === "SUCCESS") {
            console.log(v.data);
            this.LSJGCL_data = JSON.parse(v.data.data);
          }
        });
      }
      this.currentRow = currentPage;
      console.log(this.currentPage); //点击第几页
    },
    handleCurrentChangeRow: function(val) {
      this.currentRow = val;
    },
    InboundVehicleList: function(row) {
      var tag = this.TAG;
      var bh;
      if (tag === "tyd") {
        bh = row.TYDBH;
      } else {
        bh = row.HTBH;
      }
      var redata = {
        TAG: tag,
        BH: bh
      };
      this.$router.push({ name: "InboundVehicleList", query: redata });
    }
  }
};
</script>
<style>
.rb-style {
  text-align: left;
    margin-left: 20px;

  margin-top: -30px;
}
.table-style1 {
  margin-top: 30px;
  margin-left: 20px;
}
</style>
