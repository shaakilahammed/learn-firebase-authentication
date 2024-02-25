// Import the functions you need from the SDKs you need

import { initializeApp } from 'firebase/app';
import {
    GoogleAuthProvider,
    createUserWithEmailAndPassword,
    getAuth,
    sendPasswordResetEmail,
    signInWithEmailAndPassword,
    signInWithPopup,
    signOut,
} from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use

// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration

const firebaseConfig = {
    apiKey: 'AIzaSyBMusKcSvcyXT7dnmeVv8wXZG8LGnAx9R0',

    authDomain: 'guestbook-837a4.firebaseapp.com',

    projectId: 'guestbook-837a4',

    storageBucket: 'guestbook-837a4.appspot.com',

    messagingSenderId: '11134228840',

    appId: '1:11134228840:web:d30c058bcb1b359aef1edd',
};

// Initialize Firebase

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

const googleProvider = new GoogleAuthProvider();
// const fbProvider = new FacebookAuthProvider();

export const register = async (newUser) => {
    try {
        const response = await createUserWithEmailAndPassword(
            auth,
            newUser.email,
            newUser.password
        );
        return response.user;
    } catch (error) {
        console.log(error.message);
    }
};

export const signIn = async (credential) => {
    try {
        const response = await signInWithEmailAndPassword(
            auth,
            credential.email,
            credential.password
        );
        return response.user;
    } catch (error) {
        console.log(error.message);
    }
};

// export const loggedUser = () => {
//     return auth.currentUser;
// };

export const logout = async () => {
    try {
        await signOut(auth);
        return true;
    } catch (error) {
        console.log(error.message);
    }
};

export const resetPassword = async (email) => {
    try {
        await sendPasswordResetEmail(auth, email);
        return true;
    } catch (error) {
        console.log(error);
    }
};

export const socialLogin = async () => {
    try {
        const response = await signInWithPopup(auth, googleProvider);
        return response.user;
    } catch (error) {
        console.log(error.message);
    }
};
