<!--
 * @Author: jsopy
 * @Date: 2024-06-18 06:31:56
 * @LastEditTime: 2024-06-18 07:48:49
 * @FilePath: /my-vue-app/src/pages/QuShi/index.vue
 * @Description: 趋势标记
 * 
-->

<template>
  <div>
    <el-row style="margin-bottom: 20px">
      <ChooseQuShi :content="content1"></ChooseQuShi>

      <ChooseQuShi :content="content2"></ChooseQuShi>
    </el-row>
    <el-row style="margin-bottom: 20px">
      <ChooseQuShi :content="content3"></ChooseQuShi>

      <ChooseQuShi :content="content4"></ChooseQuShi>
    </el-row>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";

interface item {
  title: string;
  coloricon: string;
  icon: string;
  colortext: string;
}

const content1 = ref<item>({
  title: "涨幅20%",
  coloricon: "#C80000",
  icon: "el-icon-arrow-up-bold",
  colortext: "#C80000",
});

const content2 = ref<item>({
  title: "跌幅30%",
  coloricon: "#85C06F",
  icon: "el-icon-arrow-down-bold",
  colortext: "#85C06F",
});

const content4 = ref<item>({
  title: "涨幅60%",
  coloricon: "#C80000",
  icon: "el-icon-arrow-up-bold",
  colortext: "#C80000",
});

const content3 = ref<item>({
  title: "跌幅10%",
  coloricon: "#85C06F",
  icon: "el-icon-arrow-down-bold",
  colortext: "#85C06F",
});
</script>

<style scoped lang="scss"></style>
