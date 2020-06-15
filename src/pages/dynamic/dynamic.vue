<template>
  <div class="dynamic">
    <img src="../../assets/dynamic.png" alt />
    <div class="d-contain">
        <newitem></newitem>
        <newitem></newitem>
    </div>
  </div>
</template>

<script>
import newitem from './newitem'
export default {
  components:{
    newitem
  }
};
</script>

<style scoped>
.dynamic {
  width: 100%;
  /* background: yellowgreen; */
}
.dynamic img {
  width: 100%;
}
.d-contain {
  width: 1080px;
  height: 600px;
  /* background: violet; */
  margin: 0px auto;
}
</style>