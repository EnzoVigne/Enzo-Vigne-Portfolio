import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/vignee-portfolio/",
  css: {
    modules: {
      localsConvention: "camelCase",
    },
  },
});
