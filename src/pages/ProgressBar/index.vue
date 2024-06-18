<!--
 * @Author: jsopy
 * @Date: 2024-06-19 06:33:52
 * @LastEditTime: 2024-06-19 07:09:49
 * @FilePath: /my-vue-app/src/pages/ProgressBar/index.vue
 * @Description: 
 * 
-->

<template>
  <div>
    <chooseProcessBar
      :type="data1.type"
      :color="data1.color"
      :percentage="data1.percentage"
      :strokewidth="data1.strokewidth"
      :isAnimation="data1.isAnimation"
      :time="data1.time"
    ></chooseProcessBar>
    <div style="width: 100%; height: 30px"></div>
    <chooseProcessBar
      :type="data2.type"
      :color="data2.color"
      :percentage="data2.percentage"
      :strokewidth="data2.strokewidth"
      :isAnimation="data2.isAnimation"
      :time="data2.time"
    ></chooseProcessBar>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
const data1 = ref({
  type: "line",
  color: "red",
  percentage: 80,
  strokewidth: 15,
  isAnimation: true,
  time: 3000,
});
const data2 = ref({
  type: "circle",
  color: "blue",
  percentage: 60,
  strokewidth: 15,
  isAnimation: true,
  time: 3000,
});
</script>

<style scoped></style>
