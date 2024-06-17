/*
 * @Author: jsopy
 * @Date: 2024-06-17 21:48:12
 * @LastEditTime: 2024-06-17 21:48:17
 * @FilePath: /my-vue-app/src/components/index.ts
 * @Description:
 *
 */

import { App } from "vue";

import chooseIcon from "./chooseIcon";

import chooseArea from "./choosearea";

const components = [chooseIcon, chooseArea];

export default {
  install(app: App) {
    components.map((item) => {
      app.use(item);
    });
  },
};
