<template>
  <div class="homepage">
    <headbar></headbar>
    <keep-alive>
      <router-view v-if="$route.meta.keepAlive"></router-view>
    </keep-alive>
    <router-view v-if="!$route.meta.keepAlive"></router-view>
    <bottombar></bottombar>
  </div>
</template>
<script>
import headbar from "../../components/home/headbar";
import bottombar from "../../components/home/bottombar";
export default {
  components: {
    headbar,
    bottombar
  }
};
</script>
<style scoped>
.homepage {
  width: 100%;
}
</style>