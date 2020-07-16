<template>
  <!-- <el-main> -->
    <!-- <h2>车辆预约首页</h2> -->
    <!-- <div class="left_menu" align="center">
        <div class="menu">
          <div id="disp" class="posin"></div>
          <div class="bartitleFAQ">
            <span class="menu_head">
              <router-link :to="{name:'ZHCLYYQuery'}">货车装货车辆预约</router-link>
            </span>
          </div>
          <div class="bartitleFAQ">
            <span class="menu_head">
              <router-link :to="{name:'XHCLYYQuery'}">货车卸货车辆预约</router-link>
            </span>
          </div>
          <div class="bartitleFAQ">
            <span class="menu_head">
              <router-link :to="{name:'XCCLYYQuery'}">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;小车预约</router-link>
            </span>
          </div>
          <div class="bartitleFAQ">
            <span class="menu_head">
              <router-link :to="{name:'LSJGCLQuery'}">历史进港车辆查询</router-link>
            </span>
          </div>
        </div>
    </div>-->
    <!-- <div class="posin" align="left">
          当前位置：
          <router-link :to="{name:'vehicleResHome'}">后台首页</router-link>>
          <router-link :to="{name:'ZHCLYYQuery'}">货车装货车辆预约</router-link>
    </div>-->
    <div class="table-style">
      <el-table
        v-loading="loading"
        :data="body_data"
        highlight-current-row
        border
        style="width: 100%;font-size:15px;"
        :height="tableHeight"
        :header-cell-style="{background:'#F5F5F5'}"
        fit
      >
        <el-table-column prop="TYDBH" label="提运单编号" width="260" align="left" ></el-table-column>
        <el-table-column prop="QDRQ" label="签订日期" width="120" align="left"></el-table-column>
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
              @click="appointmentEdit(scope.row)"
              type="text"
              size="small"
              style="font-size: 15px;color:green;"
              :underline="false"
            >预约编辑</el-link>
          </template>
        </el-table-column>
      </el-table>
<!--      <div class="box" v-show="isShow">-->
<!--        <div class="loader">-->
<!--          <div class="loading-3">-->
<!--            <i></i>-->
<!--            <i></i>-->
<!--            <i></i>-->
<!--            <i></i>-->
<!--            <i></i>-->
<!--            <i></i>-->
<!--            <i></i>-->
<!--            <i></i>-->
<!--          </div>-->
<!--        </div>-->
<!--      </div>-->
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

  <!-- </el-main> -->
</template>
<script>
import { post } from "../../service/http.js";
import config from "../../service/utils/config.js";
import bus from "../../components/vehicleReservation/bus";
export default {
  name: "ZHCLYYQuery",
  data() {
    return {
      tableHeight:window.innerHeight-250,
      tagsList: [],//存放标签
      count: 0,
      pagesize: 10,
      currentPage:0,
      body_data: [],
      loading: true
    };
  },
  mounted() {
      // this.tableHeight = window.innerHeight - this.$refs.table.$el.offsetTop - 50;
      //window.innerHeight:浏览器的可用高度
      //this.$refs.table.$el.offsetTop：表格距离浏览器的高度
      //后面的50：根据需求空出的高度，自行调整
    // setTimeout(() => {
    //
    //   this.tableHeight = window.innerHeight - this.$refs.table.$el.offsetTop;
    //   alert("56565")
    // },100)
    //此处需要通过延迟方法来设置值，不然会出现值已更新，但页面没更新的问题
    //this.$refs.table.$el.offsetTop：表格距离浏览器的高度

    // // 添加请求拦截器
    // axios.interceptors.request.use(
    //   config => {
    //     console.log(config);
    //     this.loading = true;
    //     return config;
    //   },
    //   function(error) {
    //     return Promise.reject(error);
    //   }
    // );
    // // 添加响应拦截器
    // axios.interceptors.response.use(
    //   response => {
    //     // 对响应数据做点什么
    //     console.log(response);
    //     this.loading = false;
    //     return response;
    //   },
    //   function(error) {
    //     // 对响应错误做点什么
    //     return Promise.reject(error);
    //   }
    // );
    this.count = 0;
    var url = config.baseurl + config.CLYYQuery;
    var hz = JSON.parse(localStorage.getItem("clientUser")).YHBH;
    var data = {
      LX: "ZHCLYYQuery",
      HZ: hz,
      page: this.currentPage,
      pagesize:this.pagesize
    };
    var promise = post(url, data);
    promise
      .then(v => {
        if(v.errCode === "FAIL"){
          this.loading=false;
          this.$alert(v.errStr, '提示', {
            confirmButtonText: '确定',
            type: "info"
          })
        }else if (v.errCode === "SUCCESS") {
          console.log("************lp",v.data);
          this.count = v.data.count;
          // if (this.count > 0) {
            this.currentPage=1;
            this.body_data =JSON.parse(v.data.data) ;
          // }else{
          //   this.loading=false;
          //   this.$alert(v.errStr, '提示', {
          //     confirmButtonText: '确定',
          //     type: "info"
          //   })
          // }
        }
      })
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
      this.currentPage=1;
      this.pagesize = size;
      var url = config.baseurl + config.CLYYQuery;
      var hz = JSON.parse(localStorage.getItem("clientUser")).YHBH;
      var data = {
        LX: "ZHCLYYQuery",
        HZ: hz,
        page: this.currentPage,
        pagesize: this.pagesize
      };
      var promise = post(url, data);
      promise.then(v => {
        if (v.errCode === "FAIL" || v.errCode === "SUCCESS") {
          this.body_data = JSON.parse(v.data.data);
          console.log("liup",this.body_data);
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
          LX: "ZHCLYYQuery",
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
    appointmentEdit: function(row) {
      //如果存在，关闭已有的预约编辑标签
      // bus.$on("tags", msg => {
      //   let arr = msg.remove("AppointmentEdit");
      //   this.tagsList = arr;
      // });
      // bus.$emit("tags", this.tagsList);
      console.log("lllll",row.TYDBH);
      var redata = {
        body_data: row,
        BH:row.TYDBH,
        SFZF:row.SFZF,
        TAG: "tyd"
      };
      this.$router.push({ name: "AppointmentEdit", query: redata });
    }
  }
};
</script>
<style>
@import "../../assets/css/vehicleRescss/loading.css";
@import "../../assets/css/vehicleRescss/content.css";
</style>
