import {getAuth, createUserWithEmailAndPassword} from "firebase/auth";
import { doc, setDoc, getFirestore } from "firebase/firestore";

export default function registerUser(
    email: string,
    password: string,
    name: string,
    klas: string,
): Promise<any> {
    return new Promise((resolve, reject) => {
        const auth = getAuth();
        createUserWithEmailAndPassword(auth, email, password)
            .then(async (user) => {
                const db = getFirestore();
                await setDoc(doc(db, "usersCollection", user.user.uid), {
                    uid: user.user.uid,
                    name: name,
                    klas: klas,
                    email: email,
                });
                resolve(user);
            }).catch((error) => {
            reject(error);
        });
    });
}
