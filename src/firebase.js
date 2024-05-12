// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBvViAhaGHQj9qEgqBIaCp95nck7Wq9NLM",
  authDomain: "mern-estate-10cde.firebaseapp.com",
  projectId: "mern-estate-10cde",
  storageBucket: "mern-estate-10cde.appspot.com",
  messagingSenderId: "1040771745351",
  appId: "1:1040771745351:web:1ffe6f8b67c85d73a9d362"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);