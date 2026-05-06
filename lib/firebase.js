import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyA1KwhI4xf0SEcCh_bkraQYtAgQk3vRxNk",
  authDomain: "tippjatek-270c0.firebaseapp.com",
  projectId: "tippjatek-270c0",
  storageBucket: "tippjatek-270c0.firebasestorage.app",
  messagingSenderId: "995297058417",
  appId: "1:995297058417:web:728d3f48ad82a5cf3385d0"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);