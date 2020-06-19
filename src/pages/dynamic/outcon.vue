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
                <a href="http://gzw.cq.gov.cn/" target="_blank" class="company">重庆市国资委</a> |
                <a href="http://www.zgjtb.com" target="_blank" class="company">中国交通报</a>
            </li>

            <li>
                <a href="https://cjhy.mot.gov.cn/" target="_blank" class="company">交通运输部长江航务管理局</a>
            </li>

            <li>
                <a href="http://www.wzg.com.cn/" target="_blank" class="company">万州港</a> |
                <a href="https://www.gzport.com/foreground/index.html" target="_blank" class="company">广州港</a> |
                <a href="http://www.nbport.com.cn/gfww/" target="_blank" class="company">宁波舟山港</a>
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
        padding-left: 15px;
    }
    .bulletin h1 {
        margin-bottom: 12px;
        margin-top: 5px;
        font-size: 16px;
        background: #0088b5;
        color: #ffffff;
        line-height: 35px;
        padding-left: 15px;
    }

    .bulletin li {
        margin-bottom: 5px;
        list-style-type:none;
        font-size: 14px;
    }

    a:link {
        color: #005982;
    }

    a:visited {
        color: #8a8f97;
    }

    a:hover {
        color: rgb(0, 148, 224);
    }
</style>