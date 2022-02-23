import { defineStore } from 'pinia';

const authUser = Object.keys(window.localStorage)
    .filter(item => item.startsWith('firebase:authUser'))[0]


export const useUserStore = defineStore('user', {
    state: () => {
        return {
            isLoggedIn: !authUser,
            verified: false,
            user: null,
            email: '',
            name: '',
            klas: ''
        }
    },
    actions: {
        setUser(credentials) {
            this.user = credentials.user;
            this.isLoggedIn = true;
            this.email = credentials.user.email;
            this.verified = credentials.user.emailVerified;

            //TODO: get user data from firestore

        },
        logout(state) {
            this.user = null;
            this.isLoggedIn = false;
            this.email = '';
        },
    },
});
