<!--
 * @Author: jsopy
 * @Date: 2024-06-19 06:35:17
 * @LastEditTime: 2024-06-19 07:19:10
 * @FilePath: /my-vue-app/src/components/chooseProcessBar/src/index.vue
 * @Description: 
 * 
-->

<template>
  <div class="processitem">
    <el-progress
      :percentage="p"
      :color="color"
      :stroke-width="strokewidth"
      :type="type"
    />
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from "vue";
const props = defineProps({
  type: {
    type: String,
    required: true,
  },
  color: {
    type: String,
    required: true,
  },
  percentage: {
    type: Number,
    required: true,
  },
  strokewidth: {
    type: Number,
    required: true,
  },
  isAnimation: {
    type: Boolean,
    required: true,
    default: false,
  },
  time: {
    type: Number,
    required: true,
    default: 3000,
  },
});
let p = ref(0);
onMounted(() => {
  if (props.isAnimation) {
    // 规定时间内加载完成
    let t = Math.ceil(props.time / props.percentage);
    let timer = setInterval(() => {
      p.value += 1;
      if (p.value >= props.percentage) {
        p.value = props.percentage;
        clearInterval(timer);
        console.log(p.value);
      }
    }, t);
  }
});
</script>

<style scoped lang="scss">
.processitem {
  ::v-deep(svg) {
    width: 126px !important;
    height: 126px !important;
  }
}
</style>
