import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

 
const firebaseConfig = {
  apiKey: "AIzaSyAWQYGTaCYqwNAAshblOZ2BCO1nK0-I-T4",
  authDomain: "instagg-7b634.firebaseapp.com",
  projectId: "instagg-7b634",
  storageBucket: "instagg-7b634.firebasestorage.app",
  messagingSenderId: "955385370185",
  appId: "1:955385370185:web:ad21558adc9c5b769c9198",
  measurementId: "G-P7LCMBLQML"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const firestore = getFirestore(app);
const storage = getStorage(app)

export {app, auth, firestore, storage };  