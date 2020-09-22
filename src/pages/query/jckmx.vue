<template>
  <div class="jckmx">
    <el-form :inline="true" :model="form" class="demo-form-inline">
      <el-form-item label="开始时间">
         <el-date-picker type="date" placeholder="选择日期" v-model="form.kssj" style="width: 100%;" value-format="yyyy/MM/dd"></el-date-picker>
      </el-form-item>
      <el-form-item label="结束时间">
         <el-date-picker type="date" placeholder="选择日期" v-model="form.jssj" style="width: 100%;" value-format="yyyy/MM/dd"></el-date-picker>
      </el-form-item>
      <el-form-item label="操作过程">
        <el-select v-model="form.czgcbm">
          <el-option label="选择操作过程" value="0"></el-option>
         <template v-for="(item,index) in czgc">
          <el-option :label="item.MC" :value="item.BM" :key="index"></el-option>
         </template>
        </el-select>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="query">查询</el-button>
      </el-form-item>
    </el-form>
    <el-table :data="tableData"  style="width: 100%" border highlight-current-row :header-cell-style="{background:'#F5F5F5'}">
      <el-table-column prop="GBRQ" label="工班日期" width="110"></el-table-column>
      <el-table-column prop="BCMC" label="班次" width="60"></el-table-column>
      <el-table-column prop="ZYSJ" label="作业时间" width="160"></el-table-column>
      <el-table-column prop="HWLBMC" label="货物类型" width="120"></el-table-column>
      <el-table-column prop="HWGGXH" label="规格型号" width="100"></el-table-column>
      <el-table-column prop="YSGJ" label="运输工具"  width="80"></el-table-column>
      <el-table-column prop="YSXX" label="运输信息" width="280"></el-table-column>
      <el-table-column prop="CZGCMC" label="操作过程"></el-table-column>
      <el-table-column prop="ZL" label="重量"></el-table-column>
      <el-table-column prop="JXS" label="件箱数"></el-table-column>
      <el-table-column prop="LHYMC" label="理货员"></el-table-column>
    </el-table>
    <el-pagination
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :page-sizes="[10, 50, 100]"
      :page-size="10"
      layout="total, sizes, prev, pager, next, jumper"
      :total="total">
    </el-pagination>
  </div>
</template>

<script>
import {post} from '../../service/http'
import host from '../../libs/utils'
import {formatDate}from '../../assets/vehicleResJs/common'
export default {
  data() {
    return {
    form:{
        kssj:'',
        jssj:'',
        czgcbm:'0',
        hzqc:JSON.parse(sessionStorage.getItem("clientUser")).KHQC
    },
      tableData: [],
      czgc:[],
      total:"",
      alldata:[],
      pagesize:10
    };
  },
  mounted(){
    //加载操作过程
    var url=host.host5+"QueCZGC.ashx"
    post(url).then(res=>{
      // console.log(res)
      this.czgc=res.data;
    })
    this.form.kssj= formatDate(new Date(new Date().getTime() - 24*60*60*1000)) ; 
    this. form.jssj=formatDate(new Date()) 
    this.query();
  },
  methods:{
     handleSizeChange(val) {
        this.pagesize=val
        this.tableData=this.alldata.slice(0,this.pagesize)
      },
      handleCurrentChange(val) {
       var start =(val-1)*this.pagesize;
       var end  =start+this.pagesize;
       this.tableData=this.alldata.slice(start,end)
      },
    query(){
      var url=host.host5+"QueJCKMX.ashx";
      console.log(this.form)
      post(url,this.form).then(res=>{
        console.log(res)
        if(res.errCode=="SUCCESS"){
          if(res.data===null){
            this.alldata=[];
            this.tableData=[];
            this.total=0
            return
          }
          this.alldata=res.data;
          this.total=this.alldata.length;
          this.tableData=this.alldata.slice(0,this.pagesize)
        } 
      })
    }
  }
};
</script>

<style scoped>
.jckmx {
  width: 100%;
}
</style>