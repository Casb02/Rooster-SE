import {getAuth, signOut} from "firebase/auth";

export default function logUserOut() {
        signOut(getAuth()).then(() => {
            console.log('logged out');
        }).catch(err => {
            console.log("error logging out -> CODE: ", err);
        });
}