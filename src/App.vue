<template>
  <div id="app">
   <keep-alive>
      <router-view v-if="$route.meta.keepAlive"></router-view>
    </keep-alive>
    <router-view v-if="!$route.meta.keepAlive"></router-view>
  </div>
</template>

<script>
export default {
  
}
</script>

<style>
*{
    margin: 0px;
    padding: 0px;
}
#app{
  width: 100%;
}
</style>
