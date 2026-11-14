/* Pewarnaan sintaks sederhana untuk bahasa C dan Python (tanpa library).
   Window.Highlight.html(kode, bahasa) -> string HTML yang sudah di-escape. */
(function () {
  var esc = function (s) { return s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;'); };
  var span = function (cls, html) { return '<span class="t-' + cls + '">' + html + '</span>'; };
  var set = function (s) { var o = {}; s.split(' ').forEach(function (w) { o[w] = 1; }); return o; };

  var C_KW = set('if else switch case default break continue return for while do goto sizeof typedef struct enum union static const extern void');
  var C_TY = set('int char float double long short signed unsigned bool size_t');
  var C_CN = set('true false NULL');
  var PY_KW = set('if elif else for while def class return import from as in not and or is pass break continue try except finally with lambda del global nonlocal raise yield assert');
  var PY_CN = set('True False None');

  var C_RE = /(\/\*[\s\S]*?\*\/|\/\/[^\n]*)|(^[ \t]*#[ \t]*include[ \t]*(?:<[^>\n]*>|"[^"\n]*")|^[ \t]*#[ \t]*\w+)|("(?:\\.|[^"\\\n])*"|'(?:\\.|[^'\\\n])*')|(\b0[xX][\da-fA-F]+\b|\b\d+(?:\.\d+)?(?:[eE][+-]?\d+)?[fFlLuU]*\b|\.\d+\b)|([A-Za-z_]\w*)/gm;
  var PY_RE = /(#[^\n]*)|(^[ \t]*(?:'''[\s\S]*?'''|"""[\s\S]*?"""))|([fFrRbB]{0,2}(?:'''[\s\S]*?'''|"""[\s\S]*?"""|"(?:\\.|[^"\\\n])*"|'(?:\\.|[^'\\\n])*'))|(\b\d+(?:\.\d+)?(?:[eE][+-]?\d+)?j?\b|\.\d+\b)|([A-Za-z_]\w*)/gm;

  /* Isi string: tandai escape sequence (\n, \t, ...) dan format specifier (%d, %s, ...) atau {variabel} pada f-string. */
  function stringHtml(raw, lang, isF) {
    var h = esc(raw);
    h = h.replace(/\\[ntr0abfv\\"']/g, function (m) { return span('esc', m); });
    if (lang === 'c') {
      h = h.replace(/%(?:[-+ 0#]*\d*(?:\.\d+)?(?:hh|h|ll|l|L|z)?[diuoxXfFeEgGcsp]|%)/g, function (m) { return span('esc', m); });
    } else if (isF) {
      h = h.replace(/\{[^{}\n]*\}/g, function (m) { return span('esc', m); });
    }
    return span('s', h);
  }

  function html(code, lang) {
    lang = (lang || '').toLowerCase();
    if (lang === 'py') lang = 'python';
    if (lang !== 'c' && lang !== 'python') return esc(code);
    var re = lang === 'c' ? C_RE : PY_RE;
    re.lastIndex = 0;
    var out = '', last = 0, m;
    while ((m = re.exec(code)) !== null) {
      out += esc(code.slice(last, m.index));
      last = re.lastIndex;
      var t = m[0];
      if (m[1] !== undefined) {
        out += span('cm', esc(t));
      } else if (m[2] !== undefined) {
        if (lang === 'c') {
          var inc = /^([ \t]*#[ \t]*include)([ \t]*)(<[^>\n]*>|"[^"\n]*")$/.exec(t);
          out += inc ? span('pp', esc(inc[1])) + inc[2] + span('s', esc(inc[3])) : span('pp', esc(t));
        } else {
          out += span('cm', esc(t));
        }
      } else if (m[3] !== undefined) {
        out += stringHtml(t, lang, lang === 'python' && /^[fF]/.test(t) || /^[rR][fF]|^[fF][rR]/.test(t));
      } else if (m[4] !== undefined) {
        out += span('n', esc(t));
      } else if (m[5] !== undefined) {
        var call = code.charAt(last) === '(';
        if (lang === 'c') {
          if (C_KW[t]) out += span('k', t);
          else if (C_TY[t]) out += span('ty', t);
          else if (C_CN[t]) out += span('cn', t);
          else if (call) out += span('fn', t);
          else out += t;
        } else {
          if (PY_KW[t]) out += span('k', t);
          else if (PY_CN[t]) out += span('cn', t);
          else if (call) out += span('fn', t);
          else out += t;
        }
      }
      if (m[0].length === 0) re.lastIndex++;
    }
    return out + esc(code.slice(last));
  }

  window.Highlight = { html: html };
})();
