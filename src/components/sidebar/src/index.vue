<template>
  <el-menu
    default-active="2"
    class="el-menu-vertical-demo"
    :collapse="collapse"
    style="height: 100%"
  >
    <el-menu-item index="1">
      <el-icon-menu />
      <template #title>图标</template>
    </el-menu-item>
    <el-menu-item index="2">
      <el-icon-menu />
      <template #title>趋势图标</template>
    </el-menu-item>
  </el-menu>
</template>

<script setup lang="ts">
const Props = defineProps<{
  collapse: boolean;
}>();
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
