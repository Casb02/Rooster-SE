import {getAuth, createUserWithEmailAndPassword} from "firebase/auth";

export default function registerUser(
    email: string,
    password: string,
    name: string,
    klas: string,
): Promise<any> {
    return new Promise((resolve, reject) => {
        const auth = getAuth();
        createUserWithEmailAndPassword(auth, email, password)
            .then((user) => {
                // @ts-ignore
                console.log(name); //TODO add to firebase
                console.log(klas); //TODO add to firebase
                resolve(user);
            }).catch((error) => {
            reject(error);
        });
    });
}
