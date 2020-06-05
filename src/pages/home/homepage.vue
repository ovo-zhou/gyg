<template>
  <div class="homepage">
    <headbar></headbar>
    <notice></notice>
    <eCommerce></eCommerce>
    <split></split>
    <vehicle></vehicle>
    <split></split>
    <query></query>
    <bottombar></bottombar>
  </div>
</template>
<script>
import headbar from "./headbar";
import eCommerce from "./e-commerce";
import split from "./split";
import vehicle from "./vehicle";
import query from "./query";
import notice from "./notice";
import bottombar from "./bottombar";
export default {
  components: {
    headbar,
    eCommerce,
    split,
    vehicle,
    query,
    notice,
    bottombar
  }
};
</script>
<style scoped>
.homepage {
  width: 100%;
}
</style>