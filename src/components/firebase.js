// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDSbsADVZEpo6bUhkXcy-IXzKqT7FYuDJs",
  authDomain: "login-ca99a.firebaseapp.com",
  projectId: "login-ca99a",
  storageBucket: "login-ca99a.appspot.com",
  messagingSenderId: "15688146091",
  appId: "1:15688146091:web:c37fd96f58923f6c1febee",
  measurementId: "G-0T7WE8PDZW"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();
export const db = getFirestore(app);
export default app;