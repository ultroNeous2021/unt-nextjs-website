// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC7xFMtxgvbQ4lo-BUxmrLEYBHy6kVcxyM",
  authDomain: "ultroneous-79d3f.firebaseapp.com",
  projectId: "ultroneous-79d3f",
  storageBucket: "ultroneous-79d3f.appspot.com",
  messagingSenderId: "884014397046",
  appId: "1:884014397046:web:259de70a1d6fd321671157",
  measurementId: "G-7TC6SGTS6W",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
