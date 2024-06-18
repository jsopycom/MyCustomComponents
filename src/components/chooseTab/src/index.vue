<!--
 * @Author: jsopy
 * @Date: 2024-06-18 21:47:32
 * @LastEditTime: 2024-06-18 22:19:47
 * @FilePath: /my-vue-app/src/components/chooseTab/src/index.vue
 * @Description: 
 * 
-->

<template>
  <el-tabs type="border-card" class="demo-tabs">
    <el-tab-pane v-for="(content, index) in list" :key="index">
      <template #label>
        <span class="custom-tabs-label">
          <component :is="content.titleicon"></component>
          <span>{{ content.title }}</span>
        </span>
      </template>
      <div class="content">
        <div
          v-for="(value, index2) in content.content"
          :key="index2"
          class="item_tab"
        >
          <img :src="value.avater" class="avater" />
          <span class="title">{{ value.time }}</span>
          <el-tag :type="value.tagtype">{{ value.tagtitle }}</el-tag>
        </div>
      </div>
    </el-tab-pane>
  </el-tabs>
</template>

<script setup lang="ts">
import { PropType } from "vue";
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
const props = defineProps({
  list: {
    type: Array as PropType<TabContent[]>,
    required: true,
  },
});
</script>

<style scoped lang="scss">
.demo-tabs > .el-tabs__content {
  padding: 32px;
  color: #6b778c;
  font-size: 32px;
  font-weight: 600;
}
.demo-tabs .custom-tabs-label .el-icon {
  vertical-align: middle;
}
.demo-tabs .custom-tabs-label span {
  vertical-align: middle;
  margin-left: 4px;
}
svg {
  width: 1em;
  height: 1em;
  margin-right: 5px;
  vertical-align: middle;
}
.content {
  .item_tab {
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-around;
    align-items: center;
    margin-bottom: 20px;
    .avater {
      flex: 0 0 50px;
      height: 50px;
      border-radius: 50%;
    }
    .title {
      flex: 0 0 100px;
      height: 50px;
      line-height: 50px;
    }
  }
}
</style>
