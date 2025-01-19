// src/firebase.js

import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// 1. Copy these from your Firebase project settings:
const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_APP.firebaseapp.com",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_APP.appspot.com",
  messagingSenderId: "SENDER_ID",
  appId: "APP_ID",
};

// 2. Initialize the Firebase app
const app = initializeApp(firebaseConfig);

// 3. Export the Firestore database so we can import it anywhere
export const db = getFirestore(app);
