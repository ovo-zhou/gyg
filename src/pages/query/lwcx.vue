<template>
  <div class="lwcx">
    <img src="../../assets/query.png" alt />
    <div class="content">
      <el-form :inline="true" class="demo-form-inline">
        <el-form-item>
          <el-date-picker
            v-model="dateArr"
            type="daterange"
            range-separator="至"
            start-placeholder="开始日期"
            end-placeholder="结束日期"
            value-format="yyyy/MM/dd"
          >
          </el-date-picker>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="onSubmit">查询</el-button>
        </el-form-item>
      </el-form>
      <el-table
      v-loading="loading"
        :data="table"
        style="width: 100%"
        border
        highlight-current-row
        :header-cell-style="{ background: '#F5F5F5' }"
      >
        <el-table-column
          prop="LHDBH"
          label="理货单/杂项作业编号"
          width="120"
        ></el-table-column>
        <el-table-column prop="HZMC" label="货主" width="180"></el-table-column>
        <el-table-column
          prop="HWGGXH"
          label="货物规格"
          width="100"
        ></el-table-column>
        <el-table-column
          prop="GBRQ"
          label="工班日期"
          width="180"
        ></el-table-column>
        <el-table-column prop="BC" label="班次" width="180"></el-table-column>
        <el-table-column
          prop="BZXS"
          label="包装形式"
          width="80"
        ></el-table-column>
        <el-table-column
          prop="CZGC"
          label="操作过程"
          width="80"
        ></el-table-column>
        <el-table-column
          prop="ZYD"
          label="作业吨"
          width="80"
        ></el-table-column>
        <el-table-column
          prop="JXS"
          label="件箱辆"
          width="70"
        ></el-table-column>
        <el-table-column
          prop="CPH"
          label="车牌(皮)号"
          width="180"
        ></el-table-column>
        <el-table-column
          prop="JCGCBMC"
          label="进出港船舶名称"
          width="140"
        ></el-table-column>
        <el-table-column prop="BZ" label="备注" width="180"></el-table-column>
        <el-table-column
          prop="JFRXM"
          label="计费人"
          width="80"
        ></el-table-column>
      </el-table>
      <el-pagination
      @current-change="handleCurrentChange"
      :current-page="currentPage"
      :page-size="10"
      layout="total,  prev, pager, next, jumper"
      :total="total">
    </el-pagination>
    </div>
  </div>
</template>
<script>
import host from "../../libs/utils";
import { post } from "../../service/http";
import {formatDate}from '../../assets/vehicleResJs/common'
export default {
  data() {
    return {
      totaldata:[],
      table: [],
      dateArr: [],
      total:0,
      currentPage:0,
      loading:false
    };
  },
  mounted() {
    this.dateArr.push(formatDate(new Date(new Date().getTime() - 24*60*60*1000)))
    this.dateArr.push(formatDate(new Date()))
    this.onSubmit()
  },
  methods: {
    onSubmit() {
      this.loading=true;
      this.table=[]
      this.total=0
      let data = {
        startDate: this.dateArr[0],
        endDate: this.dateArr[1],
        gsmc: JSON.parse(sessionStorage.getItem("user")).XM,
      };
      console.log(data)
      post(host.host5 + "QueLWGS.ashx",data).then(res=>{
        console.log(res)
        if(res.errCode=="SUCCESS"){
          this.loading=false
          this.total=res.data.length
          this.totaldata=res.data
          this.table=this.totaldata.slice(0,10)
        }else{
          this.$message.error('┗|｀O′|┛ 嗷~~，出错了，请联系技术人员！');
        }
      })
    },
    handleCurrentChange(val){
       this.table = this.totaldata.slice(10 * (val - 1), 10 * val);
    }
  },
};
</script>
<style scoped>
.lwcx {
  width: 100%;
}
.lwcx img {
  width: 100%;
}
@media screen and (max-width: 1000px) {
  .lwcx img {
    width: 1080px;
  }
}
.content {
  width: 1400px;
  margin: 20px auto;
}
</style>