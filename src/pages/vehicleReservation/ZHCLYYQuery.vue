<template>
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
      <el-table-column prop="TYDBH" label="提运单编号" width="260" align="left"></el-table-column>
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
    <div>
      <br />
      <br />
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
import host from "../../libs/utils";
export default {
  name: "ZHCLYYQuery",
  data() {
    return {
      tableHeight: window.innerHeight - 250,
      count: 0,
      pagesize: 10,
      currentPage: 0,
      body_data: [],
      loading: true
    };
  },
  mounted() {
    this.count = 0;
    var url = host.host6 + "VehicleResvationWebTrans.ashx";
    var hz = JSON.parse(sessionStorage.getItem("clientUser")).YHBH;
    var data = {
      LX: "ZHCLYYQuery",
      HZ: hz,
      page: this.currentPage,
      pagesize: this.pagesize
    };
    console.log(url)
    var promise = post(url, data);
    promise.then(v => {
      console.log(v)
      if (v.errCode === "FAIL") {
        this.loading = false;
        this.$alert(v.errStr, "提示", {
          confirmButtonText: "确定",
          type: "info"
        });
      } else if (v.errCode === "SUCCESS") {
        console.log("************lp", v.data);
        this.count = v.data.count;
     
        this.currentPage = 1;
        this.body_data = JSON.parse(v.data.data);
  
      }
    });
  },
  watch: {
    body_data(val) {
      if (val.length > 0) {
        this.loading = false;
      }
    }
  },
  methods: {
    handleSizeChange: function(size) {
      this.currentPage = 1;
      this.pagesize = size;
      var url = host.host6 + "VehicleResvationWebTrans.ashx";
      var hz = JSON.parse(sessionStorage.getItem("clientUser")).YHBH;
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
          console.log("liup", this.body_data);
        }
      });
      console.log(this.pagesize); 
    },
    handleCurrentChange: function(currentPage) {
      this.currentPage = currentPage;
      if (this.count > 0) {
        var url = host.host6 + "VehicleResvationWebTrans.ashx";
        var hz = JSON.parse(sessionStorage.getItem("clientUser")).YHBH;
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
      console.log("lllll", row.TYDBH);
      var redata = {
        body_data: row,
        BH: row.TYDBH,
        SFZF: row.SFZF,
        TAG: "tyd"
      };
      // this.$router.push({ name: "AppointmentEdit", query: redata });
      this.$router.push({path:'/vehicle/appointmentEdit', query: redata });
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
.box {
    width: 100%;
    padding: 3%;
    box-sizing: border-box;
    overflow: hidden
}

.box .loader {
    /* width: 80%; */
    /* float: left; */
    height: 200px;
    margin-right: 3%;
    box-sizing: border-box;
    display: flex;
    align-items: center;
    justify-content: center
}

@-webkit-keyframes loading-3 {
    50% {
        transform: scale(.4);
        opacity: .3
    }
    100% {
        transform: scale(1);
        opacity: 1
    }
}

.loading-3 {
    position: relative
}

.loading-3 i {
    display: block;
    width: 15px;
    height: 15px;
    border-radius: 50%;
    background-color: #333;
    position: absolute
}

.loading-3 i:nth-child(1) {
    top: 25px;
    left: 0;
    -webkit-animation: loading-3 1s ease 0s infinite
}

.loading-3 i:nth-child(2) {
    top: 17px;
    left: 17px;
    -webkit-animation: loading-3 1s ease -.12s infinite
}

.loading-3 i:nth-child(3) {
    top: 0;
    left: 25px;
    -webkit-animation: loading-3 1s ease -.24s infinite
}

.loading-3 i:nth-child(4) {
    top: -17px;
    left: 17px;
    -webkit-animation: loading-3 1s ease -.36s infinite
}

.loading-3 i:nth-child(5) {
    top: -25px;
    left: 0;
    -webkit-animation: loading-3 1s ease -.48s infinite
}

.loading-3 i:nth-child(6) {
    top: -17px;
    left: -17px;
    -webkit-animation: loading-3 1s ease -.6s infinite
}

.loading-3 i:nth-child(7) {
    top: 0;
    left: -25px;
    -webkit-animation: loading-3 1s ease -.72s infinite
}

.loading-3 i:nth-child(8) {
    top: 17px;
    left: -17px;
    -webkit-animation: loading-3 1s ease -.84s infinite
}

</style>
