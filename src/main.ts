import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './assets/scss/main.scss'
// import '../node_modules/bootstrap/dist/js/bootstrap.js'

const app = createApp(App);
app.use(router);
app.mount('#app');
