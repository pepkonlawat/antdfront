<script setup lang="ts">
import SidebarCardVue from "./SidebarCard.vue";
import { ref } from "vue";
const items = ref([
  { id: "CreatePlan", title: "บันทึกแผนการอบรม" },
  { id: "PlanLists", title: "รายการอบรม" },
  { id: "UserLists", title: "ผู้ใช้งาน" },
  { id: "BinLists", title: "ถังขยะ" },
]);
</script>
<template>
  <div class="logo">
    <img src="ICTlogo.jpg" alt="ICTlogo" style="width: 500px; height: 600px" />
  </div>
  <div class="sidebar">
    <ul>
      <li v-for="item in items" :key="item.id">
        <component :is="SidebarCardVue" title="item.title" />
      </li>
    </ul>

    <component :is="SidebarCardVue" />
  </div>
  <div class="logout"><a href="">logout</a></div>
</template>
<style scoped></style>
