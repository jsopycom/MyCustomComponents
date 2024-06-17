<!--
 * @Author: jsopy
 * @Date: 2024-06-17 20:45:19
 * @LastEditTime: 2024-06-17 21:47:02
 * @FilePath: /my-vue-app/src/components/choosearea/src/index.vue
 * @Description: 
 * 
-->

<template>
  <div>
    <!--省份-->
    <el-select
      v-model="province"
      clearable
      placeholder="请选择省/市"
      style="width: 240px; margin-right: 10px"
    >
      <el-option
        v-for="item in provinceList"
        :key="item.code"
        :label="item.name"
        :value="item.code"
      />
    </el-select>
    <!--省份-->
    <!--城市-->
    <el-select
      v-model="city"
      clearable
      :disabled="!province"
      placeholder="请选择城市"
      style="width: 240px; margin-right: 10px"
    >
      <el-option
        v-for="item in cityList"
        :key="item.code"
        :label="item.name"
        :value="item.code"
      />
    </el-select>
    <!--城市-->
    <!--区域开始-->
    <el-select
      v-model="area"
      clearable
      :disabled="!city"
      placeholder="请选择区域"
      style="width: 240px; margin-right: 10px"
    >
      <el-option
        v-for="item in areaList"
        :key="item.code"
        :label="item.name"
        :value="item.code"
      />
    </el-select>

    <!--区域结束-->
  </div>
</template>

<script setup lang="ts">
import Allarea from "../lib/pca-code.json";
import { ref, onMounted, watch } from "vue";
interface Item {
  name: string;
  code: string;
  children?: Item[];
}
// 省

const province = ref("");

const provinceList = ref<Item[]>([]);

// 城市

const city = ref("");

const cityList = ref<Item[]>([]);

// 区域

const area = ref("");

const areaList = ref<Item[]>([]);

onMounted(() => {
  let result: Item[] = [];
  Allarea.forEach((item: Item) => {
    result.push({
      name: item.name,
      code: item.code,
    });
  });
  provinceList.value = result;
});

// 定义事件

const emit = defineEmits(["changearea"]);

// 关注省市变化
watch(
  () => province.value,
  (newval, oldval) => {
    if (newval) {
      let result: Item[] | undefined = [];
      Allarea.forEach((item: Item) => {
        if (item.code == newval) {
          result = item.children;
        }
      });
      cityList.value = result;
      city.value = "";
      area.value = "";
    } else {
      cityList.value = [];
      areaList.value = [];
      city.value = "";
      area.value = "";
    }
  }
);
// 关注城市变化
watch(
  () => city.value,
  (newval, oldval) => {
    if (newval) {
      let result: Item[] | undefined = [];
      if (cityList.value) {
        cityList.value.forEach((item: Item) => {
          if (item.code == newval) {
            result = item.children;
          }
        });
      }
      areaList.value = result;
      area.value = "";
    } else {
      areaList.value = [];
      city.value = "";
      area.value = "";
    }
  }
);
// 关注区域变化
watch(
  () => area.value,
  (newval, oldval) => {
    if (newval) {
      console.log(province.value);
      console.log(city.value);
      console.log(newval);
      emit("changearea", {
        province: {
          code: province.value,
          name: provinceList.value.find((item) => item.code == province.value)
            ?.name,
        },
        city: {
          code: city.value,
          name: cityList.value?.find((item) => item.code == city.value)?.name,
        },
        area: {
          code: newval,
          name: areaList.value?.find((item) => item.code == newval)?.name,
        },
      });
    }
  }
);
</script>

<style scoped></style>
