<template>
    <div class="contact">
      <div class="firstline">
        <el-row class="icon" gutter="90">
          <el-col span="12">
            <div>
              <i class="el-icon-phone"></i>
            </div>
            <span>座机：023-60350678（商务）</span>
            <br />
            <span>023-67582606（调度）</span>
          </el-col>
          <el-col span="12">
            <div>
              <i class="el-icon-location"></i>
            </div>
            <span>地址：重庆市江北区鱼嘴镇东风路146号</span>
          </el-col>
        </el-row>
      </div>
      <div>
        <el-row class="icon" gutter="90">
          <el-col span="12">
            <div>
              <i class="el-icon-printer"></i>
            </div>
            <span>传真：023-67587523</span>
          </el-col>
          <el-col span="12">
            <div>
              <i class="el-icon-message"></i>
            </div>
            <span>邮箱：17723554589@163.com</span>
          </el-col>
        </el-row>
      </div>
      <div class="map">
        <img src="../../assets/map.png" style="width: 100%" />
      </div>
    </div>
</template>
<script>
export default {
    
}
</script>
<style scoped>
.contact {
  width: 800px;
  margin: 0 auto;
  flex-direction: row;
  justify-content: space-between;
}

i {
  font-size: 40px;
}

.icon {
  text-align: center;
}

.map {
  margin-top: 30px;
}

.firstline {
  margin-bottom: 20px;
  margin-top: 20px;
}
</style>