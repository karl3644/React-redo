import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  root: "src", // use this if index.html is in project root dir
  test: {
    environment: "happy-dom",
    setupFiles: ["./setupVitest.js"],
  },
});
