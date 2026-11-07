/* Shared behaviour for index.html and projects.html:
   theme toggle, phone menu, reveal-on-scroll and the glass sheen that follows the pointer.
   Load at the end of <body>, after each page's own script has built its content. */
(function () {
  var root = document.documentElement;
  var reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* ---------- theme toggle ---------- */
  var themeBtn = document.getElementById('theme-btn');
  function currentTheme() {
    var set = root.getAttribute('data-theme');
    if (set) return set;
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  }
  function paintThemeBtn() {
    if (!themeBtn) return;
    var dark = currentTheme() === 'dark';
    themeBtn.setAttribute('aria-pressed', String(dark));
    themeBtn.setAttribute('aria-label', dark ? 'Switch to light mode' : 'Switch to dark mode');
    var meta = document.querySelector('meta[name="theme-color"]');
    if (meta) meta.setAttribute('content', dark ? '#0D1318' : '#EEF1F3');
  }
  if (themeBtn) {
    themeBtn.addEventListener('click', function () {
      var next = currentTheme() === 'dark' ? 'light' : 'dark';
      root.setAttribute('data-theme', next);
      try { localStorage.setItem('theme', next); } catch (e) {}
      paintThemeBtn();
    });
    paintThemeBtn();
  }

  /* ---------- phone menu ---------- */
  var bar = document.getElementById('topbar');
  var menuBtn = document.getElementById('menu-btn');
  var nav = bar && bar.querySelector('.nav');
  if (menuBtn && nav) {
    if (!nav.id) nav.id = 'site-nav';
    menuBtn.setAttribute('aria-controls', nav.id);
    var setOpen = function (open) {
      bar.classList.toggle('open', open);
      menuBtn.setAttribute('aria-expanded', String(open));
    };
    menuBtn.addEventListener('click', function () { setOpen(!bar.classList.contains('open')); });
    nav.addEventListener('click', function (e) { if (e.target.closest('a')) setOpen(false); });
    document.addEventListener('keydown', function (e) { if (e.key === 'Escape') setOpen(false); });
    document.addEventListener('click', function (e) { if (!bar.contains(e.target)) setOpen(false); });
  }

  /* ---------- reveal on scroll ---------- */
  var targets = document.querySelectorAll('.sec-head, .g-head, .feature, .proj, .earlier li, .all-projects, .job, .term, .unit, .school, .card, .practice li, .stats > div');
  if (!reduce && 'IntersectionObserver' in window) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (!e.isIntersecting) return;
        var el = e.target;
        io.unobserve(el);
        el.classList.add('in');
        /* drop the reveal classes once done, so hover transitions are the card's own again */
        setTimeout(function () { el.classList.remove('reveal', 'in'); el.style.transitionDelay = ''; }, 900);
      });
    }, { rootMargin: '0px 0px -8% 0px' });
    var vh = window.innerHeight;
    targets.forEach(function (el) {
      if (el.getBoundingClientRect().top < vh * 0.92) return; /* already on screen: leave it be */
      /* stagger siblings in the same grid row a little */
      var i = Array.prototype.indexOf.call(el.parentNode.children, el) % 3;
      el.style.transitionDelay = (i * 70) + 'ms';
      el.classList.add('reveal');
      io.observe(el);
    });
  }

  /* ---------- glass sheen that follows the pointer ---------- */
  if (!reduce && window.matchMedia('(hover: hover) and (pointer: fine)').matches) {
    document.addEventListener('pointermove', function (e) {
      var el = e.target.closest && e.target.closest('.feature, .proj, .card, .unit, .school, .jobs, .stats > div');
      if (!el) return;
      var r = el.getBoundingClientRect();
      el.style.setProperty('--mx', (e.clientX - r.left) + 'px');
      el.style.setProperty('--my', (e.clientY - r.top) + 'px');
    }, { passive: true });
  }
})();
