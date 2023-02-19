// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCP2POVQOcKynNzV1MbvlRxXH5UkaNLUPI",
  authDomain: "crud-44048.firebaseapp.com",
  projectId: "crud-44048",
  storageBucket: "crud-44048.appspot.com",
  messagingSenderId: "698571988563",
  appId: "1:698571988563:web:655e0bd5575444f76630a6",
  measurementId: "G-GP74471PZC",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const db = getFirestore(app);
