// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAF616w_YOJQiYICXQ8RxuEp4bDRzZPQuk",
  authDomain: "teslavedha-58fd3.firebaseapp.com",
  projectId: "teslavedha-58fd3",
  storageBucket: "teslavedha-58fd3.firebasestorage.app",
  messagingSenderId: "647191590052",
  appId: "1:647191590052:web:f9c5696b95b2e29a892231",
  measurementId: "G-DHXVT7L8TM"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
