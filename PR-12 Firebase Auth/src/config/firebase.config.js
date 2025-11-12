// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCRVRKhePh06gNrGkzZF3sgfP64M_CfxwM",
  authDomain: "megamart-d2d8f.firebaseapp.com",
  projectId: "megamart-d2d8f",
  storageBucket: "megamart-d2d8f.firebasestorage.app",
  messagingSenderId: "676336998191",
  appId: "1:676336998191:web:5266d488932a5e9ff7f3da"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);