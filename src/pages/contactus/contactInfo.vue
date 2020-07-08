<template>
<div>
<img src="../../assets/contact.png" alt="" width="100%">
    <div class="contact">
        
        <div class="title">
            <span>联系方式：</span>
            <hr style="margin-top:5px;"/>
        </div>
        <div class="content">
            <i class="el-icon-phone"></i>
            <span>座机：023-60350627（商务）； </span>
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
            <hr style="margin-top:5px;"/>
        </div>
        <div class="content">
            <i class="el-icon-location"></i>
            <span>地址：重庆市江北区鱼嘴镇东风路146号</span>
        </div>
        <div class="map">
            <img src="../../assets/map.png" style="width: 100%"/>
        </div>
    </div>
    </div>
</template>
<script>
    export default {}
</script>
<style scoped>
    .contact {
        width: 800px;
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
        margin-bottom: 40px;
    }

    .firstline {
        margin-bottom: 20px;
        margin-top: 20px;
    }
</style>