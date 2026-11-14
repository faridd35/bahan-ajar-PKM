(function () {
  /* Pewarnaan contoh kode di bagian atas beranda */
  document.querySelectorAll('code[data-lang]').forEach(function (el) {
    if (window.Highlight) el.innerHTML = window.Highlight.html(el.textContent, el.dataset.lang);
  });

  var q = document.getElementById('q');
  var sections = Array.prototype.slice.call(document.querySelectorAll('[data-section]'));
  var buttons = Array.prototype.slice.call(document.querySelectorAll('[data-filter]'));
  var empty = document.getElementById('empty');
  var emptyTerm = document.getElementById('empty-term');
  var status = document.getElementById('status');
  var filter = 'all';

  var ON = ['bg-slate-900', 'text-white'];
  var OFF = ['text-slate-600', 'hover:bg-white', 'hover:text-slate-900'];

  function apply() {
    var term = q.value.trim().toLowerCase();
    var total = 0;
    sections.forEach(function (sec) {
      var visibleSection = filter === 'all' || filter === sec.dataset.section;
      var n = 0;
      sec.querySelectorAll('[data-row]').forEach(function (row) {
        var ok = visibleSection && (!term || row.dataset.search.indexOf(term) !== -1);
        row.hidden = !ok;
        if (ok) n++;
      });
      sec.hidden = n === 0;
      total += n;
    });
    empty.hidden = total > 0;
    emptyTerm.textContent = q.value.trim();
    status.textContent = total + ' materi ditampilkan';
    buttons.forEach(function (b) {
      var on = b.dataset.filter === filter;
      b.setAttribute('aria-pressed', on ? 'true' : 'false');
      ON.forEach(function (c) { b.classList.toggle(c, on); });
      OFF.forEach(function (c) { b.classList.toggle(c, !on); });
    });
  }

  buttons.forEach(function (b) {
    b.addEventListener('click', function () { filter = b.dataset.filter; apply(); });
  });
  q.addEventListener('input', apply);
  document.getElementById('reset').addEventListener('click', function () {
    q.value = ''; filter = 'all'; apply(); q.focus();
  });
})();
