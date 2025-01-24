import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
    authDomain: "freelance-earnings-calculator.firebaseapp.com",
    projectId: "freelance-earnings-calculator",
    storageBucket: "freelance-earnings-calculator.firebasestorage.app",
    messagingSenderId: "1077862778322",
    appId: "1:1077862778322:web:1aa6ca91bd7f99809c340b"
};


const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

export { db, auth };