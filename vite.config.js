import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import path from "path";

// https://vite.dev/config/
export default defineConfig({
  server: {
    port: 5173,
    host: "0.0.0.0",
    allowedHosts: ["2795354712fc.ngrok-free.app", "localhost"],
  },
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      "@": path.resolve(
        path.dirname(new URL(import.meta.url).pathname),
        "./src"
      ),
    },
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ["react", "react-dom"],
          ui: [
            "@radix-ui/react-icons",
            "@radix-ui/react-label",
            "@radix-ui/react-slot",
          ],
          animations: ["framer-motion"],
          icons: ["react-icons", "lucide-react"],
        },
      },
    },
    sourcemap: false,
    minify: "terser",
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true,
      },
    },
  },
  optimizeDeps: {
    include: ["react", "react-dom", "framer-motion"],
  },
});
