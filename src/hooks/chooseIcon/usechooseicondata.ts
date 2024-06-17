/*
 * @Author: jsopy
 * @Date: 2024-06-17 06:55:32
 * @LastEditTime: 2024-06-17 07:09:45
 * @FilePath: /my-vue-app/src/hooks/chooseIcon/usechooseicondata.ts
 * @Description:
 *
 */

import * as Icons from "@element-plus/icons-vue";

// 驼峰命名

import { toLine } from "@/utils";

import { ref } from "vue";

export const useChooseIconData = () => {
  const icondata = ref<{ iconname: string; icon: string }[]>([]);
  for (let i in Icons) {
    // 注册全局组件
    // 组件名称为：el-icon-xxx
    icondata.value.push({
      iconname: `${toLine(i)}`,
      icon: `el-icon${toLine(i)}`,
    });
  }
  return icondata;
};
