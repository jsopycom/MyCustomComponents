/*
 * @Author: jsopy
 * @Date: 2024-06-15 21:43:31
 * @LastEditTime: 2024-06-18 21:28:40
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
        meta: {
          title: "选择图标",
          icon: "el-icon-menu",
        },
        component: () => import("@/pages/Home/index.vue"),
      },
      {
        path: "/choosearea",
        name: "AreaPage",
        meta: {
          title: "城市联动",
          icon: "el-icon-edit",
        },
        component: () => import("@/pages/Area/index.vue"),
      },
      {
        path: "/choosequshi",
        name: "Qushi",
        meta: {
          title: "趋势标记",
          icon: "el-icon-arrow-up",
        },
        component: () => import("@/pages/QuShi/index.vue"),
      },
      {
        path: "/choosebadge",
        name: "badge",
        meta: {
          title: "徽章用法",
          icon: "el-icon-bell",
        },
        component: () => import("@/pages/Badge/index.vue"),
      },
      {
        path: "/choosebadgeadvance",
        name: "badageadvance",
        meta: {
          title: "高级徽章",
          icon: "el-icon-menu",
        },
        component: () => import("@/pages/BadgeAdvance/index.vue"),
      },
    ],
  },
];

const router = createRouter({
  routes,
  history: createWebHistory(),
});

export default router;
