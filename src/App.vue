<template>
  <a-layout>
    <a-layout-sider>Sider</a-layout-sider>
    <a-layout>
      <a-layout-header><component :is="nav" /> </a-layout-header>
      <a-layout-content>Content</a-layout-content>
      <a-layout-footer>Footer</a-layout-footer>
    </a-layout>
  </a-layout>
</template>
<script setup lang="ts">
import nav from "./components/Navbar.vue";
</script>
<style>
.ant-layout-header {
  background-color: antiquewhite;
}
</style>
