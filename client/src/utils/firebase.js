// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: process.env.FIREBASE,
  authDomain: "blog-d3aa2.firebaseapp.com",
  projectId: "blog-d3aa2",
  storageBucket: "blog-d3aa2.appspot.com",
  messagingSenderId: "486374341781",
  appId: process.env.APPID,
  measurementId: "G-CV0NHKCX0C"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);