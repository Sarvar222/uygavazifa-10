import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyBMDjgzLy86V68h5Ro5gFYi6ZbKQTrdNqQ",
  authDomain: "uzum-a7fc8.firebaseapp.com",
  projectId: "uzum-a7fc8",
  storageBucket: "uzum-a7fc8.firebasestorage.app",
  messagingSenderId: "28148051336",
  appId: "1:28148051336:web:f9f9346f985063bb16de3d",
};

const app = initializeApp(firebaseConfig);
// auth
export const auth = getAuth();
