import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

export default function logUserIn(
    email: string,
    password: string): Promise<any> {
    return new Promise<any>(
        async (resolve, reject) => {
            const auth = getAuth();
            signInWithEmailAndPassword(auth, email, password)
                .then(
                    (user) => {
                        resolve(user);
                    }
                )
                .catch(
                    (error) => {
                        reject(error);
                    }
                );
        }
    );
}