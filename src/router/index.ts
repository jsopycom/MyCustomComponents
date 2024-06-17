/*
 * @Author: jsopy
 * @Date: 2024-06-15 21:43:31
 * @LastEditTime: 2024-06-16 20:37:12
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
    ],
  },
];

const router = createRouter({
  routes,
  history: createWebHistory(),
});

export default router;
