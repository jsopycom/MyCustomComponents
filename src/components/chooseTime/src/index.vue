<!--
 * @Author: jsopy
 * @Date: 2024-06-21 19:35:16
 * @LastEditTime: 2024-06-21 21:46:20
 * @FilePath: /my-vue-app/src/components/chooseTime/src/index.vue
 * @Description: 
 * 
-->
<template>
  <div class="demo-time-range">
    <el-time-select
      v-model="startTime"
      style="width: 240px"
      :max-time="endTime"
      class="mr-4"
      placeholder="Start time"
      :start="startDefaultTime"
      :step="startStep"
      :end="startDefaultEndTime"
    />
    -
    <el-time-select
      v-model="endTime"
      style="width: 240px"
      :min-time="startTime"
      placeholder="End time"
      :start="offsetEndStartTime"
      :step="endStep"
      :end="endDefaultEndTime"
    />
    <el-button style="margin-left: 20px" type="primary" @click="handleClick"
      >输出</el-button
    >
  </div>
</template>

<script setup lang="ts">
import { ref, computed, watch } from "vue";

const startTime = ref("");

const endTime = ref("");

const emits = defineEmits(["changetimeresult"]);

const props = defineProps({
  startDefaultTime: {
    type: String,
    default: "00:00",
  },
  startStep: {
    type: String,
    default: "00:15",
  },
  startDefaultEndTime: {
    type: String,
    default: "24:00",
  },
  endDefaultTime: {
    type: String,
    default: "00:00",
  },
  endStep: {
    type: String,
    default: "00:15",
  },
  endDefaultEndTime: {
    type: String,
    default: "24:00",
  },
  offsetHourTime: {
    type: Number,
    default: 10,
  },
  offsetMiaoTime: {
    type: Number,
    default: 10,
  },
});

const offsetEndStartTime = ref(props.endDefaultTime);

watch(
  () => {
    return startTime.value;
  },
  (newval, oldval) => {
    if (newval !== "" && newval) {
      let resultTime = newval.split(":");
      let hour = parseInt(resultTime[0]);
      let minute = parseInt(resultTime[1]);

      let HourTime = props.offsetHourTime + hour;
      let HourTimeResult = "";
      if (HourTime < 10) {
        HourTimeResult = "0" + HourTime;
      }
      if (HourTime > 22) {
        HourTimeResult = "22";
      }
      HourTimeResult = String(HourTime);
      let MiaoTime = props.offsetMiaoTime + minute;
      let MiaoResult = "";
      if (MiaoTime < 10) {
        MiaoResult = "0" + HourTime;
      }
      if (MiaoTime > 40) {
        MiaoResult = "40";
      }
      MiaoResult = String(MiaoTime);

      offsetEndStartTime.value = `${HourTimeResult}:${MiaoResult}`;
    } else {
      endTime.value = "";
      offsetEndStartTime.value = props.endDefaultTime;
    }
  }
);

const handleClick = () => {
  emits("changetimeresult", {
    startTime: startTime.value,
    endTime: endTime.value,
  });
};
</script>

<style scoped></style>
