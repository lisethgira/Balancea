import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [
    react(),
  ],
  // build: {
  //   rollupOptions: {
  //     output: {
  //       // Personaliza cómo se nombran los archivos de imagen (y potencialmente otros activos)
  //       assetFileNames: assetInfo => {
  //         if (assetInfo.name.endsWith('.svg')) {
  //           // Para archivos .png, quita el hash del nombre del archivo
  //           return 'assets/[name][extname]';
  //         }
  //         // Para otros tipos de archivos, utiliza el formato predeterminado con hash
  //         return 'assets/[name]-[hash][extname]';
  //       },
  //     },
  //   },
  // },
});
