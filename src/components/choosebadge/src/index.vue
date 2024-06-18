<!--
 * @Author: jsopy
 * @Date: 2024-06-18 20:58:37
 * @LastEditTime: 2024-06-18 21:09:03
 * @FilePath: /my-vue-app/src/components/choosebadge/src/index.vue
 * @Description: 
 * 
-->
<template>
  <el-badge :value="value" :max="max" :is-dot="isdot" class="item">
    <component :is="icon"></component>
  </el-badge>
</template>

<script setup lang="ts">
const Props = defineProps({
  icon: {
    type: String,
    required: true,
  },
  value: {
    type: Number || String,
    required: true,
  },
  max: {
    type: Number,
    required: true,
  },
  isdot: {
    type: Boolean,
    required: true,
  },
});
</script>

<style scoped lang="scss">
svg {
  width: 1.5em;
  height: 1.5em;
}
</style>
