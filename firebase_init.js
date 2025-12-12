<!-- firebase_init.js -->
<!-- Load Firebase compat libs (works with simple HTML sites) -->
<script src="https://www.gstatic.com/firebasejs/10.7.0/firebase-app-compat.js"></script>
<script src="https://www.gstatic.com/firebasejs/10.7.0/firebase-auth-compat.js"></script>
<script src="https://www.gstatic.com/firebasejs/10.7.0/firebase-firestore-compat.js"></script>

<script>
/* ====== PASTE YOUR FIREBASE CONFIG BELOW (already present in your project) ====== */
const firebaseConfig = {
  apiKey: "AIzaSyAF616w_YOJQiYICXQ8RxuEp4bDRzZPQuk",
  authDomain: "teslavedha-58fd3.firebaseapp.com",
  projectId: "teslavedha-58fd3",
  storageBucket: "teslavedha-58fd3.firebasestorage.app",
  messagingSenderId: "647191590052",
  appId: "1:647191590052:web:f9c5696b95b2e29a892231",
  measurementId: "G-DHXV7L8TM"
};
/* ================================================================================ */

firebase.initializeApp(firebaseConfig);

// expose commonly used objects globally so all pages can use them
window.auth = firebase.auth();
window.db   = firebase.firestore();

// optional debug console message
console.info("Firebase Loaded Successfully");
</script>
