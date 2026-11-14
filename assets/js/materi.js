/* Penyempurnaan isi materi di sisi browser.
   File .md tidak diubah: skrip ini hanya merapikan tampilannya
   (kotak penjelasan, tabel, blok kode, gambar, dan panel "Di halaman ini"). */
(function () {
  var article = document.getElementById('article');
  if (!article) return;

  var defaultLang = document.body.dataset.lang || '';
  var all = function (sel, root) { return Array.prototype.slice.call((root || article).querySelectorAll(sel)); };
  var esc = function (s) { return s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;'); };

  /* 1. Buang <style> sisipan dari file materi */
  all('style').forEach(function (n) { n.remove(); });

  /* 2. Paragraf pembuka di bawah judul */
  var h1 = article.querySelector('h1');
  if (h1 && h1.nextElementSibling && h1.nextElementSibling.tagName === 'BLOCKQUOTE') {
    h1.nextElementSibling.classList.add('lead');
  }

  /* 3. Kotak penjelasan: baca warna asli, lalu ganti dengan kelas semantik */
  var KIND = { '#218bff': 'note', '#8250df': 'ref', '#1a7f37': 'good', '#9a6700': 'warn' };
  all('div[style]').forEach(function (d) {
    var m = /border-left:\s*\d+px\s+solid\s+(#[0-9a-f]{6})/i.exec(d.getAttribute('style') || '');
    if (m) d.classList.add('callout', 'callout-' + (KIND[m[1].toLowerCase()] || 'note'));
  });
  all('[style]').forEach(function (el) { el.removeAttribute('style'); });

  /* 4. Tabel: bungkus agar bisa digeser, angka monospace, True/False jadi badge */
  all('table').forEach(function (t) {
    var wrap = document.createElement('div');
    wrap.className = 'table-wrap';
    t.parentNode.insertBefore(wrap, t);
    wrap.appendChild(t);
    all('th', t).forEach(function (th) { th.setAttribute('scope', 'col'); });
    all('td', t).forEach(function (td) {
      var txt = td.textContent.trim();
      if (/^(true|false)$/i.test(txt)) {
        td.innerHTML = '<span class="bool bool-' + txt.toLowerCase() + '">' + esc(txt) + '</span>';
      } else if (/^[-+]?\d[\d.,]*$/.test(txt)) {
        td.classList.add('num');
      }
    });
  });

  /* 5. Blok kode ala terminal */
  var PLAIN = { '': 1, plaintext: 1, text: 1, txt: 1, output: 1, console: 1 };
  var langOf = function (node) {
    var cls = node.className + ' ' + ((node.querySelector('code') || {}).className || '');
    var m = /language-([\w+-]+)/.exec(cls);
    return m ? m[1].toLowerCase() : '';
  };
  var labelOf = function (lang, code) {
    if (lang === 'c') return /\bint\s+main\s*\(/.test(code) ? 'main.c' : 'C';
    if (lang === 'python' || lang === 'py') return code.split('\n').length >= 8 ? 'main.py' : 'Python';
    return lang || 'Kode';
  };
  var copyText = function (text, done) {
    var fallback = function () {
      var ta = document.createElement('textarea');
      ta.value = text; ta.setAttribute('readonly', ''); ta.style.position = 'fixed'; ta.style.opacity = '0';
      document.body.appendChild(ta); ta.select();
      try { document.execCommand('copy'); } catch (e) {}
      document.body.removeChild(ta); done();
    };
    if (navigator.clipboard && window.isSecureContext) navigator.clipboard.writeText(text).then(done, fallback);
    else fallback();
  };

  var blocks = all('div.highlighter-rouge');
  all('pre').forEach(function (p) { if (!p.closest('div.highlighter-rouge')) blocks.push(p); });

  blocks.forEach(function (node) {
    var pre = node.tagName === 'PRE' ? node : node.querySelector('pre');
    if (!pre) return;
    var fenced = node.tagName !== 'PRE' || /language-/.test((pre.querySelector('code') || {}).className || '');
    var lang = langOf(node) || langOf(pre);
    var isOutput = fenced && (PLAIN[lang] === 1);
    if (!fenced) lang = defaultLang;
    var text = pre.textContent.replace(/\n$/, '');

    var fig = document.createElement('figure');
    fig.className = 'term';
    fig.dataset.kind = isOutput ? 'output' : 'code';
    fig.innerHTML =
      '<div class="term-bar">' +
      (isOutput ? '' : '<span class="term-dots" aria-hidden="true"><i></i><i></i><i></i></span>') +
      '<span class="term-name">' + esc(isOutput ? 'Output' : labelOf(lang, text)) + '</span>' +
      (isOutput ? '' : '<button type="button" class="term-copy" aria-label="Salin kode">Salin</button>') +
      '</div><pre tabindex="0"><code></code></pre>';
    var codeEl = fig.querySelector('code');
    if (isOutput) codeEl.textContent = text;
    else codeEl.innerHTML = window.Highlight ? window.Highlight.html(text, lang) : esc(text);

    var btn = fig.querySelector('.term-copy');
    if (btn) btn.addEventListener('click', function () {
      copyText(text, function () {
        btn.textContent = 'Tersalin'; btn.classList.add('is-done');
        setTimeout(function () { btn.textContent = 'Salin'; btn.classList.remove('is-done'); }, 1600);
      });
    });
    node.replaceWith(fig);
  });

  /* 6. Gambar: beri bingkai dan keterangan dari teks alt */
  all('img').forEach(function (img) {
    var fig = document.createElement('figure');
    fig.className = 'figure';
    var p = img.parentElement;
    if (p && p.tagName === 'P' && p.children.length === 1 && !p.textContent.trim()) p.replaceWith(fig);
    else img.replaceWith(fig);
    img.decoding = 'async';
    fig.appendChild(img);
    if (img.alt) { var cap = document.createElement('figcaption'); cap.textContent = img.alt; fig.appendChild(cap); }
  });

  /* 7. Judul bab: pastikan punya id, sembunyikan "Daftar Isi" bawaan bila panel kanan tampil */
  var slug = function (s) {
    return s.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '').replace(/[^\w\s-]/g, '').trim().replace(/\s+/g, '-');
  };
  var used = {};
  var heads = all('h2, h3').filter(function (h) { return !h.closest('.callout'); });
  heads.forEach(function (h) {
    if (!h.id) {
      var base = slug(h.textContent) || 'bagian', id = base, n = 2;
      while (used[id] || document.getElementById(id)) id = base + '-' + n++;
      h.id = id;
    }
    used[h.id] = 1;
  });
  heads.forEach(function (h) {
    if (!/^daftar isi$/i.test(h.textContent.trim())) return;
    h.classList.add('toc-inline');
    var list = h.nextElementSibling;
    if (list && /^(OL|UL)$/.test(list.tagName)) {
      list.classList.add('toc-inline');
      var hr = list.nextElementSibling;
      if (hr && hr.tagName === 'HR') hr.classList.add('toc-inline');
    }
  });

  /* 8. Panel "Di halaman ini" + penanda bab aktif */
  var toc = document.getElementById('toc');
  var tocHeads = heads.filter(function (h) { return !h.classList.contains('toc-inline'); });
  if (!toc) return;
  if (tocHeads.length < 2) { toc.parentElement.style.display = 'none'; return; }

  toc.innerHTML = '<p class="toc-title">Di halaman ini</p><ol class="toc-list"></ol>';
  var list = toc.querySelector('ol');
  var links = {}, group = null;
  tocHeads.forEach(function (h) {
    var a = document.createElement('a');
    a.href = '#' + h.id; a.textContent = h.textContent.trim();
    var li = document.createElement('li');
    li.appendChild(a);
    links[h.id] = { a: a, li: li, level: h.tagName === 'H2' ? 2 : 3, parent: null };
    if (h.tagName === 'H2' || !group) { list.appendChild(li); group = li; links[h.id].parent = null; links[h.id].self = li; }
    else {
      var sub = group.querySelector('ul');
      if (!sub) { sub = document.createElement('ul'); sub.className = 'toc-sub'; group.appendChild(sub); }
      sub.appendChild(li); links[h.id].parent = group;
    }
  });

  var active = null, ticking = false;
  var update = function () {
    ticking = false;
    var current = tocHeads[0];
    tocHeads.forEach(function (h) { if (h.getBoundingClientRect().top <= 120) current = h; });
    if (window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 4) current = tocHeads[tocHeads.length - 1];
    if (current.id === active) return;
    active = current.id;
    Object.keys(links).forEach(function (id) {
      links[id].a.classList.toggle('is-active', id === active);
      links[id].li.classList.remove('is-open');
    });
    var info = links[active];
    (info.parent || info.li).classList.add('is-open');
  };
  window.addEventListener('scroll', function () { if (!ticking) { ticking = true; requestAnimationFrame(update); } }, { passive: true });
  window.addEventListener('resize', update);
  window.addEventListener('load', function () { active = null; update(); });
  update();
})();
