import { defineStore } from 'pinia';
import {doc, getFirestore, getDoc} from "firebase/firestore";

export const useUserStore = defineStore('user', {
    state: () => {
        return {
            isLoggedIn: false,
            isVerified: false,
            user: null,
            username: null,
            klas: null,
        }
    },
    actions: {
        async setUser(user) {
            this.user = user;
            this.isLoggedIn = !!user;
            this.isVerified = !!user && user.emailVerified;
            const docRef = doc(getFirestore(), "usersCollection", user.uid);
            const dataSnapshot = await getDoc(docRef);
            if (dataSnapshot.exists) {
                this.username = dataSnapshot.data().name;
                this.klas = dataSnapshot.data().klas;
            }
        },
        unsetUser() {
            this.user = null;
            this.isLoggedIn = false;
            this.username = null;
            this.klas = null;
        },
    },
});
