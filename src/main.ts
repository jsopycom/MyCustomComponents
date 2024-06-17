import { createApp } from "vue";

import App from "./App.vue";
// 加载路由
import router from "./router/index";

// 加载elementui

import ElementPlus from "element-plus";

import "normalize.css";

import "element-plus/dist/index.css";

// 加载自定义组件

import CustomUI from "./components";

// 加载icons

import * as Icons from "@element-plus/icons-vue";

// 驼峰命名

import { toLine } from "./utils";

const app = createApp(App);

// 全局注册图标
// el-icon-xxx
for (let i in Icons) {
  // 注册全局组件
  // 组件名称为：el-icon-xxx
  console.log(`el-icon${toLine(i)}`);
  app.component(`el-icon${toLine(i)}`, (Icons as any)[i]);
}

app.use(router).use(ElementPlus).use(CustomUI);

app.mount("#app");
