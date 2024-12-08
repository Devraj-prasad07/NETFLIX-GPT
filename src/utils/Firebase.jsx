// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBDgLs_gjelmgM2JBoO7Sl1VaBccKrWgqc",
  authDomain: "netflixgpt-22187.firebaseapp.com",
  projectId: "netflixgpt-22187",
  storageBucket: "netflixgpt-22187.firebasestorage.app",
  messagingSenderId: "244816979545",
  appId: "1:244816979545:web:fec3eed85d214da552f348",
  measurementId: "G-2RXZEKLTNM"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);