/*
 * @Author: jsopy
 * @Date: 2024-06-18 07:14:24
 * @LastEditTime: 2024-06-18 07:31:18
 * @FilePath: /my-vue-app/src/hooks/sidebar/getRouters.ts
 * @Description:获取所有路由
 *
 */
import { useRouter } from "vue-router";
export const useGetRouters = () => {
  const router = useRouter();
  const routerall = router.getRoutes();
  const [result] = routerall.filter((item) => {
    if (item.children.length > 0) {
      return true;
    }
  });
  return {
    routesall: result,
    current: router.currentRoute.value.path,
  };
};
