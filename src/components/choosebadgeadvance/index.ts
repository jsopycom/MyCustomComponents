/*
 * @Author: jsopy
 * @Date: 2024-06-18 21:24:59
 * @LastEditTime: 2024-06-18 21:26:21
 * @FilePath: /my-vue-app/src/components/choosebadgeadvance/index.ts
 * @Description:
 *
 */

import { App } from "vue";

import chooseBadgeAdvance from "./src/index.vue";

// 让这个组件可以通过use形式使用

export default {
  install(app: App) {
    app.component("chooseBadgeAdvance", chooseBadgeAdvance);
  },
};
