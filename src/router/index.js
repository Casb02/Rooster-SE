import {createRouter, createWebHistory} from 'vue-router';
import Home from '../views/Home.vue';
import Agenda from '../views/Agenda.vue';
import BsTest from '../views/BsTest.vue';

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
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes,
    linkActiveClass: "active",
    linkExactActiveClass: "exact-active",
});

export default router;