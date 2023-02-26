// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import {getFirestore} from 'firebase/firestore/lite';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDsLCInc6Bzyp6X3e8XsJtzhNmMn7T3hCA",
  authDomain: "productify786.firebaseapp.com",
  projectId: "productify786",
  storageBucket: "productify786.appspot.com",
  messagingSenderId: "675496263863",
  appId: "1:675496263863:web:6b5f8211c03317ebabcd32",
  measurementId: "G-J4NNH4D7DG"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
const firestore = getFirestore(app);
export {auth, analytics, firestore}