<!--
 * @Author: jsopy
 * @Date: 2024-06-17 20:45:55
 * @LastEditTime: 2024-06-17 21:52:57
 * @FilePath: /my-vue-app/src/pages/Area/index.vue
 * @Description: 
 * 
-->

<template>
  <div>
    <chooseArea @changearea="changearearesult"></chooseArea>
  </div>
</template>

<script setup lang="ts">
import { ElMessage } from "element-plus";
const changearearesult = (content: any) => {
  ElMessage.success(JSON.stringify(content));
};
</script>

<style scoped></style>
