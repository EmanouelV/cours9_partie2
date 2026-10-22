import { defineConfig } from 'vite';
 
export default defineConfig({
    base: "/cours9_partie2/",
    build: {
        emptyOutDir: true,
        rollupOptions: {
            input: {
                main: 'index.html'
            },
        },
    },
});
 