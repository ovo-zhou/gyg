<template>
  <div class="homepage">
    <headbar></headbar>
    <news></news>
    <funbar></funbar>
    <bottombar></bottombar>
  </div>
</template>
<script>
import headbar from "./headbar";
import bottombar from "./bottombar";
import news from './news'
import funbar from './functionbar'
export default {
  components: {
    headbar,
    news,
    funbar,
    bottombar
  }
};
</script>
<style scoped>
.homepage {
  width: 100%;
}
</style>