// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getStorage} from "firebase/storage"
import {getAuth} from "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyA_DOMr3VqSLBkDLqX_aB1pklTuuV_pBXk",
  authDomain: "caliber-61e70.firebaseapp.com",
  projectId: "caliber-61e70",
  storageBucket: "caliber-61e70.appspot.com",
  messagingSenderId: "868212838481",
  appId: "1:868212838481:web:a64520435946b92d5f6870",
  measurementId: "G-Q120ETKDL0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage=getStorage(app);
export const firebaseAuth=getAuth(app);
