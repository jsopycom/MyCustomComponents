/*
 * @Author: jsopy
 * @Date: 2024-06-18 06:30:49
 * @LastEditTime: 2024-06-18 06:30:53
 * @FilePath: /my-vue-app/src/components/choosequshi/index.ts
 * @Description:
 *
 */
import { App } from "vue";

import chooseQuShi from "./src/index.vue";

// 让这个组件可以通过use形式使用

export default {
  install(app: App) {
    app.component("ChooseQuShi", chooseQuShi);
  },
};
