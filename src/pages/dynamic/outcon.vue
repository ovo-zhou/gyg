<template>
    <div class="bulletin">
        <h1>相关链接</h1>
        <ul>
            <li>
                <a href="http://www.cqg.com.cn" target="_blank" class="company">重庆港务物流集团有限公司</a>
            </li>

            <li>
                <a href="http://www.liangjiang.gov.cn" target="_blank" class="company">重庆·两江新区网</a> |
                <a href="http://www.zgsyb.com/" target="_blank" class="company">中国水运网</a>
            </li>

            <li>
                <a href="http://www.cjh.com.cn/" target="_blank" class="company">长江水文网</a> |
                <a href="http://www.zgjtb.com" target="_blank" class="company">中国交通报</a>
            </li>

            <li>
                <a href="https://cjhy.mot.gov.cn/" target="_blank" class="company">交通运输部长江航务管理局</a>
            </li>

            <li>
                <a href="http://www.12371.cn/" target="_blank" class="company">共产党员网</a> |
                <a href="http://www.ccyl.org.cn/" target="_blank" class="company">中国共青团</a> 
                <!-- <a href="http://www.nbport.com.cn/gfww/" target="_blank" class="company">宁波舟山港</a> -->
            </li>
        </ul>
    </div>
</template>

<script>
    export default {
        name: "outcon"
    }
</script>

<style scoped>
 .bulletin{
     margin-bottom: 50px;
 }
    .bulletin ul{
        padding-left: 12px;
    }
    .bulletin h1 {
        margin-bottom: 15px;
        margin-top: 5px;
        font-size: 16px;
        background: #0088b5;
        color: #ffffff;
        line-height: 35px;
        padding-left: 15px;
    }

    .bulletin li {
        margin-bottom: 10px;
        list-style-type:none;
        font-size: 16px;
    }
 .bulletin li a{
     padding-left: 3px;
     margin-right: 3px;
 }
    a:link {
        color: #005982;
    }

    a:visited {
        color: #8a8f97;
    }

    a:hover {
        color: #0E68B1;
    }
</style>