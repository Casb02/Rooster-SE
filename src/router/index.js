import {createRouter, createWebHistory} from 'vue-router';
import Home from '../views/Pages/Home.vue';
import Agenda from '../views/Pages/Agenda.vue';
import BsTest from '../views/Pages/BsTest.vue';
import Login from '../views/Auth/Login.vue';
import Register from '../views/Auth/Register.vue';

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/agenda',
        name: 'Agenda',
        component: Agenda
    },
    {
        path: '/bs-test',
        name: 'Bootstrap test',
        component: BsTest
    },
    {
        path: '/login',
        name: 'Login',
        component: Login
    },
    {
        path: '/register',
        name: 'Register',
        component: Register
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes,
    linkActiveClass: "active",
    linkExactActiveClass: "exact-active",
});

export default router;