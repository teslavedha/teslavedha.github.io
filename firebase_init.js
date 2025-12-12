<!-- firebase_init.js -->

<!-- Firebase App (core SDK) -->
<script src="https://www.gstatic.com/firebasejs/10.7.0/firebase-app-compat.js"></script>

<!-- Firebase Authentication -->
<script src="https://www.gstatic.com/firebasejs/10.7.0/firebase-auth-compat.js"></script>

<!-- Firebase Firestore -->
<script src="https://www.gstatic.com/firebasejs/10.7.0/firebase-firestore-compat.js"></script>

<script>
  // Your real Firebase config
  const firebaseConfig = {
    apiKey: "AIzaSyAF616w_YOJQiYICXQ8RxuEp4bDRzZPQuk",
    authDomain: "teslavedha-58fd3.firebaseapp.com",
    projectId: "teslavedha-58fd3",
    storageBucket: "teslavedha-58fd3.firebasestorage.app",
    messagingSenderId: "647191590052",
    appId: "1:647191590052:web:f9c5696b95b2e29a892231",
    measurementId: "G-DHXV7L8TM"
  };

  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  // Create global references
  window.auth = firebase.auth();
  window.db   = firebase.firestore();
</script>
