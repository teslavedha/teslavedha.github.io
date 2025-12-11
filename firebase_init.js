<!-- Firebase App (Core) -->
<script src="https://www.gstatic.com/firebasejs/10.7.0/firebase-app-compat.js"></script>

<!-- Firebase Auth -->
<script src="https://www.gstatic.com/firebasejs/10.7.0/firebase-auth-compat.js"></script>

<!-- Firestore DB -->
<script src="https://www.gstatic.com/firebasejs/10.7.0/firebase-firestore-compat.js"></script>

<!-- Storage (for PDFs + Videos links) -->
<script src="https://www.gstatic.com/firebasejs/10.7.0/firebase-storage-compat.js"></script>

<script>
const firebaseConfig = {
    apiKey: "AIZaSyAF61w_VOJQiYICXQ8RxuEp4bDRzZPQuk",
    authDomain: "teslavedha-58fd3.firebaseapp.com",
    projectId: "teslavedha-58fd3",
    storageBucket: "teslavedha-58fd3.appspot.com",
    messagingSenderId: "647191590052",
    appId: "1:647191590052:web:f9c569b95b2e29a892231",
    measurementId: "G-DHXV7L8TM"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Firebase services
const auth = firebase.auth();
const db = firebase.firestore();
const storage = firebase.storage();
</script>
