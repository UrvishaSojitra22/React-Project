import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCvngilouXJomMnc4pa88JnB9CLDXJ1Mpk",
  authDomain: "product-management-ef278.firebaseapp.com",
  projectId: "product-management-ef278",
  storageBucket: "product-management-ef278.firebasestorage.app",
  messagingSenderId: "1085643806634",
  appId: "1:1085643806634:web:11d9738fa4573c9a94fdd3"
};


const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);