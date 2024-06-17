<!--
 * @Author: jsopy
 * @Date: 2024-06-15 21:44:34
 * @LastEditTime: 2024-06-16 20:46:53
 * @FilePath: /my-vue-app/src/pages/LayOut.vue
 * @Description: 
 * 
-->
<template>
  <el-container>
    <el-aside width="auto">
      <SideBar v-model:collapse="collapseflag"></SideBar>
    </el-aside>
    <el-container>
      <el-header>
        <NavHeader v-model:collapse="collapseflag"></NavHeader>
      </el-header>
      <el-main>
        <router-view></router-view>
      </el-main>
    </el-container>
  </el-container>
</template>

<script setup lang="ts">
import { ref } from "vue";
import SideBar from "@/components/sidebar/src/index.vue";
import NavHeader from "@/components/navheader/src/index.vue";

const collapseflag = ref(false);
</script>
<style scoped>
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
}
</style>
