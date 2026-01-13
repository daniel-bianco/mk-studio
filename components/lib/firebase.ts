// lib/firebase.ts
import { initializeApp, getApps } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAXfBaIsO2RCERwcs3PxauJsaNfLKAQWBM",
  authDomain: "mk-studio-a8b75.firebaseapp.com",
  projectId: "mk-studio-a8b75",
  storageBucket: "mk-studio-a8b75.firebasestorage.app",
  messagingSenderId: "331645002648",
  appId: "1:331645002648:web:1e65cdb5d286a694b641ed"
};

// Инициализация Firebase один раз
const app = !getApps().length ? initializeApp(firebaseConfig) : getApps()[0];

// Экспортируем Firestore и Auth
export const db = getFirestore(app);
export const auth = getAuth(app);