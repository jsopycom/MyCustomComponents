/*
 * @Author: jsopy
 * @Date: 2024-06-18 21:47:27
 * @LastEditTime: 2024-06-18 21:47:31
 * @FilePath: /my-vue-app/src/components/chooseTab/index.ts
 * @Description:
 *
 */
import { App } from "vue";

import chooseTab from "./src/index.vue";

// 让这个组件可以通过use形式使用

export default {
  install(app: App) {
    app.component("chooseTab", chooseTab);
  },
};
