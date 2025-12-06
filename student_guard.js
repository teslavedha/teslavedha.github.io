<!-- student_guard.js -->
<script>
auth.onAuthStateChanged(user=>{
  if(!user){
    window.location.href="student_login.html";
  }
});
</script>
