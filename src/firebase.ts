// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBVBbJy3TB5Get_OB6tfxOsCvN6sB4yMYI",
    authDomain: "expresshahar.firebaseapp.com",
    projectId: "expresshahar",
    storageBucket: "expresshahar.firebasestorage.app",
    messagingSenderId: "86162573017",
    appId: "1:86162573017:web:fbb65e901f75f6f6b520c8",
    measurementId: "G-595BYH2R3B"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Analytics (only in browser environment)
let analytics;
if (typeof window !== 'undefined') {
    analytics = getAnalytics(app);
}

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);

// Initialize Cloud Firestore and get a reference to the service
export const db = getFirestore(app);

export { analytics };
export default app;
