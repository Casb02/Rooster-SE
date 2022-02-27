import { createApp } from 'vue';
import { createPinia } from 'pinia';
import App from './App.vue';
import router from './router';
import './assets/scss/main.scss';
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {browserLocalPersistence, getAuth, onAuthStateChanged, setPersistence} from "firebase/auth";
import {useUserStore} from "./store/userStore";

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


// Initialize Firebase Analytics
const analyticsApp = initializeApp(firebaseConfig);
const analytics = getAnalytics(analyticsApp);

//set persistence
const auth = getAuth();
(async () => {
    await setPersistence(auth, browserLocalPersistence);
})();

const app = createApp(App);
app.use(createPinia());
app.use(router);
app.mount('#app');

const userStore = useUserStore();

onAuthStateChanged(getAuth(),user => {
    if (user) {
        userStore.setUser(user);
    } else {
        userStore.unsetUser();
    }
});
