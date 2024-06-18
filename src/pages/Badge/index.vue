<!--
 * @Author: jsopy
 * @Date: 2024-06-18 20:56:24
 * @LastEditTime: 2024-06-18 21:34:01
 * @FilePath: /my-vue-app/src/pages/Badge/index.vue
 * @Description: 
 * 
-->
<template>
  <div class="item" v-for="(content, index) in list" :key="index">
    <chooseBadge
      :max="content.max"
      :value="content.value"
      :icon="content.icon"
      :isdot="content.isdot"
    ></chooseBadge>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
interface BadgeItem {
  max: number | string;
  value: number;
  icon: string;
  isdot: boolean;
}

const list = ref<BadgeItem[]>([
  {
    max: 200,
    value: 100,
    icon: "el-icon-bell",
    isdot: false,
  },
  {
    max: 200,
    value: 100,
    icon: "el-icon-menu",
    isdot: true,
  },
]);
</script>

<style scoped lang="scss">
.item {
  float: left;
  margin-right: 20px;
  margin-bottom: 20px;
}
</style>
