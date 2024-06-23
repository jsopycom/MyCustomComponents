<template>
  <div>
    <div style="float: left; margin-right: 10px">
      小时间隔时间
      <el-input-number
        v-model="numhour"
        :min="0"
        :max="10"
        @change="handleChangehour"
      />
    </div>
    <div style="float: left; margin-right: 10px">
      分钟间隔时间
      <el-input-number
        v-model="numminute"
        :min="0"
        :max="59"
        @change="handleChangeMin"
      />
    </div>
    <div></div>
    <chooseTime
      @changeflagtimeall="changeflagtimeall"
      @changetimeresult="changecontent"
      :startDefaultTime="data.startDefaultTime"
      :startStep="data.startStep"
      :startDefaultEndTime="data.startDefaultEndTime"
      :endDefaultTime="data.endDefaultTime"
      :endStep="data.endStep"
      :endDefaultEndTime="data.endDefaultEndTime"
      :offsetHourTime="data.offsetHourTime"
      :offsetMiaoTime="data.offsetMiaoTime"
      :changetimeflag="changetimeflag"
    ></chooseTime>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { ElMessage } from "element-plus";

const changecontent = (content: any) => {
  ElMessage.success(JSON.stringify(content));
};

// 只要改变小时和分钟就都清空

const changetimeflag = ref(false);

// 小时
const numhour = ref(0);
const resulthour = ref("0");
const handleChangehour = (value: number) => {
  if (value < 10) {
    resulthour.value = "0" + value.toString();
  } else {
    resulthour.value = value.toString();
  }
  // 清空
  changetimeflag.value = true;
};
// 分钟
const numminute = ref(0);
const resultminute = ref("0");
const handleChangeMin = (value: number) => {
  if (value < 10) {
    resultminute.value = "0" + value.toString();
  } else {
    resultminute.value = value.toString();
  }
  // 清空
  changetimeflag.value = true;
};

const changeflagtimeall = (content: boolean) => {
  changetimeflag.value = content;
};

const data = ref({
  startDefaultTime: "00:00",
  startStep: `00:15`,
  startDefaultEndTime: "23:45",
  endDefaultTime: `00:00`,
  endStep: `00:01`,
  endDefaultEndTime: "23:55",
  offsetHourTime: numhour,
  offsetMiaoTime: numminute,
  changetimeflag: changetimeflag,
});
</script>

<style scoped></style>
