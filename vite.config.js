import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';
import react from '@vitejs/plugin-react';

export default defineConfig({
    plugins: [
        laravel({
            input: [
                'resources/css/app.css',
                'resources/js/detail_berita.jsx',
                'resources/js/berita.jsx',
                'resources/js/dashboard.jsx',
            ],
            refresh: true,
        }),
        react(),
    ],
});
