/*
 * @Author: jsopy
 * @Date: 2024-06-16 09:31:14
 * @LastEditTime: 2024-06-16 09:31:19
 * @FilePath: /my-vue-app/src/utils/index.ts
 * @Description:
 *
 */

/**
 * @description: 把驼峰转换成横杠
 * @param {string} value
 * @return {*}
 */

export const toLine = (value: string) => {
  return value.replace(/([A-Z])/g, "-$1").toLowerCase();
};
