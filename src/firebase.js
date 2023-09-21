// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAbRRQgf5H-XQi5toFjx5WUmKnuLwA8wbg",
  authDomain: "drag-and-drop-78235.firebaseapp.com",
  projectId: "drag-and-drop-78235",
  storageBucket: "drag-and-drop-78235.appspot.com",
  messagingSenderId: "850440529700",
  appId: "1:850440529700:web:2c6258b279b2e0f82975b1",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth();
