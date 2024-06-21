<template>
  <div>
    <chooseTime
      @changetimeresult="changecontent"
      :startDefaultTime="data.startDefaultTime"
      :startStep="data.startStep"
      :startDefaultEndTime="data.startDefaultEndTime"
      :endDefaultTime="data.endDefaultTime"
      :endStep="data.endStep"
      :endDefaultEndTime="data.endDefaultEndTime"
      :offsetHourTime="data.offsetHourTime"
      :offsetMiaoTime="data.offsetMiaoTime"
    ></chooseTime>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { ElMessage } from "element-plus";
const data = ref({
  startDefaultTime: "00:00",
  startStep: "00:15",
  startDefaultEndTime: "23:45",
  endDefaultTime: "00:00",
  endStep: "00:15",
  endDefaultEndTime: "23:55",
  offsetHourTime: 1,
  offsetMiaoTime: 0,
});
const changecontent = (content: any) => {
  ElMessage.success(JSON.stringify(content));
};
</script>

<style scoped></style>
