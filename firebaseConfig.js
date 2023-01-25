// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCQSYeTnvzQfFVjUed4Y_dzzhWmnhlMe8A",
  authDomain: "potplantz.firebaseapp.com",
  projectId: "potplantz",
  storageBucket: "potplantz.appspot.com",
  messagingSenderId: "437155016233",
  appId: "1:437155016233:web:47b31d28a7653c2428f638",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)