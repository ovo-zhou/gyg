<template>
  <div class="wrapper">
    <v-head></v-head>
    <v-sidebar></v-sidebar>
    <div class="content-box" :class="{'content-collapse':collapse}">
      <div class="content">
        <transition name="move" mode="out-in">
          <keep-alive :include="tagsList">
            <router-view></router-view>
          </keep-alive>
        </transition>
      </div>
    </div>
  </div>
</template>

<script>
import vHead from "./Header.vue";
import vSidebar from  './Sidebar'
export default {
  data() {
    return {
      
  }},
  computed: {
  
  },
  methods: {
   
  },
  components: {
 vHead,
 vSidebar
  },
  created() {
   
  }
};
</script>
