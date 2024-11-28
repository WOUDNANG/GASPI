// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import "firebase/firestore";
import{db} from"../Backend/firebase";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCIEgKVrpWrXCPqCM9fBIG0IoCn9b3Ldiw",
  authDomain: "wafrica-tv.firebaseapp.com",
  projectId: "wafrica-tv",
  storageBucket: "wafrica-tv.firebasestorage.app",
  messagingSenderId: "231200454409",
  appId: "1:231200454409:web:e002eeefc3b43c284a45d8",
  measurementId: "G-T3ELTJE81J"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

export { db };