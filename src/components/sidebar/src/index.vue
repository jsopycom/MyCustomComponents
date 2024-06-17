<template>
  <el-menu
    :default-active="defaultactive"
    class="el-menu-vertical-demo"
    :collapse="collapse"
    style="height: 100%"
    router
  >
    <el-menu-item
      v-for="(content, index) in menulist"
      :key="index"
      :index="content.path"
    >
      <component :is="content.meta.icon"></component>
      <template #title>{{ content.meta.title }}</template>
    </el-menu-item>
  </el-menu>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { useGetRouters } from "@/hooks/sidebar/getRouters";

import { useRouter } from "vue-router";

const Props = defineProps<{
  collapse: boolean;
}>();
// 获取路由
const { routesall, current } = useGetRouters();

const menulist = ref(routesall.children);

const defaultactive = ref(current);
</script>

<style scoped lang="scss">
svg {
  width: 1em;
  height: 1em;
  margin-right: 10px;
}
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
}
</style>
