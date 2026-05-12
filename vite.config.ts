import tailwindcss from '@tailwindcss/vite';
import { defineConfig } from 'vite';
import { svelte } from '@sveltejs/vite-plugin-svelte';
import * as path from 'path'

// https://vite.dev/config/
export default defineConfig({
    resolve: {
        alias: {
            // src: '/src',
             src: path.resolve(__dirname, './src'),
             i18n: path.resolve(__dirname, process.env.NODE_ENV == 'production' ? 'build/i18n' : 'i18n')
        }
    },
    plugins: [
        tailwindcss(), 
        svelte()
    ]
});
