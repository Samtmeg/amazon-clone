// Import the functions you need from the SDKs you need
import firbase from "firebase/compat/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth} from "firebase/auth";
import "firebase/compat/firestore"
import "firebase/compat/auth"

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBs8Qq1VyupUW-yyqqVzu34owklsliT0Ns",
    authDomain: "clone-cf240.firebaseapp.com",
    projectId: "clone-cf240",
    storageBucket: "clone-cf240.appspot.com",
    messagingSenderId: "436199810616",
    appId: "1:436199810616:web:75798ec5442794e2e228cd",
    measurementId: "G-C4YMV84MF3"
};

// Initialize Firebase
const app = firbase.initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth(app);
export const db = app.firestore();