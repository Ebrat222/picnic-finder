import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// base "./" lets the built site work under https://USER.github.io/REPO/
export default defineConfig({
  base: "./",
  plugins: [react()],
});
