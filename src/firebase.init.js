import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBX8gomMCTLukKxYR6B4MGCZa73JA4dcMA",
  authDomain: "dragon-news-945ac.firebaseapp.com",
  projectId: "dragon-news-945ac",
  storageBucket: "dragon-news-945ac.firebasestorage.app",
  messagingSenderId: "389452312235",
  appId: "1:389452312235:web:435f76666db3a18a8951ee",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
