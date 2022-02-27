import {createRouter, createWebHistory} from 'vue-router';
import HomeView from '../views/pages/Home.vue';
import AgendaView from '../views/pages/Agenda.vue';
import LoginView from '../views/auth/Login.vue';
import RegisterView from '../views/auth/Register.vue';
import ResetView from '../views/auth/Reset.vue';
import NewPasswordView from '../views/auth/NewPassword.vue';
import DashboardView from '../views/account/Dashboard.vue';
import {getAuth} from "firebase/auth";

const routes = [
    {
        path: '/',
        name: 'Home',
        component: HomeView
    },
    {
        path: '/agenda',
        name: 'Agenda',
        component: AgendaView,
        meta: {
            requiresAuth: true
        }
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
        component: DashboardView,
        meta: {
            requiresAuth: true
        }
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes,
    linkActiveClass: "active"
});

router.beforeEach(async (to, from, next) => {
    const requiresAuth = to.matched.some(record => record.meta.requiresAuth);
    if (requiresAuth && !getAuth().currentUser) {
        next('login');
    }else{
        next();
    }
});

export default router;