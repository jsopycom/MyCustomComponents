<!--
 * @Author: jsopy
 * @Date: 2024-06-17 06:16:54
 * @LastEditTime: 2024-06-17 07:23:16
 * @FilePath: /my-vue-app/src/components/chooseIcon/index.vue
 * @Description: 
 * 
-->
<template>
  <div class="chooseiconcomponent">
    <el-button @click="handleOpen" class="choosebutton">
      <slot></slot>
    </el-button>
    <el-dialog
      :title="title"
      v-model="visibaleflag"
      width="800"
      custom-class="customdialog"
      append-to-body
      center
      :before-close="handleClose"
    >
      <el-scrollbar height="400px">
        <div class="scrollcontent">
          <div
            v-for="(item, index) in icondata"
            :key="index"
            class="scrollbar-demo-item"
            @click="clipbox(item.icon)"
          >
            <component :is="item.icon"></component>
            <div class="textname">el-icon{{ item.iconname }}</div>
          </div>
        </div>
      </el-scrollbar>
    </el-dialog>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";

import { ElMessage } from "element-plus";

import { useChooseIconData } from "@/hooks/chooseIcon/usechooseicondata";

import { usechooseclip2broad } from "@/hooks/chooseIcon/usechooseclip2broad";

const Props = defineProps<{
  title: string;
  visibale: boolean;
}>();

// 获取到图标的数据
const icondata = useChooseIconData();

// 点击事件

const clipbox = (content: string) => {
  const iconresult = `<${content}/>`;
  const result = usechooseclip2broad(iconresult);
  if (result) {
    ElMessage({
      message: "复制成功",
      type: "success",
    });
  }
};

const visibaleflag = ref(Props.visibale);

const emits = defineEmits<{
  (e: "update:visibale", value: boolean): void;
}>();

const handleClose = () => {
  emits("update:visibale", false);
  visibaleflag.value = false;
};

const handleOpen = () => {
  emits("update:visibale", true);
  visibaleflag.value = true;
};
</script>

<style scoped lang="scss">
.chooseiconcomponent {
  .choosebutton {
    padding: 10px 20px;
    background: #409eff;
  }
}

.scrollcontent {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  .scrollbar-demo-item {
    width: 150px;
    height: 150px;
    margin: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    &:hover {
      background: #409eff;
      color: #fff;
    }
    svg {
      width: 2em;
      height: 2em;
      margin-bottom: 10px;
    }
    .textname {
      font-size: 12px;
    }
  }
}
</style>
