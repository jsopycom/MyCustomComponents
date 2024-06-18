/*
 * @Author: jsopy
 * @Date: 2024-06-18 20:58:32
 * @LastEditTime: 2024-06-18 20:58:37
 * @FilePath: /my-vue-app/src/components/choosebadge/index.ts
 * @Description:
 *
 */
import { App } from "vue";

import chooseBadge from "./src/index.vue";

// 让这个组件可以通过use形式使用

export default {
  install(app: App) {
    app.component("chooseBadge", chooseBadge);
  },
};
