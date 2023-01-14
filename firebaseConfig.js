// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBWTDqyYV-svx5O5TThL7mcQ-1HT2HOt0Q",
  authDomain: "alea3-7f5db.firebaseapp.com",
  projectId: "alea3-7f5db",
  storageBucket: "alea3-7f5db.appspot.com",
  messagingSenderId: "136953773652",
  appId: "1:136953773652:web:d5b26059cbc322582c37c1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)