import { getAuth, sendEmailVerification } from "firebase/auth";

export default function sendVerifyMail() {
    const user = getAuth().currentUser;
    sendEmailVerification( user ).catch( error => {
        console.error( error );
    } );
}