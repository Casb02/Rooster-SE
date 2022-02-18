import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './assets/scss/main.scss'
//Firebase config
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {
    apiKey: import.meta.env.FIREBASE_API_KEY,
    authDomain: import.meta.env.FIREBASE_AUTH_DOMAIN,
    projectId: import.meta.env.FIREBASE_PROJECT_ID,
    storageBucket: import.meta.env.FIREBASE_STORAGE_BUCKET,
    messagingSenderId: import.meta.env.FIREBASE_MESSAGING_SENDER_ID,
    appId: import.meta.env.FIREBASE_APP_ID,
    measurementId: import.meta.env.FIREBASE_MEASUREMENT_ID
};


// Initialize Firebase
const analyticsApp = initializeApp(firebaseConfig);
const analytics = getAnalytics(analyticsApp);


const app = createApp(App);
app.use(router);
app.mount('#app');
