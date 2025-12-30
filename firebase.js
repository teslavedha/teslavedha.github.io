import { initializeApp } from "https://www.gstatic.com/firebasejs/12.7.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/12.7.0/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyAndwmnFIZWFdyWD50Yjab3HYf-xgMht-I",
  authDomain: "teslavedha-learning.firebaseapp.com",
  projectId: "teslavedha-learning",
  storageBucket: "teslavedha-learning.appspot.com",
  messagingSenderId: "217735003172",
  appId: "1:217735003172:web:6700e0118e65400f07ecb1"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
