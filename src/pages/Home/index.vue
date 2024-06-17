<!--
 * @Author: jsopy
 * @Date: 2024-06-16 20:37:19
 * @LastEditTime: 2024-06-17 21:52:47
 * @FilePath: /my-vue-app/src/pages/Home/index.vue
 * @Description: 
 * 
-->
<template>
  <div>
    <ChooseIcon :title="message" v-model:visibale="visibale" type="success">
      <div class="chooseiconcomponent">
        <el-icon-search></el-icon-search>
        <div class="text">选择图标</div>
      </div>
    </ChooseIcon>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";

const message = ref("选择图标(点击复制)");
const visibale = ref(false);
</script>

<style scoped lang="scss">
.chooseiconcomponent {
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  justify-self: center;
  svg {
    margin-right: 5px;
    margin-top: 3px;
    color: white;
  }
  .text {
    font-size: 14px;
    font-weight: 600;
    color: white;
  }
}
</style>
