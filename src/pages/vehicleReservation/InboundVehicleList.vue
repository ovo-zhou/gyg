<template>
  <!-- <el-main> -->
    <!--表格显示区-->
    <div>
      <div class="table-style">
        <el-table
          v-loading="loading"
          :data="CLQD_data"
          highlight-current-row
          @current-change="handleCurrentChangeRow"
          border
          style="width: 100%;font-size: 15px"
          :header-cell-style="{background:'#F5F5F5'}"
        >
          <el-table-column fixed type="index" width="50"></el-table-column>
          <el-table-column prop="CPH" label="车牌号" width="100" align="center"></el-table-column>
          <el-table-column prop="SJXM" label="司机姓名" width="100" align="center"></el-table-column>
          <el-table-column prop="DQZYTS" label="当前作业趟数" width="120" align="center"></el-table-column>
          <el-table-column prop="BCJGSJ" label="进港时间" width="160" align="center"></el-table-column>
          <el-table-column prop="BCLGSJ" label="离港时间" width="160" align="center"></el-table-column>
          <el-table-column prop="BCZYJHZL" label="本次计划重量" width="120" align="center"></el-table-column>
          <el-table-column prop="BCZYJHJXS" label="本次计划件箱数" width="130" align="center"></el-table-column>
          <el-table-column prop="BCZYSJZL" label="本次实际重量" width="120" align="center"></el-table-column>
          <el-table-column prop="BCZYSJJXS" label="本次实际件箱数" width="130" align="center"></el-table-column>
          <el-table-column prop="BCZYCLMZ" label="车辆毛重" width="120" align="center"></el-table-column>
          <el-table-column prop="BCZYCLPZ" label="车辆皮重" width="120" align="center"></el-table-column>
          <el-table-column prop="DQZYZT" label="当前作业状态" width="120" align="center"></el-table-column>
        </el-table>
      </div>
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
    </div>
  <!-- </el-main> -->
</template>
<script>
import { post } from "../../service/http.js";
import config from "../../service/utils/config.js";
import axios from "axios";
import { Promise } from "q";
export default {
  data() {
    return {
      BT_data: [], //接受AppointmentEdit页面传过来的编号和TAG
      CLQD_data: [], //存放查出来的进港车辆清单数据
      BH: "",
      TAG:"",
      count:0, //车辆预约总数
      newsKey: 1,
      key: 1,
      currentPage: 0, //初始页
      pagesize: 10, //每页的数据
      currentRow: null,
      loading: false
    };
  },
  mounted() {
    this.BT_data = this.$route.query;
    this.BH = this.BT_data.BH;
    this.TAG = this.BT_data.TAG;
    console.log(this.BH);
    // 添加请求拦截器
    axios.interceptors.request.use(
      config => {
        console.log(config);
        this.loading = true;
        return config;
      },
      function(error) {
        return Promise.reject(error);
      }
    );
    // 添加响应拦截器
    axios.interceptors.response.use(
      response => {
        // 对响应数据做点什么
        console.log(response);
        this.loading = false;
        return response;
      },
      function(error) {
        // 对响应错误做点什么
        return Promise.reject(error);
      }
    );
    var url = config.baseurl + config.CLYYQuery;
    var data = {
      LX: "InboundVehicleList",
      TAG: this.TAG,
      BH: this.BH,
      page: this.currentPage,
      pagesize: this.pagesize
    };
    var promise = post(url, data);
    promise.then(v => {
      if (v.errCode === "FAIL" || v.errCode === "SUCCESS") {
        this.count = v.data.count;
        console.log(this.count);
        if (this.count > 0) {
          this.currentPage = 1;
          console.log(v.data);
          this.CLQD_data =JSON.parse(v.data.data);
        }else{
          this.$alert("暂无进港车辆", '提示', {
            confirmButtonText: '确定',
            type: "info"
          })
        }
      }
    });
  },
  methods: {
    // 初始页currentPage、初始每页数据数pagesize和数据data
    //改变每页显示数据条数时执行
    handleSizeChange: function(size) {
      this.pagesize = size;
      var url = config.baseurl + config.CLYYQuery;
      var data = {
        LX: "InboundVehicleList",
        TAG: this.TAG,
        BH: this.BH,
        page: this.currentPage,
        pagesize: this.pagesize
      };
      var promise = post(url, data);
      promise.then(v => {
        if (v.errCode === "FAIL" || v.errCode === "SUCCESS") {
          console.log(v.data);
          this.CLQD_data = JSON.parse(v.data.data);
        }
      });
      console.log(this.pagesize); //每页下拉显示数据
    },
    //改变页数时执行
    handleCurrentChange: function(currentPage) {
      this.currentPage = currentPage;
      if (this.count > 0) {
        var url = config.baseurl + config.CLYYQuery;
        var data = {
          LX: "InboundVehicleList",
          TAG: this.TAG,
          BH: this.BH,
          page: this.currentPage,
          pagesize: this.pagesize
        };
        var promise = post(url, data);
        promise.then(v => {
          if (v.errCode === "FAIL" || v.errCode === "SUCCESS") {
            console.log(v.data);
            this.CLQD_data =JSON.parse(v.data.data);
          }
        });
      }
      this.currentRow = currentPage;
      console.log(this.currentPage); //点击第几页
    },
    touchme: function touch() {
      console.log(this.body_data);
    },
    //选中某一行时
    handleCurrentChangeRow: function(val) {
      this.currentRow = val;
    }
  }
};
</script>
<style>
.table-style {
  margin-top: 10px;
  margin-left: 10px;
}
</style>
