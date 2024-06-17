import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import { resolve } from "path";
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  // 修改端口号
  server: {
    port: 8080,
  },
  resolve: {
    // 设置路径别名
    alias: {
      "@": resolve(__dirname, "./src"),
      "*": resolve(""),
    },
  },
});
