import {createRouter, createWebHistory} from 'vue-router';
import HomeView from '../views/pages/Home.vue';
import AgendaView from '../views/pages/Agenda.vue';
import BsTestView from '../views/pages/BsTest.vue';
import LoginView from '../views/auth/Login.vue';
import RegisterView from '../views/auth/Register.vue';
import ResetView from '../views/auth/Reset.vue';
//import NewPasswordView from '../views/auth/NewPassword.vue';

const routes = [
    {
        path: '/',
        name: 'Home',
        component: HomeView
    },
    {
        path: '/agenda',
        name: 'Agenda',
        component: AgendaView
    },
    {
        path: '/bs-test',
        name: 'Bootstrap test page',
        component: BsTestView
    },
    {
        path: '/register',
        name: 'Registreer een account',
        component: RegisterView
    },
    {
        path: '/login',
        name: 'Login op je account',
        component: LoginView
    },
    {
        path: '/reset-password',
        name: 'Vraag een nieuw wachtwoord aan.',
        component: ResetView
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes,
    linkActiveClass: "active",
    linkExactActiveClass: "exact-active",
});

export default router;