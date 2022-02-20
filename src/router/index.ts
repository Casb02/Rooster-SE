import {createRouter, createWebHistory} from 'vue-router';
import HomeView from '../views/pages/Home.vue';
import AgendaView from '../views/pages/Agenda.vue';
import LoginView from '../views/auth/Login.vue';
import RegisterView from '../views/auth/Register.vue';
import ResetView from '../views/auth/Reset.vue';
import NewPasswordView from '../views/auth/NewPassword.vue';
import DashboardView from '../views/account/Dashboard.vue';

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
        path: '/register',
        name: 'Registreer',
        component: RegisterView
    },
    {
        path: '/login',
        name: 'Login',
        component: LoginView
    },
    {
        path: '/auth/password/reset',
        name: 'PasswordReset',
        component: ResetView
    },
    {
        path: '/auth/password/new',
        name: 'PasswordNew',
        component: NewPasswordView
    },
    {
        path: '/account',
        name: 'Dashboard',
        component: DashboardView
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes,
    linkActiveClass: "active",
    // linkExactActiveClass: "exact-active",
});

export default router;