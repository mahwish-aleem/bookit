// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBQ3dhKN4iQPOK3WwU0-T8naD9_G4ihOwo",
  authDomain: "bookit-78f07.firebaseapp.com",
  projectId: "bookit-78f07",
  storageBucket: "bookit-78f07.appspot.com",
  messagingSenderId: "164125292688",
  appId: "1:164125292688:web:1243f58de5673b4bca4015",
  measurementId: "G-ZY2R17DPCY"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);