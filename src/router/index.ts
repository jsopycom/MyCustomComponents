/*
 * @Author: jsopy
 * @Date: 2024-06-15 21:43:31
 * @LastEditTime: 2024-06-17 20:49:14
 * @FilePath: /my-vue-app/src/router/index.ts
 * @Description:
 *
 */
import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";

const LayOutPage = () => import("@/pages/LayOut.vue");

const routes: RouteRecordRaw[] = [
  {
    path: "/",
    name: "Home",
    component: LayOutPage,
    children: [
      {
        path: "/",
        name: "HomePage",
        component: () => import("@/pages/Home/index.vue"),
      },
      {
        path: "/choosearea",
        name: "AreaPage",
        component: () => import("@/pages/Area/index.vue"),
      },
    ],
  },
];

const router = createRouter({
  routes,
  history: createWebHistory(),
});

export default router;
