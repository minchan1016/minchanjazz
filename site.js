/* minchanjazz.com — shared behaviour: language switch, rendering of content.js, forms, floating contact. */
(function () {
  var C = window.CONTENT || {};
  var KO = window.KO || {};
  var STR = {
    en: { copied: 'Copied', select: 'Select and copy', soon: 'Link coming soon', badEmail: 'Please enter an email address', needName: 'Add your name and a valid email so I can reply.', done: 'Your message is copied. If your email app did not open, paste it in a new email to ', subjNotify: 'Show announcements', bodyNotify: 'Hi Minchan, please add me to your show announcements. ', soonTag: 'Link soon' },
    ko: { copied: '복사했습니다', select: '선택해서 복사하세요', soon: '링크 준비 중', badEmail: '이메일 주소를 입력해 주세요', needName: '답장을 드릴 수 있도록 이름과 이메일을 적어 주세요.', done: '메시지를 복사했습니다. 메일 앱이 열리지 않았다면 새 메일에 붙여 넣어 보내 주세요: ', subjNotify: '공연 소식 받기', bodyNotify: '민찬님, 공연 소식을 받아 보고 싶습니다. ', soonTag: '링크 준비 중' }
  };
  var lang = 'en';
  function t(o) { return o == null ? '' : (typeof o === 'string' ? o : (o[lang] != null ? o[lang] : o.en)); }
  function esc(s) { return String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;'); }

  /* ---------- i18n: English lives in the HTML, Korean in window.KO ---------- */
  var EN = {}, ENPH = {};
  document.querySelectorAll('[data-i]').forEach(function (el) { EN[el.getAttribute('data-i')] = el.innerHTML; });
  document.querySelectorAll('[data-i-ph]').forEach(function (el) { ENPH[el.getAttribute('data-i-ph')] = el.placeholder; });
  function applyStatic() {
    document.querySelectorAll('[data-i]').forEach(function (el) {
      var k = el.getAttribute('data-i'); var v = lang === 'ko' ? KO[k] : EN[k];
      if (v !== undefined && el.innerHTML !== v) el.innerHTML = v;
    });
    document.querySelectorAll('[data-i-ph]').forEach(function (el) {
      var k = el.getAttribute('data-i-ph'); var v = lang === 'ko' ? KO[k] : ENPH[k]; if (v !== undefined) el.placeholder = v;
    });
  }
  function pageLink(href) { return lang === 'ko' && href.indexOf('#') < 0 ? href + '#ko' : href; }
  function applyLinks() {
    document.querySelectorAll('a.cal').forEach(function (a) { a.href = C.cal || '#'; });
    document.querySelectorAll('a[data-page]').forEach(function (a) { a.href = pageLink(a.getAttribute('data-page')); });
  }

  /* ---------- renderers (content.js) ---------- */
  var PLAY = '<span class="play"><svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11-7z"/></svg></span>';
  function renderShows() {
    var box = document.getElementById('showsList'); if (!box || !C.shows) return;
    box.innerHTML = C.shows.map(function (s) {
      var day = lang === 'ko' && s.dayKo ? s.dayKo : s.day;
      var chips = (s.chips || []).map(function (c) { return '<span class="chip' + (c.hot ? ' hot' : '') + '">' + esc(t(c)) + '</span>'; }).join('');
      var ext = s.link && s.link.charAt(0) !== '#';
      return '<div class="show"><div class="date">' + esc(day) + '<small>' + esc(t(s.when)) + '</small></div>' +
        '<div><h3>' + esc(t(s.title)) + '</h3><p>' + esc(t(s.desc)) + '</p><div class="pillrow">' + chips + '</div></div>' +
        '<div class="act"><a class="btn' + (s.ghost ? '' : ' solid') + '" href="' + esc(s.link || '#') + '"' + (ext ? ' target="_blank" rel="noopener"' : '') + '>' + esc(t(s.linkLabel)) + '</a></div></div>';
    }).join('');
  }
  function renderPast() {
    var box = document.getElementById('pastList'); if (!box || !C.past) return;
    box.innerHTML = C.past.map(function (p) { return '<li>' + esc(t(p)) + '</li>'; }).join('');
  }
  function renderVideos(all) {
    var box = document.getElementById(all ? 'videoArchive' : 'videoList'); if (!box || !C.videos) return;
    var list = all ? C.videos : C.videos.filter(function (v) { return v.featured; }).slice(0, 3);
    box.innerHTML = list.map(function (v) {
      var url = v.url || (v.id ? 'https://www.youtube.com/watch?v=' + v.id : '');
      var thumb = v.thumb || (v.id ? 'https://i.ytimg.com/vi/' + v.id + '/hqdefault.jpg' : '');
      var has = !!url;
      return '<a class="vid" href="' + (has ? esc(url) : '#') + '"' + (has ? ' target="_blank" rel="noopener"' : ' data-placeholder="1"') + '>' +
        '<div class="thumb grain ' + (v.grad || 'g1') + '">' + (thumb ? '<img src="' + esc(thumb) + '" alt="" loading="lazy" onerror="this.remove()">' : '') + PLAY + '</div>' +
        '<div><h3>' + esc(t(v.title)) + '</h3><p>' + esc(t(v.desc)) + '</p>' + (all ? '<p class="meta">' + esc(v.year || '') + (has ? '' : (v.year ? ' · ' : '') + STR[lang].soonTag) + '</p>' : '') + '</div></a>';
    }).join('');
  }
  function renderPress() {
    var box = document.getElementById('pressList'); if (!box || !C.press) return;
    box.innerHTML = C.press.map(function (p) {
      return '<a class="pressitem" href="' + esc(p.url) + '" target="_blank" rel="noopener"><div class="y">' + esc(p.year) + '</div><div><h3>' + esc(t(p.title)) + '</h3><p>' + esc(t(p.outlet)) + '</p></div><span class="btn">↗</span></a>';
    }).join('');
  }
  function renderWorks() {
    var box = document.getElementById('worksList'); if (!box || !C.works) return;
    box.innerHTML = C.works.map(function (w) {
      return '<div class="work"><div class="swatch" style="background:' + w.swatch + '"></div><p class="eyebrow">' + esc(t(w.eyebrow)) + '</p><h3>' + t(w.title) + '</h3><p>' + esc(t(w.desc)) + '</p>' +
        '<a class="btn" href="' + esc(w.link) + '"' + (w.external ? ' target="_blank" rel="noopener"' : '') + '>' + esc(t(w.btn)) + '</a></div>';
    }).join('');
  }
  function renderPhotos() {
    var box = document.getElementById('photoGrid'); if (!box || !C.photos) return;
    box.innerHTML = C.photos.map(function (p) {
      return '<figure class="' + (p.wide ? 'wide' : '') + '"><img src="' + esc(p.src) + '" alt="' + esc(p.alt) + '" loading="lazy">' + (p.credit ? '<figcaption>© ' + esc(p.credit) + '</figcaption>' : '') + '</figure>';
    }).join('');
  }
  var STATUS = { endorsed: { en: 'Endorsing', ko: '공식 파트너' }, using: { en: 'What I use', ko: '쓰고 있는 것' }, recommend: { en: 'I recommend', ko: '추천' } };
  function renderPartners() {
    var box = document.getElementById('partnerList'); if (!box || !C.partners) return;
    box.innerHTML = C.partners.map(function (p, i) {
      var st = STATUS[p.status] || STATUS.using;
      var btns = '';
      if (p.link) btns += '<a class="btn solid" href="' + esc(p.link) + '" target="_blank" rel="noopener">' + (lang === 'ko' ? '사이트 보기' : 'Visit') + ' ↗</a>';
      if (p.code) btns += '<button class="copy big" type="button" data-copy="' + esc(p.code) + '">' + (lang === 'ko' ? '코드 복사: ' : 'Copy code: ') + esc(p.code) + '</button>';
      return '<article class="partner"><div class="ptop"><span class="chip ' + (p.status === 'endorsed' ? 'hot' : '') + '">' + esc(t(st)) + '</span><span class="since">' + (lang === 'ko' ? p.since + '년부터' : 'since ' + p.since) + '</span></div>' +
        '<p class="eyebrow">' + esc(t(p.cat)) + '</p><h3>' + esc(t(p.name)) + '</h3><p class="what">' + esc(t(p.what)) + '</p>' +
        '<p class="whylbl">' + (lang === 'ko' ? '왜 쓰는가' : 'Why I use it') + '</p><p class="why">' + esc(t(p.why)) + '</p>' +
        (btns ? '<div class="pbtns">' + btns + '</div>' : '') + '</article>';
    }).join('');
  }
  function renderContacts() {
    document.querySelectorAll('[data-email]').forEach(function (el) { el.textContent = C.email; el.setAttribute('data-copy', C.email); });
    document.querySelectorAll('a[data-mail]').forEach(function (a) { a.href = 'mailto:' + C.email; a.textContent = C.email; });
    document.querySelectorAll('a[data-ig]').forEach(function (a) { a.href = C.instagram; });
    document.querySelectorAll('[data-handle]').forEach(function (el) { el.textContent = C.handle; el.setAttribute('data-copy', C.handle); });
  }
  function renderAll() { renderShows(); renderPast(); renderVideos(false); renderVideos(true); renderPress(); renderWorks(); renderPhotos(); renderPartners(); renderContacts(); bindPlaceholders(); }

  function setLang(l, persist) {
    lang = l === 'ko' ? 'ko' : 'en';
    applyStatic(); renderAll(); applyLinks();
    document.body.classList.toggle('ko', lang === 'ko');
    document.documentElement.lang = lang;
    document.querySelectorAll('.lang button').forEach(function (b) { b.classList.toggle('on', b.getAttribute('data-lang') === lang); });
    if (persist) { try { localStorage.setItem('mk-lang', lang); } catch (e) {} }
  }
  document.querySelectorAll('.lang button').forEach(function (b) { b.addEventListener('click', function () { setLang(b.getAttribute('data-lang'), true); }); });

  /* ---------- helpers ---------- */
  function toast(msg) { var x = document.createElement('div'); x.className = 'toast'; x.textContent = msg; document.body.appendChild(x); setTimeout(function () { x.remove(); }, 2200); }
  function copyText(text, el) {
    function fallback() { try { var r = document.createRange(); r.selectNodeContents(el || document.body); var s = window.getSelection(); s.removeAllRanges(); s.addRange(r); toast(STR[lang].select); } catch (e) {} }
    if (navigator.clipboard && navigator.clipboard.writeText) { navigator.clipboard.writeText(text).then(function () { toast(STR[lang].copied); }).catch(fallback); } else { fallback(); }
  }
  function bindPlaceholders() {
    document.querySelectorAll('[data-placeholder]').forEach(function (a) { if (a.__b) return; a.__b = true; a.addEventListener('click', function (e) { e.preventDefault(); toast(STR[lang].soon); }); });
    document.querySelectorAll('.copy').forEach(function (b) { if (b.__b) return; b.__b = true; b.addEventListener('click', function () { copyText(b.getAttribute('data-copy'), b.previousElementSibling); }); });
  }
  document.querySelectorAll('[data-prefill]').forEach(function (a) { a.addEventListener('click', function () { var sel = document.getElementById('cType'); if (sel) sel.value = a.getAttribute('data-prefill'); }); });

  /* ---------- menu ---------- */
  var menuBtn = document.getElementById('menuBtn'), links = document.getElementById('links');
  if (menuBtn && links) {
    menuBtn.addEventListener('click', function () { var open = links.classList.toggle('open'); menuBtn.setAttribute('aria-expanded', open ? 'true' : 'false'); });
    links.addEventListener('click', function (e) { if (e.target.tagName === 'A') { links.classList.remove('open'); menuBtn.setAttribute('aria-expanded', 'false'); } });
  }

  /* ---------- forms (no backend yet: prepare an email) ---------- */
  var nf = document.getElementById('notifyForm');
  if (nf) nf.addEventListener('submit', function (e) {
    e.preventDefault();
    var email = document.getElementById('notifyEmail').value.trim();
    if (!email || email.indexOf('@') < 0) { toast(STR[lang].badEmail); return; }
    var body = STR[lang].bodyNotify + email; copyText(body, null);
    window.location.href = 'mailto:' + C.email + '?subject=' + encodeURIComponent(STR[lang].subjNotify) + '&body=' + encodeURIComponent(body);
  });
  var cf = document.getElementById('contactForm'), status = document.getElementById('formStatus');
  if (cf) cf.addEventListener('submit', function (e) {
    e.preventDefault();
    var name = document.getElementById('cName').value.trim(), email = document.getElementById('cEmail').value.trim();
    var sel = document.getElementById('cType'), type = sel.options[sel.selectedIndex].text;
    var when = document.getElementById('cWhen').value.trim(), msg = document.getElementById('cMsg').value.trim();
    if (!name || !email || email.indexOf('@') < 0) { status.textContent = STR[lang].needName; return; }
    var subject = type + ' · ' + name;
    var body = (lang === 'ko' ? '민찬님, 안녕하세요.\n\n' : 'Hi Minchan,\n\n') + (msg || '-') + '\n\n' + (lang === 'ko' ? '문의: ' : 'About: ') + type + (when ? '\n' + (lang === 'ko' ? '시기: ' : 'When: ') + when : '') + '\n' + (lang === 'ko' ? '보낸 사람: ' : 'From: ') + name + ' <' + email + '>';
    copyText(body, null);
    status.innerHTML = STR[lang].done + '<a href="mailto:' + C.email + '">' + C.email + '</a>';
    window.location.href = 'mailto:' + C.email + '?subject=' + encodeURIComponent(subject) + '&body=' + encodeURIComponent(body);
  });

  /* ---------- floating contact: appears after the hero, hides over the contact section ---------- */
  var fab = document.getElementById('fab');
  if (fab) {
    var hero = document.querySelector('.hero') || document.querySelector('.pagehead');
    var contact = document.getElementById('contact') || document.getElementById('areyou');
    var pastHero = false, overContact = false;
    function update() { fab.classList.toggle('show', pastHero && !overContact); }
    if ('IntersectionObserver' in window) {
      if (hero) new IntersectionObserver(function (es) { pastHero = !es[0].isIntersecting && es[0].boundingClientRect.top < 0; update(); }, { threshold: 0 }).observe(hero);
      if (contact) new IntersectionObserver(function (es) { overContact = es[0].isIntersecting; update(); }, { threshold: 0.15 }).observe(contact);
    } else { pastHero = true; update(); }
  }

  /* ---------- start ---------- */
  (function init() {
    var l = null;
    if (location.hash === '#ko') l = 'ko'; else if (location.hash === '#en') l = 'en';
    if (!l) { try { l = localStorage.getItem('mk-lang'); } catch (e) {} }
    if (!l && /^ko\b/i.test(navigator.language || '')) l = 'ko';
    setLang(l === 'ko' ? 'ko' : 'en', false);
  })();
})();
