import path from "path"
import react from "@vitejs/plugin-react"
import { defineConfig } from "vite"

export default defineConfig({
  plugins: [react()],
  "react/prop-types": "off",
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  server:{
    proxy:{
      "/product" : "http://localhost:8000"
    }
  }
})
