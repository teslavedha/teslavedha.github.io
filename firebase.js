<script type="module">
  // Firebase core
  import { initializeApp } from "https://www.gstatic.com/firebasejs/12.7.0/firebase-app.js";
  import { getAuth } from "https://www.gstatic.com/firebasejs/12.7.0/firebase-auth.js";
  import { getFirestore } from "https://www.gstatic.com/firebasejs/12.7.0/firebase-firestore.js";

  // Teslavedha Learning Firebase config
  const firebaseConfig = {
    apiKey: "AIzaSyAnDwmnfIZWFdyWD50Yjab3HYf-xgMht-I",
    authDomain: "teslavedha-learning.firebaseapp.com",
    projectId: "teslavedha-learning",
    storageBucket: "teslavedha-learning.appspot.com",
    messagingSenderId: "217735003172",
    appId: "1:217735003172:web:6700e0118e65400f07ecb1"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);

  // Make services globally available
  window.auth = getAuth(app);
  window.db = getFirestore(app);
</script>
