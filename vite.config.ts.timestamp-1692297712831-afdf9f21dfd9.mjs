// vite.config.ts
import { defineConfig } from "file:///data/data/com.termux/files/home/MyAnime/node_modules/vite/dist/node/index.js";
import react from "file:///data/data/com.termux/files/home/MyAnime/node_modules/@vitejs/plugin-react/dist/index.mjs";
var vite_config_default = defineConfig({
  server: {
    middleware: [
      (req, res, next) => {
        if (req.url && req.url.endsWith(".vtt")) {
          res.setHeader("Content-Type", "text/vtt");
        }
        next();
      }
    ]
  },
  plugins: [react()]
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCIvZGF0YS9kYXRhL2NvbS50ZXJtdXgvZmlsZXMvaG9tZS9NeUFuaW1lXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCIvZGF0YS9kYXRhL2NvbS50ZXJtdXgvZmlsZXMvaG9tZS9NeUFuaW1lL3ZpdGUuY29uZmlnLnRzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9kYXRhL2RhdGEvY29tLnRlcm11eC9maWxlcy9ob21lL015QW5pbWUvdml0ZS5jb25maWcudHNcIjtpbXBvcnQgeyBVc2VyQ29uZmlnLCBkZWZpbmVDb25maWcgfSBmcm9tICd2aXRlJztcbmltcG9ydCByZWFjdCBmcm9tICdAdml0ZWpzL3BsdWdpbi1yZWFjdCc7XG5cbmV4cG9ydCBkZWZhdWx0IGRlZmluZUNvbmZpZyh7XG4gIHNlcnZlcjoge1xuICAgIG1pZGRsZXdhcmU6IFtcbiAgICAgIChyZXEsIHJlcywgbmV4dCkgPT4ge1xuICAgICAgICBpZiAocmVxLnVybCAmJiByZXEudXJsLmVuZHNXaXRoKCcudnR0JykpIHtcbiAgICAgICAgICByZXMuc2V0SGVhZGVyKCdDb250ZW50LVR5cGUnLCAndGV4dC92dHQnKTtcbiAgICAgICAgfVxuICAgICAgICBuZXh0KCk7XG4gICAgICB9XG4gICAgXVxuICB9LFxuICBwbHVnaW5zOiBbcmVhY3QoKV1cbn0gYXMgVXNlckNvbmZpZyk7XG5cbiJdLAogICJtYXBwaW5ncyI6ICI7QUFBMFMsU0FBcUIsb0JBQW9CO0FBQ25WLE9BQU8sV0FBVztBQUVsQixJQUFPLHNCQUFRLGFBQWE7QUFBQSxFQUMxQixRQUFRO0FBQUEsSUFDTixZQUFZO0FBQUEsTUFDVixDQUFDLEtBQUssS0FBSyxTQUFTO0FBQ2xCLFlBQUksSUFBSSxPQUFPLElBQUksSUFBSSxTQUFTLE1BQU0sR0FBRztBQUN2QyxjQUFJLFVBQVUsZ0JBQWdCLFVBQVU7QUFBQSxRQUMxQztBQUNBLGFBQUs7QUFBQSxNQUNQO0FBQUEsSUFDRjtBQUFBLEVBQ0Y7QUFBQSxFQUNBLFNBQVMsQ0FBQyxNQUFNLENBQUM7QUFDbkIsQ0FBZTsiLAogICJuYW1lcyI6IFtdCn0K
