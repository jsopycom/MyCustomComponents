/*
 * @Author: jsopy
 * @Date: 2024-06-19 06:35:11
 * @LastEditTime: 2024-06-19 06:35:16
 * @FilePath: /my-vue-app/src/components/chooseProcessBar/index.ts
 * @Description:
 *
 */
import { App } from "vue";

import chooseProcessBar from "./src/index.vue";

// 让这个组件可以通过use形式使用

export default {
  install(app: App) {
    app.component("chooseProcessBar", chooseProcessBar);
  },
};
