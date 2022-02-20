import { defineStore } from 'pinia';
import { useStorage } from '@vueuse/core'

export const useUserStore = defineStore('user', {
    state: () => {
        return {
            isLoggedIn: useStorage('user-logged-in', false),
            verified: useStorage('user-verified', false),
            user: useStorage('user-user', null),
            email: useStorage('user-email', ''),
        }
    },
    actions: {
        setUser(credentials) {
            this.user = credentials.user;
            this.isLoggedIn = true;
            this.email = credentials.user.email;
            this.verified = credentials.user.emailVerified;
        },
        logout(state) {
            this.user = null;
            this.isLoggedIn = false;
            this.email = '';
        },
    },
});
