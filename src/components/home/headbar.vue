<template>
  <div>
    <div class="top">
      <div class="top_contain">
        <div>
          <span class="span1">
            {{
              getDate +
              "\xa0\xa0\xa0\xa0" +
              this.weatherinfo.city +
              "\xa0\xa0\xa0\xa0" +
              this.weatherinfo.wea +
              " "
            }}
            <font size="3" id="tem2">{{ this.weatherinfo.tem2 + "℃" }}</font>
            {{ "~" }}
            <font size="3" id="tem1">{{ this.weatherinfo.tem1 + "℃" }}</font>
            {{ "\xa0\xa0\xa0\xa0" + this.weatherinfo.week }}
          </span>
        </div>
        <div class="contain_right">
          <div>
            <span class="span3" @click="stafflogin">内网首页</span>

            <span
              class="span3"
              @click="login"
              v-if="!this.$store.state.loginstate"
              >{{ this.$store.state.loginMessage }}</span
            >

            <span class="span3 dropdown" v-else
              >{{ this.$store.state.loginMessage }}
              <p class="dropdown-content" @click="exitlogin">退出登录</p>
            </span>
            <span class="span3">
              <a href="http://222.178.229.150:59300/#/login">员工登录</a>
            </span>
          </div>
        </div>
      </div>
    </div>
    <div class="menu_tab" id="nav">
      <div class="menu_contain">
        <div>
          <img class="icon3" src="../../assets/newlogo1.png" />
          <div class="companyName">
            <p style="margin-left: 20px">重庆果园港埠有限公司</p>
            <p>重庆果园件散货码头有限公司</p>
          </div>
        </div>
        <div class="tab">
          <div class="tab_item" @click="toHomepage">
            <h3>首页</h3>
            <h4>HOME</h4>
          </div>
          <div class="tab_item" @click="toProfile">
            <h3>企业简介</h3>
            <h4>CO-PROFILE</h4>
          </div>
          <div class="tab_item" @click="toDynamic">
            <h3>行业动态</h3>
            <h4>DYNAMIC</h4>
          </div>
          <div class="tab_item" @click="toDZSW">
            <h3>电子商务</h3>
            <h4>E-COMMERCE</h4>
          </div>
          <div class="tab_item" @click="business">
            <h3>业务流程</h3>
            <h4>BUSSINESS</h4>
          </div>
          <div class="tab_item" @click="toVehicle">
            <h3>车辆预约</h3>
            <h4>VEHICLE</h4>
          </div>
          <div class="tab_item" @click="toQuery">
            <h3>客户查询</h3>
            <h4>QUERY</h4>
          </div>
          <div class="tab_item" @click="contactus">
            <h3>联系我们</h3>
            <h4>CONTACT US</h4>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import axios from "axios";
import host from "../../libs/utils";
export default {
  data() {
    return {
      weatherinfo: "",
    };
  },
  mounted() {
    let mynav = document.getElementById("nav");
    window.onscroll = () => {
      if (document.documentElement.scrollTop > mynav.offsetTop) {
        mynav.style.position = "fixed";
        mynav.style.top = "0px";
      } else {
        mynav.style.position = "static";
      }
    };
    axios.post(host.host1 + "weather.ashx").then((e) => {
      // console.log(e.data);
      this.weatherinfo = e.data;
      var tem2 = document.getElementById("tem2");
      var tem1 = document.getElementById("tem1");
      if (this.weatherinfo.tem2 <= 35) {
        tem2.style.color = "green";
      } else if (this.weatherinfo.tem2 > 35 && this.weatherinfo.tem2 <= 37) {
        tem2.style.color = "blue";
      } else if (this.weatherinfo.tem2 > 37 && this.weatherinfo.tem2 <= 40) {
        tem2.style.color = "orange";
      } else if (this.weatherinfo.tem2 > 40) {
        tem2.style.color = "red";
      }
      if (this.weatherinfo.tem1 <= 35) {
        tem1.style.color = "green";
      } else if (this.weatherinfo.tem1 > 35 && this.weatherinfo.tem1 <= 37) {
        tem1.style.color = "blue";
      } else if (this.weatherinfo.tem1 > 37 && this.weatherinfo.tem1 <= 40) {
        tem1.style.color = "orange";
      } else if (this.weatherinfo.tem1 > 40) {
        tem1.style.color = "red";
      }
    });
  },
  computed: {
    getDate: function () {
      let date = new Date();
      let year_month_day =
        date.getFullYear() +
        "年" +
        (date.getMonth() + 1) +
        "月" +
        date.getDate() +
        "日";
      return year_month_day;
    },
  },
  methods: {
    login() {
      if (this.$store.state.loginMessage == "客户登录") {
        this.$router.push("/clientlogin");
        return;
      }
    },
    exitlogin() {
      sessionStorage.removeItem("clientUser");
      sessionStorage.removeItem("lwuser");
      this.$store.commit("changeMessage", "客户登录");
      this.$store.commit("changeState", false); //改变登录状态
      this.$router.push("/clientlogin");
    },
    toDZSW() {
      window.open("http://222.178.229.150:58080");
      document.body.scrollIntoView();
    },
    toHomepage() {
      this.$router.push("/homepage");
      document.body.scrollIntoView();
    },
    toProfile() {
      this.$router.push("/profile");
      document.body.scrollIntoView();
    },
    contactus() {
      this.$router.push("/contactus");
      document.body.scrollIntoView();
    },
    business() {
      this.$router.push("/business");
      document.body.scrollIntoView();
    },
    toDynamic() {
      this.$router.push("/new");
      document.body.scrollIntoView();
    },
    toQuery() {
      if (sessionStorage.getItem("lwuser") != null) {
        this.$router.push("/lwcx");
      } else if (sessionStorage.getItem("clientUser") != null) {
        this.$router.push("/query");
      } else {
        this.$router.push("/clientlogin");
      }
      document.body.scrollIntoView();
    },
    toVehicle() {
      this.$router.push("/vehicle");
      document.body.scrollIntoView();
    },
    stafflogin() {
      window.open("http://222.178.229.150:59300"); //http://172.16.199.97:9090
    },
  },
};
</script>
<style scoped>
.selectbar {
  width: 1080px;
  margin: 0px auto;
}
.selectbar span {
  color: red;
  margin-right: 50px;
  font-size: 3em;
}
.selectbar span:hover {
  cursor: pointer;
}
.top {
  width: 100%;
  height: 50px;
  background: rgba(255, 255, 255, 1);
}
.top_contain {
  margin: 0px auto;
  background: rgba(255, 255, 255, 1);
  width: 1080px;
  height: 50px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}
.contain_right {
  display: flex;
  flex-direction: row;
}
.span1 {
  line-height: 50px;
  font-size: 14px;
  font-family: Microsoft YaHei;
  font-weight: 400;
  color: rgba(88, 88, 88, 1);
}
.span2 {
  line-height: 50px;
  font-size: 14px;
  font-family: Microsoft YaHei;
  font-weight: 400;
  color: rgba(68, 68, 68, 1);
  margin-left: 5px;
}
.span3 {
  line-height: 50px;
  font-size: 14px;
  font-family: Microsoft YaHei;
  font-weight: 400;
  color: rgba(0, 64, 110, 1);
  margin-left: 5px;
  cursor: pointer;
  /* background: khaki; */
  display: inline-block;
}
.span3 a {
  text-decoration: none;
  color: rgba(0, 64, 110, 1);
}
.dropdown-content {
  background: #ffffff;
  display: none;
  position: absolute;
  margin-left: 30px;
  padding-left: 20px;
  padding-right: 20px;
  border-radius: 5px;
  line-height: 30px;
  color: black;
  margin-top: -10px;
}
.dropdown:hover .dropdown-content {
  display: block;
}
.icon1 {
  display: inline-block;
  vertical-align: middle;
}
.icon2 {
  display: inline-block;
  vertical-align: middle;
}
.tel {
  margin-right: 30px;
}
.menu_tab {
  width: 100%;
  height: 87px;
  background: rgba(14, 104, 177, 1);
  z-index: 99;
}
.menu_contain {
  width: 1080px;
  height: 87px;
  /* background:rgba(14,104,177,1); */
  background: rgba(14, 104, 177, 1);
  margin: 0px auto;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}
.icon3 {
  margin-top: 25px;
  width: 70px;
  height: 40px;
}
.companyName {
  position: relative;
  left: 80px;
  top: -45px;
  color: white;
  font-size: 14px;
  font-weight: bold;
  cursor: default;
}
.tab {
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
}
.tab_item {
  background: rgba(14, 104, 177, 1);
  padding-top: 20px;
  padding-left: 10px;
  padding-right: 10px;
}
.tab_item:hover {
  cursor: pointer;
  background: rgba(0, 56, 88, 1);
}
.tab_item h3 {
  text-align: center;
  font-size: 18px;
  font-family: Microsoft YaHei;
  font-weight: 400;
  color: rgba(255, 255, 255, 1);
}
.tab_item h4 {
  text-align: center;

  font-size: 14px;
  font-family: Microsoft YaHei;
  font-weight: 400;
  color: rgba(255, 255, 255, 1);
}
</style>