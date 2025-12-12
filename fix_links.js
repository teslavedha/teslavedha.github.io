// fix_links.js
// Intercepts clicks on anchors and maps common wrong filenames to correct ones
// Prevents many 404s caused by hyphen/underscore/case mistakes
(function(){
  const mapping = {
    // wrong -> correct
    "admin_login.html": "admin-login.html",
    "admin-login.htm": "admin-login.html",
    "admin_login.htm": "admin-login.html",
    "teacher-login.html": "teacher_login.html",
    "teacher-login.htm": "teacher_login.html",
    "student_login.htm": "student_login.html",
    "student-login.html": "student_login.html",
    "videos.html": "subject_videos.html", // generic -> use subject_videos with query if needed
    "video.html": "subject_videos.html",
    "videos_list.html": "videos.html",
    "admin-panel.html": "admin_panel.html",
    "teacher-panel.html": "teacher_panel.html",
    "student-panel.html": "student_panel.html"
  };

  // helper to try HEAD fetch and fallback to mapping
  async function checkThenNavigate(href, ev){
    if(!href || href.startsWith('http') && !href.includes(location.hostname)) return true; // let external links through
    ev.preventDefault();

    // normalize relative path
    let p = href.split('#')[0].split('?')[0];
    // try HEAD
    try{
      const res = await fetch(p, { method: 'HEAD' });
      if(res.ok){
        location.href = href;
        return;
      }
    }catch(err){
      // ignore
    }

    // if HEAD failed, try mapping
    const key = p.split('/').pop();
    if(mapping[key]){
      const mapped = mapping[key];
      // if mapped to subject_videos.html but original had a subject query param, preserve subject
      const urlObj = new URL(href, location.href);
      const subject = urlObj.searchParams.get('subject') || urlObj.hash.replace('#','');
      let target = mapped;
      if(mapped === 'subject_videos.html' && subject) target = `${mapped}?subject=${encodeURIComponent(subject)}`;
      // attempt mapped location
      try{
        const res2 = await fetch(target, { method: 'HEAD' });
        if(res2.ok){ location.href = target; return; }
      }catch(e){}
    }

    // final: alert user with missing file info
    alert('Target page not found: ' + href + '\nPlease notify site admin to upload the missing file. (Filenames are case-sensitive)');
  }

  document.addEventListener('click', function(e){
    const a = e.target.closest('a');
    if(!a) return;
    const href = a.getAttribute('href');
    if(!href) return;
    // local navigation only
    if(href.startsWith('http') && !href.includes(location.hostname)) return;
    checkThenNavigate(href, e);
  }, true);
})();
