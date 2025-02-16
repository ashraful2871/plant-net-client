export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
      "@/components": path.resolve(__dirname, "./src/components"),
      "@/lib": path.resolve(__dirname, "./src/lib"),
    },
  },
  optimizeDeps: {
    include: ["magic-ui"], // Include Magic UI for dependency optimization
  },
});
