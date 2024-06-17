<!--
 * @Author: jsopy
 * @Date: 2024-06-18 06:30:56
 * @LastEditTime: 2024-06-18 07:02:54
 * @FilePath: /my-vue-app/src/components/choosequshi/src/index.vue
 * @Description: 趋势标记
 * 
-->

<template>
  <div class="box">
    <el-row>
      <!--涨-->
      <div class="item" v-for="(content, index) in listdata" :key="index">
        <span :style="{ color: content.colortext }">{{ content.title }}</span>
        <component
          :is="content.icon"
          :style="{ color: content.coloricon }"
        ></component>
      </div>
      <!--涨-->
    </el-row>
  </div>
</template>

<script setup lang="ts">
interface item {
  title: string;
  coloricon: string;
  icon: string;
  colortext: string;
}
const Props = defineProps<{
  listdata: item[];
}>();
</script>

<style scoped lang="scss">
.box {
  .item {
    float: left;
    margin-right: 20px;
    span {
      margin-right: 15px;
    }
  }
}
svg {
  width: 1em;
  height: 1em;
}
</style>
