// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "@firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyDuY55WGXQh9YcXIqTaKQQB-hfzZrjDbCA",
  authDomain: "chatapp-1d5c7.firebaseapp.com",
  projectId: "chatapp-1d5c7",
  storageBucket: "chatapp-1d5c7.appspot.com",
  messagingSenderId: "111035136495",
  appId: "1:111035136495:web:32689c2126d3b63d7cde1a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
