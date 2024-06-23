<template>
  <div>
    <span>请选择开始时间</span>
    <el-date-picker
      clearable
      v-model="startTime"
      type="date"
      value-format="YYYY-MM-DD"
      placeholder="请选择检查日期"
      style="width: 180px"
    >
    </el-date-picker>
    <span>请选择间隔时间</span>
    <el-input-number v-model="offsetTime" :step="1" />
    <chooseDate
      :startTime="startTime"
      :offsettime="offsetTime"
      @changeresultdata="changeresult"
    ></chooseDate>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { ElMessage } from "element-plus";
const startTime = ref("");
const offsetTime = ref("");
const changeresult = (content: any) => {
  ElMessage.success(JSON.stringify(content));
};
</script>

<style scoped></style>
