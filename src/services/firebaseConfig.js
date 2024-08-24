// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCp1LsmA0URKrXs5lJNy61tmSanm9PA3EU",
  authDomain: "tiendakisa.firebaseapp.com",
  projectId: "tiendakisa",
  storageBucket: "tiendakisa.appspot.com",
  messagingSenderId: "737349085733",
  appId: "1:737349085733:web:893d7ad000754c6f0bedcc"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)