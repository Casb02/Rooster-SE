import {getAuth} from "firebase/auth";

export default function getCurrentUser () {
  return new Promise((resolve, reject) => {
    const unsubscribe = getAuth().onAuthStateChanged(user => {
      unsubscribe();
      resolve(user);
    }, reject);
  })
}