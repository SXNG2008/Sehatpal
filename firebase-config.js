// firebase-config.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.0.0/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.0.0/firebase-firestore.js";

// REPLACE THIS OBJECT WITH YOUR ACTUAL KEYS FROM THE FIREBASE CONSOLE
const firebaseConfig = {
  apiKey: "AIzaSyDNK-LPHnFOLHawayCpSTQTWN92OA1zlMs",
  authDomain: "sehatpal-web.firebaseapp.com",
  projectId: "sehatpal-web",
  storageBucket: "sehatpal-web.firebasestorage.app",
  messagingSenderId: "1012982531044",
  appId: "1:1012982531044:web:fcfcec3b37271d93e3bdf1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firestore (The Database)
export const db = getFirestore(app);
