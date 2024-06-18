/*
 * @Author: jsopy
 * @Date: 2024-06-17 21:48:12
 * @LastEditTime: 2024-06-18 21:48:52
 * @FilePath: /my-vue-app/src/components/index.ts
 * @Description:
 *
 */

import { App } from "vue";

import chooseIcon from "./chooseIcon";

import chooseArea from "./choosearea";

import chooseQuShi from "./choosequshi";

import chooseBadge from "./choosebadge";

import chooseTab from "./chooseTab";

import chooseBadgeAdvance from "./choosebadgeadvance";

const components = [
  chooseIcon,
  chooseArea,
  chooseQuShi,
  chooseBadge,
  chooseBadgeAdvance,
  chooseTab,
];

export default {
  install(app: App) {
    components.map((item) => {
      app.use(item);
    });
  },
};
