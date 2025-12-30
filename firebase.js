import { initializeApp } from "https://www.gstatic.com/firebasejs/12.7.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/12.7.0/firebase-auth.js";

const firebaseConfig = {
  apiKey: "COPY FROM Project Settings → Web App → Config",
  authDomain: "COPY FROM SAME PLACE",
  projectId: "COPY FROM SAME PLACE",
  storageBucket: "COPY FROM SAME PLACE",
  messagingSenderId: "COPY FROM SAME PLACE",
  appId: "COPY FROM SAME PLACE"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
