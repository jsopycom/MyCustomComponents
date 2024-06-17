<!--
 * @Author: jsopy
 * @Date: 2024-06-18 06:31:56
 * @LastEditTime: 2024-06-18 07:03:54
 * @FilePath: /my-vue-app/src/pages/QuShi/index.vue
 * @Description: 趋势标记
 * 
-->

<template>
  <div>
    <div class="itembottom">
      <ChooseQuShi :listdata="listdata"></ChooseQuShi>
    </div>
    <div class="itembottom">
      <ChooseQuShi :listdata="listdata2"></ChooseQuShi>
    </div>
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

const updata = ref<item>({
  title: "涨幅20%",
  coloricon: "#C80000",
  icon: "el-icon-arrow-up-bold",
  colortext: "#C80000",
});

const downdata = ref<item>({
  title: "跌幅30%",
  coloricon: "#85C06F",
  icon: "el-icon-arrow-down-bold",
  colortext: "#85C06F",
});

const listdata = [updata.value, downdata.value];

const updata2 = ref<item>({
  title: "涨幅60%",
  coloricon: "#C80000",
  icon: "el-icon-arrow-up-bold",
  colortext: "#C80000",
});

const downdata2 = ref<item>({
  title: "跌幅10%",
  coloricon: "#85C06F",
  icon: "el-icon-arrow-down-bold",
  colortext: "#85C06F",
});

const listdata2 = [downdata2.value, updata2.value];
</script>

<style scoped lang="scss">
.itembottom {
  margin-bottom: 20px;
}
</style>
