// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDs2aOfLTj5L7hVs6Q1Psl-EwLWVs4mXC0",
  authDomain: "tinder-778ea.firebaseapp.com",
  projectId: "tinder-778ea",
  storageBucket: "tinder-778ea.appspot.com",
  messagingSenderId: "694876637520",
  appId: "1:694876637520:web:c1d18754d60ae121978455",
  measurementId: "G-HBRX5ZXG16"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth();
const db = getFirestore();



export { auth , db };