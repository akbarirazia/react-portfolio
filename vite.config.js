import { defineConfig } from "vite"
import react from "@vitejs/plugin-react"

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  assetsInclude: ["**/*.png", "**/*.PNG"],
})
// export default defineConfig({
//   // other configuration options...
//   assetsInclude: ['**/*.png', '**/*.PNG'],
//   // other options...
// });
