<!--
 * @Author: jsopy
 * @Date: 2024-06-21 19:56:20
 * @LastEditTime: 2024-06-23 21:25:19
 * @FilePath: /my-vue-app/src/components/chooseDate/src/index.vue
 * @Description: 
 * 
-->

<template>
  <el-date-picker
    clearable
    v-model="resultDate"
    type="date"
    value-format="YYYY-MM-DD"
    placeholder="请选择检查日期"
    :disabled-date="disabledDateFun"
    style="width: 180px; margin-left: 20px"
  >
  </el-date-picker>

  <el-button @click="submitData" type="primary">提交</el-button>
</template>

<script setup lang="ts">
import { ref } from "vue";
const props = defineProps({
  offsettime: {
    type: Number,
    default: 3,
  },
  startTime: {
    type: String,
    default: "2024-06-04",
  },
});
const emits = defineEmits(["changeresultdata"]);
const resultDate = ref("");
const disabledDateFun = (time: Date) => {
  // 判断是否是今天之后的日期
  if (props.startTime) {
    const result = new Date(props.startTime);
    return (
      time.getTime() >
        result.getTime() + props.offsettime * 24 * 60 * 60 * 1000 ||
      time.getTime() < result.getTime()
    );
  }
};
const submitData = () => {
  emits("changeresultdata", resultDate.value);
};
</script>

<style scoped></style>
