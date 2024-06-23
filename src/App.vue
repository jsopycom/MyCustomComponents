<template>
  <el-config-provider :locale="locale">
    <router-view />
  </el-config-provider>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { ElConfigProvider } from "element-plus";

import zhCn from "element-plus/es/locale/lang/zh-cn";

const locale = ref(zhCn);
</script>

<style lang="scss">
* {
  margin: 0px;
  padding: 0px;
}
html,
body,
#app,
.el-container {
  height: 100%;
}
svg {
  width: 1em;
  height: 1em;
}
</style>
