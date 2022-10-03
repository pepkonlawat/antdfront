<script setup lang="ts">
import Sidebar from "./components/Sidebar/Sidebar.vue";
import PageHeaderVue from "./components/PageHeader.vue";
</script>
<template>
  <a-layout>
    <a-layout-sider><component :is="Sidebar" /></a-layout-sider>
    <a-layout>
      <a-layout-header><component :is="PageHeaderVue" /></a-layout-header>
      <a-layout-content><router-view /></a-layout-content>
      <a-layout-footer>Footer</a-layout-footer>
    </a-layout>
  </a-layout>
</template>

<style scoped>
.ant-layout-header {
  height: auto;
  background: rgb(250, 247, 242);
}
.ant-layout-sider {
  background: rgb(238, 238, 238);
}
</style>
