<template>
  <div class="wrapper">
    <v-head></v-head>
    <v-sidebar></v-sidebar>
    <div class="content-box" :class="{'content-collapse':collapse}">
      <div class="content">
        <keep-alive>
          <router-view v-if="$route.meta.keepAlive"></router-view>
        </keep-alive>
        <router-view v-if="!$route.meta.keepAlive"></router-view>
      </div>
    </div>
  </div>
</template>

<script>
import bus from "../../components/admin/bus";
import vHead from "../../components/admin/Header";
import vSidebar from "../../components/admin/Sidebar";

export default {
  data() {
    return {
      collapse: false
    };
  },
  computed: {},
  methods: {},
  components: {
    vHead,
    vSidebar
  },
  created() {
    bus.$on("collapse", msg => {
      this.collapse = msg;
    });
  }
};
</script>
<style scoped>
* {
  margin: 0;
  padding: 0;
}
.wrapper {
  width: 100%;
  height: 100%;
  overflow: hidden;
}
.content-box {
  position: absolute;
  left: 250px;
  right: 0;
  top: 70px;
  bottom: 0;
  padding-bottom: 30px;
  -webkit-transition: left 0.3s ease-in-out;
  transition: left 0.3s ease-in-out;
  background: #f0f0f0;
}
.content {
  width: auto;
  height: 100%;
  padding: 10px;
  overflow-y: scroll;
  box-sizing: border-box;
}
.content-collapse {
  left: 65px;
}
</style>
