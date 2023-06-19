import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      // "@": "/src",
      "@": path.resolve(__dirname, "./src"),
    },
  },
  plugins: [react()],
});
