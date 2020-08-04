<template>
  <div>
    <img src="../../assets/contact.png" alt width="100%" />
    <div class="contact">
      <div class="title">
        <span>联系方式：</span>
        <hr style="margin-top:5px;" />
      </div>
      <div class="content">
        <i class="el-icon-phone"></i>
        <span>座机：023-60350627（商务）；</span>
        <span>023-67582606（调度）</span>
      </div>
      <div class="content">
        <i class="el-icon-printer"></i>
        <span>传真：023-67587523</span>
      </div>
      <div class="content">
        <i class="el-icon-message"></i>
        <span>邮箱：17723554589@163.com</span>
      </div>
      <div class="title" style="margin-top: 50px;">
        <span>地址：</span>
        <hr style="margin-top:5px;" />
      </div>
      <div class="content">
        <i class="el-icon-location"></i>
        <span>地址：重庆市江北区鱼嘴镇东风路146号</span>
      </div>

      <div class="map" id="allmap">
        <!-- <img src="../../assets/map.png" style="width: 100%" /> -->
      </div>
    </div>
  </div>
</template>
<script>
import BMap from "BMap";
export default {
  data() {
    return {
      form: {
        address: "正在定位……",
      },
    };
  },
  mounted() {
    this.CreateMap();
  },
  methods: {
    CreateMap() {
      var map = new BMap.Map("allmap", { enableMapClick: false }); //实例化
      var point = new BMap.Point(106.789967,29.624005);
      var marker = new BMap.Marker(point); // 创建标注
      map.addOverlay(marker); // 将标注添加到地图中
      map.centerAndZoom(point, 16);
      var opts = {
        width: 200, // 信息窗口宽度
        height: 100, // 信息窗口高度
        title: "重庆果园件散货码头有限公司", // 信息窗口标题
        enableMessage: true, //设置允许信息窗发送短息
        message: "祝您一路顺风",
      };
      var infoWindow = new BMap.InfoWindow(
        "地址：鱼嘴镇人民政府鱼嘴镇果园港",
        opts
      ); // 创建信息窗口对象
      marker.addEventListener("click", function () {
        map.openInfoWindow(infoWindow, point); //开启信息窗口
      });
      map.addControl(new BMap.MapTypeControl({
		mapTypes:[
            BMAP_NORMAL_MAP,
            BMAP_HYBRID_MAP
        ]}));	  
      map.setCurrentCity("重庆市");
      map.enableScrollWheelZoom(true);
    },
  },
};
</script>
<style scoped>
.contact {
  width: 1000px;
  margin: 0 auto;
  flex-direction: row;
  justify-content: space-between;
}

.title {
  font-size: 20px;
  font-weight: bold;
  margin-top: 30px;
  padding-bottom: 8px;
}

i {
  font-size: 30px;
  margin-right: 20px;
  padding-top: 10px;
}

.icon {
  text-align: center;
}

.map {
  margin-top: 20px;
  height: 550px;
}

.firstline {
  margin-bottom: 20px;
  margin-top: 20px;
}
</style>