import {createRouter, createWebHistory} from 'vue-router';
import Home from '../views/Home.vue';
import Agenda from '../views/Agenda.vue';

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
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;