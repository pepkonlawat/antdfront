<template>
  <a-layout>
    <a-layout-sider><component :is="SidebarCardVue" /></a-layout-sider>
    <a-layout>
      <a-layout-header><component :is="nav" /> </a-layout-header>
      <a-layout-content>Content</a-layout-content>
      <a-layout-footer>Footer</a-layout-footer>
    </a-layout>
  </a-layout>
</template>
<script setup lang="ts">
import nav from "./components/Sidebar/Siderbar.vue";
import SidebarCardVue from "./components/Sidebar/SidebarCard.vue";
</script>
<style scoped>
.ant-layout-header {
  background: rgb(204, 136, 46);
}
.ant-layout-sider {
  background: rgb(238, 238, 238);
}
</style>
