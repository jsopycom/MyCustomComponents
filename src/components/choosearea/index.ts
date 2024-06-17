/*
 * @Author: jsopy
 * @Date: 2024-06-17 20:45:32
 * @LastEditTime: 2024-06-17 21:50:47
 * @FilePath: /my-vue-app/src/components/choosearea/index.ts
 * @Description: 
 * 
 */
import { App } from "vue";

import chooseArea from "./src/index.vue";

// 让这个组件可以通过use形式使用

export default {
  install(app: App) {
    app.component("ChooseArea", chooseArea);
  },
};