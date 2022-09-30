<script>
import { defineComponent } from "vue";
import { BookFilled } from "@ant-design/icons-vue";
export default defineComponent({
  components: {
    BookFilled,
  },
});
</script>

<script setup lang="ts"></script>

<template>
  <div class="sidebar-card display-flex">
    <span class="container"
      ><BookFilled :style="{ fontSize: '25px', color: '#ffff' }"
    /></span>
    <label for="CreatePlan">sssssssssss</label>
  </div>
</template>
<style scoped>
.container {
  position: absolute;
  width: 53px;
  height: 54px;
  background: #4fd1c5;
  /* shaddow */
  box-shadow: 0px 4px 6px -1px rgba(0, 0, 0, 0.12),
    0px 2px 4px -1px rgba(0, 0, 0, 0.07);
  border-radius: 10px;

  justify-content: center;
  align-items: center;
  margin: 10px;
}
.sidebar-card {
  display: flex;
  align-items: center;
}
</style>
