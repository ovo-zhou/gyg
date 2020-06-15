<template>
  <div>
    <el-form ref="form" :model="form" label-width="80px">
      <el-form-item label="业务名称">
        <el-input v-model="form.name"></el-input>
      </el-form-item>
      <el-form-item label="发布时间">
        <el-input v-model="form.date"></el-input>
      </el-form-item>
      <el-form-item label="流程图">
        <el-upload
  action="https://jsonplaceholder.typicode.com/posts/"
  list-type="picture-card"
  :on-preview="handlePictureCardPreview"
  :on-remove="handleRemove">
  <i class="el-icon-plus"></i>
</el-upload>
<el-dialog :visible.sync="dialogVisible">
  <img width="100%" :src="dialogImageUrl" alt="">
</el-dialog>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
    data(){
        return{
            form:{
                name:"",
                date:""
            },
             dialogImageUrl: '',
        dialogVisible: false
        }
    }
};
</script>

<style>
</style>