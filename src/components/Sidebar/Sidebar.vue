<script setup lang="ts">
import SidebarCardVue from "./SidebarCard.vue";
import { ref } from "vue";
const items = ref([
  {
    id: "CreatePlan",
    title: "บันทึกแผนการอบรม",
    path: "/CreatePlan",
    description: "กรอกข้อมูลแผนการอบรมให้ครบทุกช่อง",
  },
  {
    id: "PlanLists",
    title: "รายการอบรม",
    path: "/PlanLists",
    description: "แสดงรายการอบรมทั้งหมด",
  },
  {
    id: "UserLists",
    title: "ผู้ใช้งาน",
    path: "/UserLists",
    description: "แสดงรายชื่อผู้ใช้งานทั้งหมด",
  },
  {
    id: "BinLists",
    title: "ถังขยะ",
    path: "/BinLists",
    description: "รายการที่ถูกลบก่อนนำออกจากระบบ",
  },
]);
</script>
<template>
  <div class="logo">
    <img src="ICTlogo.jpg" alt="ICTlogo" style="width: 500px; height: 600px" />
  </div>
  <div class="sidebar">
    <ul>
      <li v-for="item in items" :key="item.id">
        <router-link :to="item.path">
          <component :is="SidebarCardVue" :title="item.title" />
        </router-link>
      </li>
    </ul>
  </div>
  <div class="logout"><a href="">logout</a></div>
</template>
<style scoped></style>
