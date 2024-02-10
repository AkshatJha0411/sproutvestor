// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCaLygJ62op1BdTJGWM4FSx4_OxfFFyj30",
  authDomain: "finance-advisor-c20d9.firebaseapp.com",
  projectId: "finance-advisor-c20d9",
  storageBucket: "finance-advisor-c20d9.appspot.com",
  messagingSenderId: "194313947874",
  appId: "1:194313947874:web:2c8f17e22646ee37d46cbb",
  measurementId: "G-3SD71PQV0E",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

const db = getFirestore(app);
export { db };
