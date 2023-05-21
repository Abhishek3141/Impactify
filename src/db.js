// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getDatabase} from "firebase/database";
import { GoogleAuthProvider,getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDSq75KNxHERm2yQGJpUJmNkdLjoccS1DA",
  authDomain: "impactify-7c86a.firebaseapp.com",
  projectId: "impactify-7c86a",
  storageBucket: "impactify-7c86a.appspot.com",
  messagingSenderId: "172522252017",
  appId: "1:172522252017:web:b82130f3634b4cbe982b50",
  databaseURL : "https://impactify-7c86a-default-rtdb.firebaseio.com/"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider(app);
export const db = getDatabase(app);