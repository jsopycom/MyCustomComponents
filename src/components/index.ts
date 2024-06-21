/*
 * @Author: jsopy
 * @Date: 2024-06-17 21:48:12
 * @LastEditTime: 2024-06-21 19:57:33
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

import chooseProcessBar from "./chooseProcessBar";

import chooseTime from "./chooseTime";

import chooseDate from "./chooseDate";

const components = [
  chooseIcon,
  chooseArea,
  chooseQuShi,
  chooseBadge,
  chooseBadgeAdvance,
  chooseTab,
  chooseProcessBar,
  chooseTime,
  chooseDate
];

export default {
  install(app: App) {
    components.map((item) => {
      app.use(item);
    });
  },
};
