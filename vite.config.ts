import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import tailwindcss from "@tailwindcss/vite";
import path from "path";

// https://vite.dev/config/
export default defineConfig({
    plugins: [react(), tailwindcss()],
    resolve: {
        alias: {
            "@assets": path.resolve(__dirname, "src/assets"),
            "@components": path.resolve(__dirname, "src/components"),
            "@data": path.resolve(__dirname, "src/data"),
            "@pages": path.resolve(__dirname, "src/pages"),
            "@viewports": path.resolve(__dirname, "src/viewports"),
            "@utils": path.resolve(__dirname, "src/utils"),
        },
    },
});
