import { defineStore } from 'pinia';
import { getAuth, signOut } from "firebase/auth";

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
            const auth = getAuth();
            this.user = null;
            this.isLoggedIn = false;
            this.verified = false;
            this.email = '';
            this.name = '';
            this.klas = '';
            signOut(auth).then(() => {
                console.log('logged out');
            }).catch(err => {
                console.log(err);
            });
        },
    },
});
