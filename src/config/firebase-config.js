import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAlxb-sOwlkcomhc2M53gA0KmlSi80EdCU",
  authDomain: "expense-tracker-56c33.firebaseapp.com",
  projectId: "expense-tracker-56c33",
  storageBucket: "expense-tracker-56c33.appspot.com",
  messagingSenderId: "156773260481",
  appId: "1:156773260481:web:758552efd66274dbf24840",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
export const db = getFirestore(app);
