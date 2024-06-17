<!--
 * @Author: jsopy
 * @Date: 2024-06-16 20:28:48
 * @LastEditTime: 2024-06-16 21:04:28
 * @FilePath: /my-vue-app/src/components/navheader/src/index.vue
 * @Description: 
 * 
-->
<template>
  <div class="header">
    <div class="collapsebutton" @click="changecollapse">
      <el-icon-expand v-if="collapse"></el-icon-expand>
      <el-icon-fold v-if="!collapse"></el-icon-fold>
    </div>
  </div>
</template>

<script setup lang="ts">
const Props = defineProps<{
  collapse: boolean;
}>();

const emits = defineEmits<{
  (e: "update:collapse", value: boolean): void;
}>();
const changecollapse = () => {
  emits("update:collapse", !Props.collapse);
};
</script>

<style scoped lang="scss">
svg {
  width: 1.5em;
  height: 1.5em;
}
.header {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  height: 100%;
  padding: 0 0px;
  .collapsebutton {
    cursor: pointer;
  }
}
</style>
