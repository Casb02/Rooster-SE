import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
    envPrefix: [
        'VITE_',
        'FIREBASE_'
    ],
    define: {
        'process.env': {},
    },
    server: {
        cors: {
            origin: '*',
            allowMethods: 'GET,HEAD,PUT,POST,DELETE,PATCH',
            allowHeaders: '*',
        },
    },
    plugins: [
        vue()
    ],
})
