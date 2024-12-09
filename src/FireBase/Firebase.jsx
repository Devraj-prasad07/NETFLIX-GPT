import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use

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
