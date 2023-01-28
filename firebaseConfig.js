// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: `${process.env.NEXT_PUBLIC_FB_API}`,
  authDomain: `${process.env.NEXT_PUBLIC_FB_DOMAIN}`,
  projectId: "potplantz",
  storageBucket: `${process.env.NEXT_PUBLIC_FB_STORAGE}`,
  messagingSenderId:`${process.env.NEXT_PUBLIC_FB_MESSAGE}`,
  appId: `${process.env.NEXT_PUBLIC_FB_APPID}`,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)