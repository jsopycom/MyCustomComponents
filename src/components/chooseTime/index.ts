/*
 * @Author: jsopy
 * @Date: 2024-06-21 19:35:10
 * @LastEditTime: 2024-06-21 19:35:16
 * @FilePath: /my-vue-app/src/components/chooseTime/index.ts
 * @Description:
 *
 */
import { App } from "vue";

import chooseTime from "./src/index.vue";

// 让这个组件可以通过use形式使用

export default {
  install(app: App) {
    app.component("chooseTime", chooseTime);
  },
};
