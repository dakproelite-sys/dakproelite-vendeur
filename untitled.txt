// firebase-config.js
import { initializeApp } from "firebase/app";
// N'hésitez pas à décommenter les services dont vous avez besoin :
// import { getAuth } from "firebase/auth";
// import { getDatabase } from "firebase/database";
// import { getStorage } from "firebase/storage";

// Configuration Firebase
const firebaseConfig = {
  apiKey: import.meta.env?.VITE_FIREBASE_API_KEY || process.env.REACT_APP_FIREBASE_API_KEY || "AIzaSyDR7INHKaazaqZt-xIcjk10JFiy58uXKO8",
  authDomain: import.meta.env?.VITE_FIREBASE_AUTH_DOMAIN || process.env.REACT_APP_FIREBASE_AUTH_DOMAIN || "dakproelite.firebaseapp.com",
  databaseURL: import.meta.env?.VITE_FIREBASE_DATABASE_URL || process.env.REACT_APP_FIREBASE_DATABASE_URL || "https://dakproelite-default-rtdb.firebaseio.com",
  projectId: import.meta.env?.VITE_FIREBASE_PROJECT_ID || process.env.REACT_APP_FIREBASE_PROJECT_ID || "dakproelite",
  storageBucket: import.meta.env?.VITE_FIREBASE_STORAGE_BUCKET || process.env.REACT_APP_FIREBASE_STORAGE_BUCKET || "dakproelite.firebasestorage.app",
  messagingSenderId: import.meta.env?.VITE_FIREBASE_MESSAGING_SENDER_ID || process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID || "580591769206",
  appId: import.meta.env?.VITE_FIREBASE_APP_ID || process.env.REACT_APP_FIREBASE_APP_ID || "1:580591769206:web:9dc5fc1ba7d6db46087157"
};

// Initialisation de Firebase
export const app = initializeApp(firebaseConfig);

// Exemples d'export de services complémentaires :
// export const auth = getAuth(app);
// export const db = getDatabase(app);
// export const storage = getStorage(app);
