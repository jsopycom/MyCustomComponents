/*
 * @Author: jsopy
 * @Date: 2024-06-17 21:49:49
 * @LastEditTime: 2024-06-17 21:51:24
 * @FilePath: /my-vue-app/src/components/chooseIcon/index.ts
 * @Description: 
 * 
 */
import { App } from "vue";

import chooseIcon from "./src/index.vue";

// 让这个组件可以通过use形式使用

export default {
  install(app: App) {
    app.component("ChooseIcon", chooseIcon);
  },
};