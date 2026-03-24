import { initializeApp } from "firebase/app";
import { getAnalytics, isSupported } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "***REMOVED***",
  authDomain: "irish-ledger.firebaseapp.com",
  projectId: "irish-ledger",
  storageBucket: "irish-ledger.firebasestorage.app",
  messagingSenderId: "132538924603",
  appId: "1:132538924603:web:ceba3507e9b414b5f2261e",
  measurementId: "G-X9FM7JXWKC"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

// Initialize services
export const db = getFirestore(app);
export const auth = getAuth(app);

// Analytics (only in browser)
export const initAnalytics = async () => {
  if (await isSupported()) {
    return getAnalytics(app);
  }
  return null;
};
