<template>
    <div>
      <div v-if="TAG==='tyd'" class="DIV_TYDHead">提运单信息</div>
      <div v-if="TAG==='ht'" class="DIV_TYDHead">合同信息</div>
      <div>
        <table id="table1" class="main-table-httpModule" border="1">
          <tr class="table_tr_alternation">
            <td>
              <div class="td_text_style">
                <span v-if="TAG==='tyd'">提运单编号:</span>
                <span v-if="TAG==='ht'">合同编号:</span>
                <span
                  class="td_text_style2"
                  id="tydbh"
                  v-text="body_data[0].TYDBH"
                  readonly="readonly"
                ></span>
              </div>
            </td>
            <td>
              <div class="td_text_style">
                <span v-if="TAG==='tyd'">类型:</span>
                <span v-if="TAG==='ht'">审核标志:</span>
                <label class="td_text_style2" id="lx" v-text="body_data[0].LX" readonly="readonly"></label>
              </div>
            </td>
            <td>
              <div class="td_text_style">
                <span v-if="TAG==='tyd'">提货方式:</span>
                <span v-if="TAG==='ht'">年度合同编号:</span>
                <label
                  class="td_text_style2"
                  id="thfs"
                  v-text="body_data[0].THFS"
                  readonly="readonly"
                ></label>
              </div>
            </td>
            <td>
              <div class="td_text_style">
                <span>货主:</span>
                <label
                  class="td_text_style2"
                  id="hz"
                  v-text="body_data[0].HZMC"
                  readonly="readonly"
                ></label>
              </div>
            </td>
            <td>
              <div class="td_text_style">
                <span v-if="TAG==='tyd'">货运代理人:</span>
                <span v-if="TAG==='ht'">是否申请过磅:</span>
                <label
                  class="td_text_style2"
                  id="hydlr"
                  v-text="body_data[0].HD"
                  readonly="readonly"
                ></label>
              </div>
            </td>
          </tr>
          <tr class="table_tr_item">
            <td>
              <div class="td_text_style">
                <span v-if="TAG==='tyd'">装卸货类名称:</span>
                <span v-if="TAG==='ht'">货物类别:</span>
                <label
                  class="td_text_style2"
                  id="zxhlmc"
                  v-text="body_data[0].ZXHLMC"
                  readonly="readonly"
                ></label>
              </div>
            </td>
            <td>
              <div class="td_text_style">
                <span v-if="TAG==='tyd'">装卸货物名称:</span>
                <span v-if="TAG==='ht'">货物票号:</span>
                <label
                  class="td_text_style2"
                  id="zxhwmc"
                  v-text="body_data[0].ZXHWMC"
                  readonly="readonly"
                ></label>
              </div>
            </td>
            <td>
              <div class="td_text_style">
                <span v-if="TAG==='tyd'">货物规格:</span>
                <span v-if="TAG==='ht'">货物规格型号:</span>
                <label
                  class="td_text_style2"
                  id="hwgg"
                  v-text="body_data[0].HWGG"
                  readonly="readonly"
                ></label>
              </div>
            </td>
            <td>
              <div class="td_text_style">
                <span v-if="TAG==='tyd'">计划提货吨:</span>
                <span v-if="TAG==='ht'">预计总吨:</span>
                <label
                  class="td_text_style2"
                  id="jhthd"
                  v-text="body_data[0].JHTHD"
                  readonly="readonly"
                ></label>
              </div>
            </td>
            <td>
              <div class="td_text_style">
                <span v-if="TAG==='tyd'">剩余吨:</span>
                <span v-if="TAG==='ht'">合同剩余提货吨:</span>
                <label
                  class="td_text_style2"
                  id="syd"
                  v-text="body_data[0].SYD"
                  readonly="readonly"
                ></label>
              </div>
            </td>
          </tr>
          <tr class="table_tr_alternation">
            <td>
              <div class="td_text_style">
                <span v-if="TAG==='tyd'">完结标志:</span>
                <span v-if="TAG==='ht'">合同完结标志:</span>
                <label
                  class="td_text_style2"
                  id="wjbz"
                  v-text="body_data[0].HTWJBZ"
                  readonly="readonly"
                ></label>
              </div>
            </td>
            <td>
              <div class="td_text_style">
                <span v-if="TAG==='tyd'">完结盈亏吨:</span>
                <span v-if="TAG==='ht'">货物盈亏吨:</span>
                <label
                  class="td_text_style2"
                  id="wjykd"
                  v-text="body_data[0].WJYKD"
                  readonly="readonly"
                ></label>
              </div>
            </td>
            <td>
              <div class="td_text_style">
                <span v-if="TAG==='tyd'">件重:</span>
                <span v-if="TAG==='ht'">预计件箱数:</span>
                <label class="td_text_style2" id="jz" v-text="body_data[0].JZ" readonly="readonly"></label>
              </div>
            </td>
            <td>
              <div class="td_text_style">
                <span v-if="TAG==='tyd'">件箱数:</span>
                <span v-if="TAG==='ht'">合同剩余提货件数:</span>
                <label
                  class="td_text_style2"
                  id="jxs"
                  v-text="body_data[0].JXS"
                  readonly="readonly"
                ></label>
              </div>
            </td>
            <td>
              <div class="td_text_style">
                <span v-if="TAG==='tyd'">货物包装类型:</span>
                <span v-if="TAG==='ht'">货物包装形式:</span>
                <label
                  class="td_text_style2"
                  id="hwbzlx"
                  v-text="body_data[0].BZXSMC"
                  readonly="readonly"
                ></label>
              </div>
            </td>
          </tr>
          <tr class="table_tr_item">
            <td>
              <div class="td_text_style">
                <span v-if="TAG==='tyd'">货物流向地:</span>
                <span v-if="TAG==='ht'">到港时间:</span>
                <label
                  class="td_text_style2"
                  id="hwlxd"
                  v-text="body_data[0].HWLXDMC"
                  readonly="readonly"
                ></label>
              </div>
            </td>
            <td>
              <div class="td_text_style">
                <span>内外贸:</span>
                <label
                  class="td_text_style2"
                  id="nwm"
                  v-text="body_data[0].NWM"
                  readonly="readonly"
                ></label>
              </div>
            </td>
            <td>
              <div class="td_text_style">
                <span>进出口:</span>
                <label
                  class="td_text_style2"
                  id="jck"
                  v-text="body_data[0].JCK"
                  readonly="readonly"
                ></label>
              </div>
            </td>
            <td>
              <div class="td_text_style">
                <span v-if="TAG==='tyd'">进库日期:</span>
                <span v-if="TAG==='ht'">是否进库:</span>
                <label
                  class="td_text_style2"
                  id="jkrq"
                  v-text="body_data[0].JKRQ"
                  readonly="readonly"
                ></label>
              </div>
            </td>
            <td>
              <div class="td_text_style">
                <span>签订日期:</span>
                <label
                  class="td_text_style2"
                  id="qdrq"
                  v-text="body_data[0].QDRQ"
                  readonly="readonly"
                ></label>
              </div>
            </td>
          </tr>
        </table>
      </div>
      <div class="div-xxgl">
        <i class="el-icon-s-grid"></i>
        <span>车辆预约信息管理</span>
      </div>
      <!--给表格添加工具栏-->
      <div class="div-gjl">
        <a style="margin-left:50px"></a>
        <el-link
          :underline="false"
          class="el-icon-circle-plus-outline"
          target="_blank"
          style="font-size:16px;color:rgb(15, 44, 102);"
          @click="addResInfo"
        >添加预约信息</el-link>
        <a style="margin-left:25px"></a>
        <el-link
          :underline="false"
          class="el-icon-edit-outline"
          style="font-size:16px;color:rgb(15, 44, 102);"
          type="primary"
          @click="editResInfo"
        >修改</el-link>
        <a style="margin-left:25px"></a>
        <el-link
          :underline="false"
          class="el-icon-delete"
          style="font-size: 16px;color:rgb(15, 44, 102);"
          type="primary"
          @click="deleteResInfo"
        >删除</el-link>
        <a style="margin-left:25px"></a>
        <!-- <el-link
          :underline="false"
          class="el-icon-printer"
          style="font-size: 16px;color:rgb(15, 44, 102);"
          type="primary"
          @click="printResInfo"
        >打印</el-link> -->
        <a style="margin-left:100px"></a>
        <!--进港车辆数提示-->
        <a style="margin-left:200px"></a>
        <label style="color:#000099;font-size:16px;">已进港车辆数：</label>
        <label style="color:#000099;font-size:16px;" v-text="YJGCLS"></label>
        <a style="margin-left:20px"></a>
        <label style="color:#000099;font-size:16px;">未进港车辆数：</label>
        <label style="color:#000099;font-size:16px;" v-text="WJGCLS"></label>
        <!--进港车辆清单链接-->
        <a style="margin-left:200px"></a>
        <el-link
          :underline="false"
          style="color:rgb(15, 44, 102);font-size:16px;"
          @click="InboundVehicleList"
        >进港车辆清单</el-link>
        <!-- <router-link style="color:#000099;font-size:16;" :to="{name:'InboundVehicleList',params: this.TYDBH}">进港车辆清单</!-->
      </div>
      <ADDRESINFO ref="addResInfo" @submitResInfo="AddResInfo($event)"></ADDRESINFO>
      <!--表格显示区-->

      <div>
          <!--  v-loading="loading" -->
          <el-table
            :data="CLYY_data"
            highlight-current-row
            border
            style="width: 100%;font-size: 15px"
            @row-click="rowClick"
            :header-cell-style="{background:'#F5F5F5'}"
          >
            <el-table-column fixed type="index" width="50"></el-table-column>
            <el-table-column prop="CPH" label="车牌号" width="100" align="center"></el-table-column>
            <el-table-column prop="SJXM" label="司机姓名" width="100" align="center"></el-table-column>
            <el-table-column prop="SFZH" label="身份证号" width="180" align="center"></el-table-column>
            <el-table-column prop="LXDH" label="联系电话" width="120" align="center"></el-table-column>
            <el-table-column prop="JHZYTS" label="计划作业趟数" width="120" align="center"></el-table-column>
            <el-table-column prop="MTZYZL" label="每趟作业重量" width="120" align="center"></el-table-column>
            <el-table-column prop="MTZYJXS" label="每趟作业件箱数" width="150" align="center"></el-table-column>
            <el-table-column prop="JHSCJGSJ" label="计划首次进港时间" width="180" align="center"></el-table-column>
            <el-table-column prop="JHZHYCLGSJ" label="计划最后一次离港时间" width="180" align="center"></el-table-column>
            <el-table-column prop="SFYYCG" label="是否预约成功" width="120" align="center"></el-table-column>
            <el-table-column prop="CLSFYJG" label="车辆是否已进港" width="150" align="center"></el-table-column>
            <!-- <el-table-column
                        label="操作"
                        width="150"
                        align="center">
                    <template slot-scope="scope">
                        <el-button @click="handleClick(scope.row, 'browser')" type="text" size="small" style="font-size: 15px">查看</el-button>
                        <el-button @click="handleClick(scope.row, 'update')" type="text" size="small" style="font-size: 15px">编辑</el-button>
                        <el-button @click="handleClick(scope.row, 'delete')" type="text" size="small" style="color: red; font-size: 15px">删除</el-button>
                    </template>
            </el-table-column>-->
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

      </div>
    </div>
</template>
<script>
import { post } from "../../service/http.js";
import config from "../../service/utils/config.js";
import ADDRESINFO from "../vehicleReservation/home/addEditResInfo.vue";
import { dateToString } from "../../assets/vehicleResJs/common.js";

export default {
  name:"AppointmentEdit",
  components: { ADDRESINFO },
  data() {
    return {
      TAG: "",
      BH: "",
      SFZF:"",
      body_data: [], //存放数据库查询出的数据，并显示到提运单信息表格
      TYDHT_data: [], //接收上个页面传过来的数据
      CLYY_data: [], //存放查询出来的车辆预约信息
      count: 0, //车辆预约总数
      YJGCLS: 0, //已进港车辆数、未进港车辆数
      WJGCLS: 0,
      // newsKey: 1,
      // key: 1,
      currentPage: 0, //初始页
      pagesize: 10, //每页的数据
      currentRow: null,
      loading: false,
      rowData: []
    };
  },
  watch: {
    SFZF(val){
      console.log('as',val)
    },
    BH(val){
      console.log('as',val)
    },
    $router(newValue, oldValue) {
      console.log("route",newValue.meta);
    //   if(newValue.meta.title==="预约编辑"){
    //     var url = config.baseurl + config.CLYYQuery;
    //     var data = {
    //       LX: "AppointmentEdit",
    //       TAG: this.TAG,
    //       BH: this.BH
    //     };
    //     console.log("AppointmentEdit-ht",data);
    //     var promise = post(url, data);
    //     promise.then(v => {
    //       if (v.errCode === "SUCCESS" || v.errCode === "FAIL") {
    //         this.body_data = v.data;
    //         if (this.body_data === null) {
    //           alert("没有相关数据！");
    //         }
    //       }
    //     });
    //     var data1 = {
    //       LX: "CLYYXX",
    //       TAG: this.TAG,
    //       BH: this.BH,
    //       page: this.currentPage,
    //       pagesize: this.pagesize
    //     };
    //     var promise1 = post(url, data1);
    //     promise1.then(v => {
    //       if (v.errCode === "FAIL" || v.errCode === "SUCCESS") {
    //         this.count = v.data.count;
    //         this.YJGCLS = v.data.YJGCLS;
    //         this.WJGCLS = v.data.WJGCLS;
    //         if (this.count > 0) {
    //           this.currentPage = 1;
    //           this.CLYY_data = JSON.parse(v.data.data);
    //         }
    //       }
    //     });
    //   }
    }
  },
  created() {
    this.TYDHT_data = this.$route.query["body_data"];
    this.TAG = this.$route.query["TAG"];
    this.BH = this.$route.query["BH"];
    this.SFZF=this.$route.query["SFZF"];
    var url = config.baseurl + config.CLYYQuery;
      var data = {
      LX: "AppointmentEdit",
      TAG: this.TAG,
      BH: this.BH
    };
      console.log("AppointmentEdit-ht",data);
    var promise = post(url, data);
    promise.then(v => {
      if (v.errCode === "SUCCESS" || v.errCode === "FAIL") {
        this.body_data = v.data;
        if (this.body_data === null) {
          alert("没有相关数据！");
        }
      }
    });
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
    var data1 = {
      LX: "CLYYXX",
      TAG: this.TAG,
      BH: this.BH,
      page: this.currentPage,
      pagesize: this.pagesize
    };
    var promise1 = post(url, data1);
    promise1.then(v => {
      if (v.errCode === "FAIL" || v.errCode === "SUCCESS") {
        this.count = v.data.count;
        this.YJGCLS = v.data.YJGCLS;
        this.WJGCLS = v.data.WJGCLS;
        if (this.count > 0) {
          this.currentPage = 1;
          this.CLYY_data = JSON.parse(v.data.data);
        }
      }
    });
  },
  methods: {
    // 初始页currentPage、初始每页数据数pagesize和数据data
    handleSizeChange: function(size) {
      this.pagesize = size;
      var url = config.baseurl + config.CLYYQuery;
      var data = {
        LX: "CLYYXX",
        TAG: this.TAG,
        BH: this.BH,
        page: this.currentPage,
        pagesize: this.pagesize
      };
      var promise = post(url, data);
      promise.then(v => {
        if (v.errCode === "FAIL" || v.errCode === "SUCCESS") {
          console.log("123",v.data);
          this.CLYY_data = JSON.parse(v.data.data);
        }
      });
    },
    handleCurrentChange: function(currentPage) { 
      this.currentPage = currentPage;
      if (this.count > 0) {
        var url = config.baseurl + config.CLYYQuery;
        var data = {
          LX: "CLYYXX",
          TAG: this.TAG,
          BH: this.BH,
          page: this.currentPage,
          pagesize: this.pagesize
        };
        var promise = post(url, data);
        promise.then(v => {
          if (v.errCode === "FAIL" || v.errCode === "SUCCESS") {
            console.log(v.data);
            this.CLYY_data = JSON.parse(v.data.data);
          }
        });
      }
      this.currentRow = currentPage;
      console.log(this.currentPage); //点击第几页
    },
    InboundVehicleList: function() {
      var redata = {
        BH: this.BH,
        TAG:this.TAG
      };
      this.$router.push({ name: "InboundVehicleList", query: redata });
    },
    addResInfo: function() {
      const date = new Date();
      this.$refs.addResInfo.test = "add";
      this.$refs.addResInfo.title = "添加车辆预约信息";
      this.$refs.addResInfo.dialogFormVisible = true;
      this.$refs.addResInfo.form.TAG = this.TAG;
      this.$refs.addResInfo.form.CPH = "";
      this.$refs.addResInfo.form.SJXM = "";
      this.$refs.addResInfo.form.SFZH = "";
      this.$refs.addResInfo.form.LXDH = "";
      this.$refs.addResInfo.form.JHZYTS = "1";
      this.$refs.addResInfo.form.MTZYZL = "32";
      this.$refs.addResInfo.form.MTZYJXS = "";
      this.$refs.addResInfo.form.JHSCJGSJ = date;
      this.$refs.addResInfo.form.JHZHYCLGSJ = new Date(
        date.getTime() + 24 * 60 * 60 * 1000
      );
    },
    rowClick: function(row) {
      this.rowData = row;
    },

    /********************修改车辆预约信息*************************/
    editResInfo: function() {
      var url = config.baseurl + config.CLYYQuery;
      var deleteData = this.rowData;
      // JSON.stringify(deleteData)=="{}"//Vue中判断对象是否为空的方法
      if (Object.keys(deleteData).length === 0) {
        //未选中某一行
        this.$alert("请选择要修改的信息！", "警告", {
          confirmButtonText: "确定",
          type: "warning"
        });
      } else {
        //选中某一行
        var jhscjgsj = deleteData.JHSCJGSJ;
        var jhzhyclgsj=deleteData.JHZHYCLGSJ;
        jhscjgsj = dateToString(new Date(jhscjgsj));
        jhzhyclgsj = dateToString(new Date(jhzhyclgsj));
        var bh = this.BH;
        var tag = this.TAG;
        var cph = deleteData.CPH;
        var data = {
          LX: "queCLSFYJG",
          BH: bh,
          TAG: tag,
          CPH: cph,
          JHSCJGSJ: jhscjgsj
        };
        var promise = post(url, data);
        promise.then(v => {
          if (v === 1) {
            this.$alert("车辆已进港，不能修改!", "警告", {
              confirmButtonText: "确定",
              type: "warning"
            });
          } else {
            this.$refs.addResInfo.test = "edit";
            this.$refs.addResInfo.title = "修改车辆预约信息";
            this.$refs.addResInfo.dialogFormVisible = true;
            this.$refs.addResInfo.form.TAG = tag;
            this.$refs.addResInfo.form.CPH = cph;
            this.$refs.addResInfo.form.SJXM = deleteData.SJXM;
            this.$refs.addResInfo.form.SFZH = deleteData.SFZH;
            this.$refs.addResInfo.form.LXDH = deleteData.LXDH;
            this.$refs.addResInfo.form.JHZYTS = deleteData.JHZYTS;
            this.$refs.addResInfo.form.MTZYZL = deleteData.MTZYZL;
            this.$refs.addResInfo.form.MTZYJXS = deleteData.MTZYJXS;
            this.$refs.addResInfo.form.JHSCJGSJ = jhscjgsj;
            this.$refs.addResInfo.form.JHZHYCLGSJ = jhzhyclgsj;
            this.$refs.addResInfo.form.CP = cph;
            this.$refs.addResInfo.form.tmp_jhscjgsj = jhscjgsj;
          }
        });
      }
    },
    /********************删除车辆预约信息*************************/
     QueryCLYYXX(bh, index, pagesize) {
      var url = config.baseurl + config.CLYYQuery;
      var data = {
        LX: "CLYYXX",
        TAG: this.TAG,
        BH: bh,
        page: index,
        pagesize: pagesize
      };
      var promise1 = post(url, data);
      promise1.then(v => {
        if (v.errCode === "FAIL" || v.errCode === "SUCCESS") {
          this.count = v.data.count;
          this.YJGCLS = v.data.YJGCLS;
          this.WJGCLS = v.data.WJGCLS;
          if (this.count > 0) {
            this.currentPage = 1;
            console.log(v.data);
            this.CLYY_data = JSON.parse(v.data.data);
          }else{
            this.CLYY_data =[];
          }
        }
      });
      this.rowData=[];
    },
    /**+---------------------------------------------------
     //| 获取系统日志信息，在添加、修改、删除车辆预约信息时需要上传日志信息
     //+---------------------------------------------------
     **/
    getXTRZBean() {
      var xtrz = {
        YHZH: JSON.parse(localStorage.getItem("clientUser")).YHBH,
        YHMC: JSON.parse(localStorage.getItem("clientUser")).KHQC
      }
      return xtrz;
    },
    deleteResInfo: function() {
      var url = config.baseurl + config.CLYYQuery;
      var deleteData = this.rowData;
      // JSON.stringify(deleteData)=="{}"//Vue中判断对象是否为空的方法
      if (Object.keys(deleteData).length === 0) {
        //未选中某一行
        // alert("kong");
        this.$alert("请选择要删除的信息！", "警告", {
          confirmButtonText: "确定",
          type: "warning"
          // showClose: "true"
          // callback: action => {
          //   this.$message({
          //     type: 'warning',
          //     message: `action: ${ action }`
          //   });
          // }
        });
      } else {
        //选中某一行
        if(deleteData.CLSFYJG==='是'){
          this.$alert("车辆已进港，不能删除!", "警告", {
            confirmButtonText: "确定",
            type: "warning"
          });
        }else{
          var jhscjgsj = deleteData.JHSCJGSJ;
          jhscjgsj = dateToString(new Date(jhscjgsj));
          var bh = this.BH;
          var tag = this.TAG;
          var cph = deleteData.CPH;

          var data = {
            LX: "queCLSFYJG",
            BH: bh,
            TAG: tag,
            CPH: cph,
            JHSCJGSJ: jhscjgsj
          };
          var promise = post(url, data);
          promise.then(v => {
            if (v === 1) {
              this.$alert("车辆已进港，不能删除!", "警告", {
                confirmButtonText: "确定",
                type: "warning"
              });
            } else {
              // alert(deleteData.CPH);
              this.$confirm("确定要删除这条信息吗?", "提示", {
                confirmButtonText: "确定",
                cancelButtonText: "取消",
                type: "warning"
                // center: true
              })
                      .then(() => {
                        var data1 = {
                          LX: "deleteResInfo",
                          BH: bh,
                          TAG: tag,
                          CPH: deleteData.CPH,
                          JHSCJGSJ: jhscjgsj,
                          XTRZ:JSON.stringify(this.getXTRZBean())
                        };
                        var promise1 = post(url, data1);
                        promise1.then(v => {
                          if (v === "T") {
                            this.$message({
                              showClose: true,
                              message: "恭喜您，信息删除成功!",
                              type: "success"
                            });
                            this.QueryCLYYXX(bh, "0", this.pagesize);
                          } else if (v === "undefined" || v === null || v === "") {
                            this.$message({
                              showClose: true,
                              message: "信息删除成功!"
                            });
                            this.QueryCLYYXX(bh, "0", this.pagesize);
                          } else {
                            this.$message({
                              showClose: true,
                              message: "删除失败，请重试！",
                              type: "error"
                            });
                          }
                        });
                      })
                      .catch(() => {
                        this.$message({
                          type: "info",
                          message: "已取消删除"
                        });
                      });
            }
          });
        }
      }
    }
  }
};
</script>

<style>
@import "../../assets/css/vehicleRescss/tydxx.css";

input {
  text-align: center;
}
</style>
