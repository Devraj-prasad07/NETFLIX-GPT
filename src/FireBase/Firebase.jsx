import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBIMv2iNMFTqMFdHcQLc1jAnH3xlVHV5UM",
  authDomain: "netflixgpt-f0f40.firebaseapp.com",
  projectId: "netflixgpt-f0f40",
  storageBucket: "netflixgpt-f0f40.firebasestorage.app",
  messagingSenderId: "429301150215",
  appId: "1:429301150215:web:5c53727cd78995fc89b0a2",
  measurementId: "G-F9JESTLC1V",
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();
