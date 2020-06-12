<template>
  <div class="sidebar">
    <el-menu
      class="sidebar-el-menu"
      :default-active="onRoutes"
      :collapse="collapse"
      background-color="#20222A"
      text-color="rgba(255,255,255,.7)"
      active-text-color="#fff"
      unique-opened
    >
      <el-submenu index="1">
        <template slot="title">
          <i class="el-icon-office-building"></i>
          <span>公司简介</span>
        </template>
        <el-menu-item-group>
          <el-menu-item index="1-1">公司简介</el-menu-item>
          <el-menu-item index="1-2">发展历程</el-menu-item>
          <el-menu-item index="1-3">业务架构</el-menu-item>
          <el-menu-item index="1-4">企业文化</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
      <el-submenu index="2">
        <template slot="title">
          <i class="el-icon-s-claim"></i>
          <span>行业动态</span>
        </template>
        <el-menu-item-group>
          <el-menu-item index="2-1">动态发布</el-menu-item>
          <el-menu-item index="2-2">动态管理</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
      <el-menu-item index="3">
        <i class="el-icon-phone"></i>
        <span slot="title">联系我们</span>
      </el-menu-item>
      <el-menu-item index="4">
        <i class="el-icon-s-comment"></i>
        <span slot="title">网站留言</span>
      </el-menu-item>
    </el-menu>
  </div>
</template>
<script>
import bus from "../common/bus";
export default {
  data() {
    return {
      collapse: false
    };
  },
  methods: {},
  computed: {},
  created() {
    bus.$on("collapse", msg => {
      this.collapse = msg;
    });
  }
};
</script>

<style scoped>
.sidebar {
  display: block;
  position: absolute;
  left: 0;
  top: 70px;
  bottom: 0;
  overflow-y: scroll;
}
.sidebar::-webkit-scrollbar {
  width: 0;
}
.sidebar-el-menu:not(.el-menu--collapse) {
  width: 250px;
}
.sidebar > ul {
  height: 100%;
}
</style>
