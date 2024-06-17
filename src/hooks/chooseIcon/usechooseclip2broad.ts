/*
 * @Author: jsopy
 * @Date: 2024-06-17 06:56:09
 * @LastEditTime: 2024-06-17 07:00:41
 * @FilePath: /my-vue-app/src/hooks/chooseIcon/usechooseclip2broad.ts
 * @Description:
 *
 */

export const usechooseclip2broad = (text: string) => {
  let input = document.createElement("input");
  input.setAttribute("value", text);
  document.body.appendChild(input);
  input.select();
  document.execCommand("copy");
  document.body.removeChild(input);
  return true;
};
