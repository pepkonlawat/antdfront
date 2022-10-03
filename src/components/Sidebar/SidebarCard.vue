<script setup lang="ts">
import { defineComponent, defineProps } from "vue";
// import { BookFilled } from "@ant-design/icons-vue";

const props = defineProps({
  title: String,
  path: String,
});
</script>

<template>
  <a>{{ props.title }}</a>
</template>
<style scoped>
.container {
  display: flex;
  width: 53px;
  height: 54px;
  background: #4fd1c5;
  /* shaddow */
  box-shadow: 0px 4px 6px -1px rgba(0, 0, 0, 0.12),
    0px 2px 4px -1px rgba(0, 0, 0, 0.07);
  border-radius: 10px;
  margin-left: 40px;
  justify-content: center;
  align-items: center;
  margin: 10px;
}
.sidebar-card {
  display: flex;
  align-items: center;
}

.sidebar-card:hover {
  width: 300px;
  height: 80px;
  background: #ffffff;
  box-shadow: 0px 3.5px 5.5px rgba(0, 0, 0, 0.02);
  border-radius: 20px;
}
label {
  display: inline-block;
  font-size: 14px;
  font-weight: SemiBold;
}
</style>
