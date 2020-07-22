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
    <el-table :data="tableData" style="width: 100%"  max-height="500">
      <el-table-column prop="GBRQ" label="工班日期"></el-table-column>
      <el-table-column prop="BCMC" label="班次"></el-table-column>
      <el-table-column prop="ZYSJ" label="作业时间"></el-table-column>
      <el-table-column prop="HWLBMC" label="货物类型"></el-table-column>
      <el-table-column prop="HWGGXH" label="货物规格型号" width="120"></el-table-column>
      <el-table-column prop="YSGJ" label="运输工具"></el-table-column>
      <el-table-column prop="YSXX" label="运输信息"></el-table-column>
      <el-table-column prop="CZGCMC" label="操作过程"></el-table-column>
      <el-table-column prop="ZL" label="重量"></el-table-column>
      <el-table-column prop="JXS" label="件箱数"></el-table-column>
      <el-table-column prop="LHYMC" label="理货员"></el-table-column>
    </el-table>
  </div>
</template>

<script>
import {post} from '../../service/http'
import host from '../../libs/utils'
export default {
  data() {
    return {
    form:{
        kssj:'',
        jssj:'',
        czgcbm:'0'
    },
      tableData: [],
      czgc:[]
    };
  },
  mounted(){
    //加载操作过程
    var url=host.host5+"QueCZGC.ashx"
    post(url).then(res=>{
      // console.log(res)
      this.czgc=res.data;
    })
  },
  methods:{
    query(){
      var url=host.host5+"QueJCKMX.ashx";
      console.log(this.form)
      post(url,this.form).then(res=>{
        console.log(res)
        if(res.errCode=="SUCCESS"){
          this.tableData=res.data
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