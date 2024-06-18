<!--
 * @Author: jsopy
 * @Date: 2024-06-18 21:25:06
 * @LastEditTime: 2024-06-18 22:14:53
 * @FilePath: /my-vue-app/src/components/choosebadgeadvance/src/index.vue
 * @Description: 
 * 
-->

<template>
  <div>
    <el-popover placement="bottom" :width="310" trigger="click">
      <template #reference>
        <chooseBadge
          :max="badagedata.max"
          :value="badagedata.value"
          :icon="badagedata.icon"
          :isdot="badagedata.isdot"
        ></chooseBadge>
      </template>
      <template #default>
        <chooseTab :list="tablistcontent"></chooseTab>
      </template>
    </el-popover>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
interface BadgeItem {
  max: number | string;
  value: number;
  icon: string;
  isdot: boolean;
}

interface TabItem {
  avater?: string;
  tagtype?: string;
  tagtitle?: string;
  time?: string;
}

interface TabContent {
  title: string;
  titleicon: string;
  content: TabItem[];
}

const badagedata = ref({
  max: 200,
  value: 100,
  icon: "el-icon-bell",
  isdot: false,
});

const tablistcontent = ref<TabContent[]>([
  {
    title: "新闻",
    titleicon: "el-icon-bell",
    content: [
      {
        avater: "https://file.jsopy.com/DemoAll/Vue3Cms/superadmin.jpg",
        tagtype: "warning",
        tagtitle: "警告",
        time: "2024-6-18",
      },
      {
        avater: "https://file.jsopy.com/DemoAll/Vue3Cms/superadmin.jpg",
        tagtype: "danger",
        tagtitle: "危险",
        time: "2024-6-18",
      },
      {
        avater: "https://file.jsopy.com/DemoAll/Vue3Cms/superadmin.jpg",
        tagtype: "primary",
        tagtitle: "安全",
        time: "2024-6-18",
      },
    ],
  },
  {
    title: "通知",
    titleicon: "el-icon-menu",
    content: [
      {
        avater: "https://file.jsopy.com/DemoAll/Vue3Cms/superadmin.jpg",
        tagtype: "danger",
        tagtitle: "危险",
        time: "2024-6-21",
      },
      {
        avater: "https://file.jsopy.com/DemoAll/Vue3Cms/superadmin.jpg",
        tagtype: "warning",
        tagtitle: "警告",
        time: "2024-6-21",
      },
      {
        avater: "https://file.jsopy.com/DemoAll/Vue3Cms/superadmin.jpg",
        tagtype: "primary",
        tagtitle: "安全",
        time: "2024-6-21",
      },
    ],
  },
  {
    title: "资讯",
    titleicon: "el-icon-tools",
    content: [
      {
        avater: "https://file.jsopy.com/DemoAll/Vue3Cms/superadmin.jpg",
        tagtype: "primary",
        tagtitle: "安全",
        time: "2024-6-25",
      },
      {
        avater: "https://file.jsopy.com/DemoAll/Vue3Cms/superadmin.jpg",
        tagtype: "danger",
        tagtitle: "危险",
        time: "2024-6-25",
      },
      {
        avater: "https://file.jsopy.com/DemoAll/Vue3Cms/superadmin.jpg",
        tagtype: "warning",
        tagtitle: "警告",
        time: "2024-6-25",
      },
    ],
  },
]);
</script>

<style scoped lang="scss"></style>
