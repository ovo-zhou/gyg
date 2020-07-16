<template>
  <div>
    <el-dialog
      :title="title"
      :visible.sync="dialogFormVisible"
      width="400px"
    >
      <el-form
        :model="form"
        :label-position="labelPositon"
        :label-width="formLabelWidth"
        :rules="rules"
        ref="form"
        class
      >
        <el-form-item label="车牌号" prop="CPH" style="margin-bottom:15px;margin-top:-25px">
          <el-input v-model="form.CPH" clearable autocomplete="off" @blur="queDriverInfo"></el-input>
        </el-form-item>
        <el-form-item label="司机姓名" prop="SJXM" style="margin-bottom:15px">
          <el-input v-model="form.SJXM" clearable autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="身份证号" prop="SFZH" style="margin-bottom:15px">
          <el-input v-model="form.SFZH" clearable autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="联系电话" prop="LXDH" style="margin-bottom:15px">
          <el-input v-model="form.LXDH" clearable autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="计划作业趟数" prop="JHZYTS" style="margin-bottom:15px">
          <el-input v-model="form.JHZYTS" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="每趟作业重量" prop="MTZYZL" style="margin-bottom:15px">
          <el-input v-model="form.MTZYZL" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="每趟作业件箱数" style="margin-bottom:15px">
          <el-input v-model="form.MTZYJXS" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="计划首次进港时间" prop="JHSCJGSJ" style="margin-bottom:15px">
          <el-date-picker
            v-model="form.JHSCJGSJ"
            type="datetime"
            style="width: 100%;"
            placeholder="选择日期时间"
            value-format="yyyy-MM-dd HH:mm:ss"
            format="yyyy-MM-dd HH:mm:ss"
            default-time="12:00:00"
          ></el-date-picker>
          <!-- <el-input v-model="form.CPH" autocomplete="off"></el-input> -->
        </el-form-item>
        <el-form-item label="计划最后一次离港时间">
          <div class="block">
            <el-date-picker
              v-model="form.JHZHYCLGSJ"
              type="datetime"
              style="width: 100%;"
              placeholder="选择日期时间"
              default-time="12:00:00"
              value-format="yyyy-MM-dd HH:mm:ss"
              format="yyyy-MM-dd HH:mm:ss"
            ></el-date-picker>
          </div>

          <!-- <el-input v-model="form.CPH" autocomplete="off"></el-input> -->
        </el-form-item>
        <el-form-item style="margin-bottom:-15px;">
          <!-- <div slot="footer" class="dialog-footer"> -->
          <el-button @click="dialogFormVisible = false" style="width:30%;">取 消</el-button>
          <el-button type="primary" @click="submitResInfo('form')" style="width:30%;">保 存</el-button>
          <!-- </div> -->
        </el-form-item>
      </el-form>
    </el-dialog>
  </div>
</template>
<script>
import { post } from "../../../service/http.js";
import config from "../../../service/utils/config.js";
import {dateToString} from "../../../assets/vehicleResJs/common.js"

export default {
  data() {
    var validateSJXM = (rule, value, callback) => {
      var patt = /^[\u0391-\uFFE5]+$/; //校验汉字
      if (!patt.test(value)) {
        callback(new Error("姓名格式不正确"));
      } else {
        callback();
      }
    };
    var validateSFZH = (rule, value, callback) => {
      var patt = /^[0-9]{17}[0-9xX]{1}$/; //校验身份证
      if (!patt.test(value)) {
        callback(new Error("身份证号输入不合法"));
      } else {
        callback();
      }
    };
    var validateJHZYTS = (rule, value, callback) => {
      var patt = /^[1-9]\d*$/; //非负整数
      if (!patt.test(value)) {
        callback(new Error("计划作业趟数必须为非负整数"));
      } else {
        callback();
      }
    };
    var validateMTZYZL = (rule, value, callback) => {
      if (value=="" ||value==null) {
        callback(new Error("每趟作业重量不能为空"));
      } else {
        callback();
      }
    };
    var validateJHSCJGSJ = (rule, value, callback) => {
      if (value==""||value==null) {
        callback(new Error("计划首次进港时间不能为空"));
      } else {
        callback();
      }
    };
    return {
      title:"",
      labelPositon: "left",
      //   addResInfo: false,
      dialogFormVisible: false,
      SaveTag: 1, //解决多次点击保存按钮问题
      test:"",
      form: {
        TAG: "",
        CPH: "",
        SJXM: "",
        SFZH: "",
        LXDH: "",
        JHZYTS: "1",
        MTZYZL: "32",
        MTZYJXS: "",
        JHSCJGSJ: "",
        JHZHYCLGSJ: "",
        CP:"",
        tmp_jhscjgsj:""
      },
      formLabelWidth: "160px",
      rules: {
        CPH: [
          { required: true, message: "请输入车牌号", trigger: "blur" }
          // { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
        ],
        SJXM: [
          { required: true, message: "请输入司机姓名", trigger: "blur" },
          { validator: validateSJXM, trigger: "blur" }
        ],
        SFZH: [
          { required: true, message: "请输入身份证号", trigger: "blur" },
          {
            min: 18,
            max: 18,
            message: "需要输入18位身份证号",
            trigger: "blur"
          },
          { validator: validateSFZH, trigger: "blur" }
        ],
        LXDH: [{ required: true, message: "手机号不能为空", trigger: "blur" }],
        JHZYTS: [
          { required: true, message: "计划作业趟数不能为空", trigger: "blur" },
          { validator: validateJHZYTS, trigger: "blur" }
        ],
        MTZYZL: [
          { required: true, message: "每趟作业重量为必输项", trigger: "blur" },
          { validator: validateMTZYZL, trigger: "blur" }
        ],
         JHSCJGSJ: [
          { required: true, message: "计划首次进港时间不能为空", trigger: "blur" },
          { validator: validateJHSCJGSJ, trigger: "blur" }
        ]
      }
    };
  },
  created() {},

  methods: {
    //查询车辆预约信息
    QueryCLYYXX(bh, index, pagesize) {
      var url = config.baseurl + config.CLYYQuery;
      var data = {
        LX: "CLYYXX",
        TAG: this.form.TAG,
        BH: bh,
        page: index,
        pagesize: pagesize
      };
      var promise1 = post(url, data);
      promise1.then(v => {
        if (v.errCode === "FAIL" || v.errCode === "SUCCESS") {
          this.$parent.$data.count = v.data.count;
          this.$parent.$data.YJGCLS = v.data.YJGCLS;
          this.$parent.$data.WJGCLS = v.data.WJGCLS;
          if (this.$parent.$data.count > 0) {
            this.$parent.$data.currentPage = 1;
            console.log(v.data);
            this.$parent.$data.CLYY_data = JSON.parse(v.data.data);
          }else{
            this.$parent.$data.CLYY_data =[];
          }
        }
      });
      this.$parent.$data.rowData=[];
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
    /**+---------------------------------------------------
    //| 保存按钮
    //+---------------------------------------------------
     **/
    submitResInfo(formName) {
      console.log(formName);
      var SaveTag = this.SaveTag;
      if (SaveTag === 1){
        // alert("123" + this.form.MTZYJXS + "***");
        var time = JSON.parse(localStorage.getItem("clientUser")).LOGINTIME; //取当前时间
        console.log("LoginTime",time)
        time = time
          .replace(/-/g, "")
          .replace(/:/g, "")
          .replace(/ /g, ""); //转换格式，如“20190616210342”

        this.$refs[formName].validate(valid => {
          if (!valid) {
            this.$message({
              showClose: true,
              message: "输入不正确，请检查！",
              type: "error"
            });
            return false;
          } else {
            var JHSCJGSJ;
            var JHZHYCLGSJ;
            var jgsj = "" + this.form.JHSCJGSJ;
            var lgsj = "" + this.form.JHZHYCLGSJ;
            if (jgsj.length > 20) {
              JHSCJGSJ = dateToString(this.form.JHSCJGSJ);
              this.form.JHSCJGSJ = JHSCJGSJ;
            } else {
              JHSCJGSJ = this.form.JHSCJGSJ;
            }
            if (lgsj.length > 20) {
              JHZHYCLGSJ = dateToString(this.form.JHZHYCLGSJ);
              this.form.JHZHYCLGSJ = JHZHYCLGSJ;
            } else {
              JHZHYCLGSJ = this.form.JHZHYCLGSJ;
            }
            // alert(""+JHSCJGSJ+"     "+JHZHYCLGSJ)
            var startTime = Date.parse(JHSCJGSJ.replace(/-/g, "/"));
            var endTime = Date.parse(JHZHYCLGSJ.replace(/-/g, "/"));
            var nowTime = new Date().getTime();
            var days_start_end =
              (endTime - startTime) / (1 * 24 * 60 * 60 * 1000);
            var days_end_now = (endTime - nowTime) / (1 * 24 * 60 * 60 * 1000);
            var qdrq = this.$parent.$data.body_data[0].QDRQ;
            var qdrqTime = Date.parse(qdrq.replace(/-/g, "/"));
            // alert(""+startTime+"***"+endTime+"***"+nowTime+"***"+days_end_now+"***"+days_start_end+"***"+qdrqTime);
            var sfzf = this.$parent.$data.SFZF;

            if (startTime >= endTime) {
              this.$message({
                showClose: true,
                message: "离港时间不得小于进港时间！",
                type: "error"
              });
            } else if (startTime < nowTime - 30 * 60 * 1000) {
              //开始时间不能小于现在时间往前推30分钟
              this.$message({
                showClose: true,
                message: "进港时间不能小于现在!",
                type: "error"
              });
            } else if (days_end_now > 3) {
              this.$message({
                showClose: true,
                message: "预约时间最多往后推3天!",
                type: "error"
              });
            } else if (days_start_end > 1) {
              this.$message({
                showClose: true,
                message: "预约时间只能在一天以内!",
                type: "error"
              });
            } else if (
              endTime - qdrqTime > 15 * 24 * 60 * 60 * 1000 &&
              sfzf != "是"
            ) {
              this.$message({
                showClose: true,
                message: "离港时间不得超过签订日期15天!",
                type: "error"
              });
            } else {
              SaveTag = 0;
              var url = config.baseurl + config.CLYYQuery;
              var data = {
                LX: "addEditResInfo",
                test:this.test,
                FORM: this.form,
                BH: this.$parent.$data.BH,
                LoginTime: time,
                SYD: this.$parent.$data.body_data[0].SYD,
                XTRZ:JSON.stringify(this.getXTRZBean())
              };
              var promise = post(url, data);
              promise.then(v => {
                console.log('tag',v);
                if (v === "T") {
                  this.$message({
                    showClose: true,
                    message: "恭喜您，信息保存成功！",
                    type: "success"
                  });
                  SaveTag = 1;
                  this.QueryCLYYXX(
                    this.$parent.$data.BH,
                    "0",
                    this.$parent.$data.pagesize
                  );
                  this.dialogFormVisible = false;
                } else if (v === "M") {
                  this.$message({
                    showClose: true,
                    message: "保存失败，计划提货重量超出总重量！",
                    type: "error"
                  });
                  SaveTag = 1;
                } else if (v === "S") {
                  this.$message({
                    showClose: true,
                    message: "保存失败，散货的每趟作业件箱数为0或者不填！",
                    type: "error"
                  });
                  SaveTag = 1;
                } else if (v === "J") {
                  this.$message({
                    showClose: true,
                    message: "保存失败，计划件箱数超出总的件箱数！",
                    type: "error"
                  });
                  SaveTag = 1;
                } else if (v === "L") {
                  this.$message({
                    showClose: true,
                    message: "保存失败，车辆在此时间段内已有预约！",
                    type: "error"
                  });
                  SaveTag = 1;
                } else if (v === "undefined" || v === null || v === "") {
                  this.$message({
                    showClose: true,
                    message: "信息保存成功,但未连接到物管系统。"
                  });
                  SaveTag = 1;
                  this.QueryCLYYXX(
                    this.$parent.$data.BH,
                    "0",
                    this.$parent.$data.pagesize
                  );
                  this.dialogFormVisible = false;
                } else if (v.length > 5) {
                  var data = JSON.parse(v);
                  this.$message({
                    showClose: true,
                    message:
                      "保存失败，车牌号为:" +
                      data[0].CPH +
                      "的车已被系统加入黑名单，禁止预约时间：" +
                      data[0].JZYYQSSJ +
                      "到" +
                      data[0].JZYYJSSJ +
                      ",禁止原因：" +
                      data[0].JZYY +
                      "。"
                  });
                  SaveTag = 1;
                } else {
                  this.$message({
                    showClose: true,
                    message: "保存失败，请核对!",
                    type: "question"
                  });
                  SaveTag = 1;
                }
              });
              //  this.dialogFormVisible = false;
              // console.log("qwe",this.dateValue);
              // this.$emit("submitResInfo", this.parm);
              // this.init();
              // this.$parent.$data.key++;
            }
          }
        });
      }
    },
    /**+---------------------------------------------------
     //| 查询司机信息，并自动填充
     //+---------------------------------------------------
     **/
    queDriverInfo() {
      var CPH = this.form.CPH;
      if(CPH.length<4){
        this.$message("请至少输入四位车牌号");
      }else {
        CPH=CPH.toUpperCase();
        var url = config.baseurl + config.CLYYQuery;
        var data = {
          LX: "QueDriverInfo",
          CPH: CPH
          // pagesize: this.pagesize
        };
        var promise = post(url, data);
        promise.then(v => {
          if (v.data !=null) {
            this.form.CPH=v.data[0].CPH;
            this.form.SJXM = v.data[0].SJXM;
            this.form.SFZH = v.data[0].SFZH;
            this.form.LXDH = v.data[0].LXDH;
          }else{
            this.form.SJXM = "";
            this.form.SFZH = "";
            this.form.LXDH = "";
          }
          console.log(v.data);
        });
      }
    }
  }
};
</script>
<style>
</style>
