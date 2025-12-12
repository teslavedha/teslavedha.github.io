<!-- LOAD FIREBASE (COMPAT VERSION FOR EASY USE) -->
<script src="https://www.gstatic.com/firebasejs/10.7.0/firebase-app-compat.js"></script>
<script src="https://www.gstatic.com/firebasejs/10.7.0/firebase-auth-compat.js"></script>
<script src="https://www.gstatic.com/firebasejs/10.7.0/firebase-firestore-compat.js"></script>

<script>
// Your Firebase config
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

// Make auth & db available globally
window.auth = firebase.auth();
window.db   = firebase.firestore();

console.log("Firebase Loaded Successfully");
</script>
