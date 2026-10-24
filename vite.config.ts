import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
      "@components": path.resolve(__dirname, "./src/components"),
      "@assets": path.resolve(__dirname, "./src/assets"),
      "@pages": path.resolve(__dirname, "./src/pages"),
    },
  },
  build: {
    rollupOptions: {
      output: {
        // React and friends change rarely, so a separate chunk stays cached
        // across deploys while app code updates.
        manualChunks(id) {
          if (
            /node_modules[\/](react|react-dom|react-router|react-router-dom|scheduler|@reduxjs|react-redux|redux|immer|reselect|styled-components|@emotion|stylis)[\/]/.test(
              id,
            )
          ) {
            return "vendor";
          }
        },
      },
    },
  },
});
