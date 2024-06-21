/*
 * @Author: jsopy
 * @Date: 2024-06-21 19:56:13
 * @LastEditTime: 2024-06-21 19:56:19
 * @FilePath: /my-vue-app/src/components/chooseDate/index.ts
 * @Description:
 *
 */
import { App } from "vue";

import chooseDate from "./src/index.vue";

// 让这个组件可以通过use形式使用

export default {
  install(app: App) {
    app.component("chooseDate", chooseDate);
  },
};
