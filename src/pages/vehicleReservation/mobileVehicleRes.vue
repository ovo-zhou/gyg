<template>
  <div>
    <flow>
      <flow-state state="1" title="选择访问对象" :is-done="step>=1"></flow-state>

      <flow-line :is-done="step>=2"></flow-line>
      <flow-state state="2" title="填写来访内容" :is-done="step>=2"></flow-state>

      <flow-line :is-done="step>=3"></flow-line>
      <flow-state state="3" title="等待审核" :is-done="step>=3"></flow-state>
    </flow>
    <div v-if="step==1">
      <group class="picker">
        <cell title="访问单位" is-link @click.native="showCompany">
          <span style="color: green">{{company==''?'请选择被访单位':company}}</span>
        </cell>
      </group>
      <awesome-picker
        ref="companyPicker"
        :data="companyPicker.data"
        @confirm="companyPickerConfirm">
      </awesome-picker>
      <x-button type="primary" @click.native="next" class="nextBtn">下一步</x-button>
    </div>

    <div v-if="step==2">
      <group style="text-align: left">
        <cell title="访问单位" :value="company"></cell>
      </group>
      <group style="text-align:left">
        <cell title="预约方式">
          <el-radio v-model="orderWay" label="1">来访</el-radio>
          <el-radio v-model="orderWay" label="2">提(送)货</el-radio>
        </cell>
        <cell title="到访人数">
          <el-input-number v-model="num" :min="1" :max="100" label="描述文字"></el-input-number>
        </cell>
        <x-textarea title="到访事由" :max="200" v-model="reason" placeholder="请输入"></x-textarea>
      </group>
      <div style="margin-top: 1em">
        <el-button icon="el-icon-caret-left" type="default" @click="back">上一步</el-button>
        <el-button type="primary">提交预约</el-button>
      </div>

    </div>

    <div v-if="step==3">第3步</div>
  </div>
</template>

<script>
  import { Flow, FlowState,FlowLine,XButton,Cell,Group,XTextarea} from 'vux'
  export default {
    name: "mobileVehicleRes",
    components: {
      Flow,
      FlowState,
      FlowLine,
      XButton,
      Cell,
      Group,
      XTextarea,
    },
    data() {
      return {
        step:1,
        company:'',
        companyPicker:{
          data:[['果园港有限公司','华为有限公司','苹果公司','小米公司']]
        },
        orderWay:'1',
        date:'',
        time:'',
        num:1,
        reason:''
      }
    },
    methods:{
      next:function () {
        if(this.company==''){
          // this.$message.error('被访单位不能为空！');
          this.$notify.error({
            title: '提示',
            message: '被访单位不能为空'
          });
        }else{
          this.step++
        }
      },
      back:function(){
        this.step--
      },
      showCompany:function () {
        this.$refs.companyPicker.show();
      },
      companyPickerConfirm:function (e) {
        this.company = e[0].value
      }
    }

  }
</script>

<style scoped>
.picker{
  text-align:left;
  margin-top: 30%;
}
.nextBtn{
  margin-top: 20%;
  width: 90%;
}
</style>