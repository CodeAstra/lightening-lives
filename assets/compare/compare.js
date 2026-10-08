/* Lightening Lives: design comparison toolbar
 *
 * Each design page loads this with one <script> tag in its <head>. At launch, delete that
 * tag from the chosen design and remove this folder; nothing else depends on it.
 *
 * The bar lets a reviewer switch between the two designs and try a small set of type and
 * colour variations. Every variation works by overriding the design's own CSS custom
 * properties on <html>. "As designed" sets nothing at all.
 *
 * Choices are remembered per design (localStorage) and mirrored in the URL so a link can be shared.
 */
(function () {
  'use strict';

  var root = document.documentElement;
  var designId = root.getAttribute('data-design');

  // Quicksand + Nunito and Familjen Grotesk are the two type systems named in the design directions.
  var FONTS_DAYLIGHT = 'family=Quicksand:wght@500;600;700&family=Nunito:wght@400;600;700';
  var FONTS_SAMPLE_CARD = 'family=Familjen+Grotesk:wght@400;500;600;700';

  var DESIGNS = {
    'sample-card': {
      label: '01 · Sample Card',
      file: 'sample-card.html',
      controls: [
        {
          key: 'type',
          label: 'Typography',
          kind: 'select',
          options: [
            { id: 'designed', label: 'Familjen Grotesk + Martian Mono (as designed)' },
            {
              id: 'daylight',
              label: 'Quicksand + Nunito (from Daylight)',
              fonts: FONTS_DAYLIGHT,
              vars: { '--ff-display': '"Quicksand"', '--ff-sans': '"Nunito"', '--display-weight': '700' },
            },
          ],
        },
        {
          key: 'bg',
          label: 'Background',
          kind: 'swatch',
          options: [
            { id: 'designed', label: 'Card white (as designed)', swatch: '#FFFEFA' },
            { id: 'cream', label: 'Daylight cream', swatch: '#FFFCF5', vars: { '--card': '#FFFCF5', '--shade': '#FBF5E6' } },
            { id: 'butter', label: 'Butter', swatch: '#FFF8DC', vars: { '--card': '#FFF8DC', '--shade': '#FFF0BC' } },
          ],
        },
        {
          key: 'accent',
          label: 'Ink',
          kind: 'swatch',
          options: [
            { id: 'designed', label: 'Leaf green (as designed)', swatch: '#2E6B3F' },
            { id: 'rust', label: 'Rust, from Daylight', swatch: '#B5470A', vars: { '--green': '#B5470A', '--green-deep': '#933908' } },
            { id: 'maroon', label: 'Maroon, from the logo', swatch: '#7A1E26', vars: { '--green': '#7A1E26', '--green-deep': '#5E171D' } },
          ],
        },
      ],
    },
    daylight: {
      label: '02 · Daylight',
      file: 'daylight.html',
      controls: [
        {
          key: 'type',
          label: 'Typography',
          kind: 'select',
          options: [
            { id: 'designed', label: 'Quicksand + Nunito (as designed)' },
            {
              id: 'sample-card',
              label: 'Familjen Grotesk (from Sample Card)',
              fonts: FONTS_SAMPLE_CARD,
              vars: { '--ff-display': '"Familjen Grotesk"', '--ff-body': '"Familjen Grotesk"', '--display-weight': '600' },
            },
          ],
        },
        {
          key: 'bg',
          label: 'Background',
          kind: 'swatch',
          options: [
            { id: 'designed', label: 'Daylight cream (as designed)', swatch: '#FFFCF5' },
            { id: 'card', label: 'Card white, from Sample Card', swatch: '#FFFEFA', vars: { '--bg': '#FFFEFA', '--sand': '#F1EFE6' } },
            { id: 'butter', label: 'Butter', swatch: '#FFF8DC', vars: { '--bg': '#FFF8DC', '--surface': '#FFFDF6', '--sand': '#FFF0BC' } },
          ],
        },
        {
          key: 'accent',
          label: 'Accent',
          kind: 'swatch',
          options: [
            { id: 'designed', label: 'Sun orange (as designed)', swatch: '#F28C1B' },
            {
              id: 'green',
              label: 'Leaf green, from Sample Card',
              swatch: '#2E6B3F',
              vars: { '--accent': '#2E6B3F', '--accent-hover': '#24552F', '--on-accent': '#FFFEFA', '--rust': '#2E6B3F' },
            },
            {
              id: 'maroon',
              label: 'Maroon, from the logo',
              swatch: '#7A1E26',
              vars: { '--accent': '#7A1E26', '--accent-hover': '#5E171D', '--on-accent': '#FFFCF5', '--rust': '#7A1E26' },
            },
          ],
        },
      ],
    },
  };

  var config = DESIGNS[designId];
  if (!config) return;

  // ---- State: defaults <- saved choices <- URL ----------------------------------------
  var STORE = 'll-compare/';
  var storage = {
    get: function (key) { try { return window.localStorage.getItem(STORE + key); } catch (error) { return null; } },
    set: function (key, value) { try { window.localStorage.setItem(STORE + key, value); } catch (error) { /* private mode or file:// */ } },
  };

  var state = {};
  var saved = {};
  try { saved = JSON.parse(storage.get(designId) || '{}') || {}; } catch (error) { saved = {}; }
  var params = new URLSearchParams(window.location.search);

  function findOption(control, id) {
    for (var i = 0; i < control.options.length; i += 1) if (control.options[i].id === id) return control.options[i];
    return null;
  }
  config.controls.forEach(function (control) {
    var fromUrl = findOption(control, params.get(control.key));
    var fromStore = findOption(control, saved[control.key]);
    state[control.key] = (fromUrl || fromStore || control.options[0]).id;
  });
  storage.set('last', designId);

  // ---- Applying a set of choices ------------------------------------------------------
  var applied = [];
  var loadedFonts = {};

  function loadFonts(query) {
    if (loadedFonts[query]) return;
    loadedFonts[query] = true;
    var link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = 'https://fonts.googleapis.com/css2?' + query + '&display=swap';
    document.head.appendChild(link);
  }

  function apply() {
    applied.forEach(function (name) { root.style.removeProperty(name); });
    applied = [];
    var themeColor = null;
    config.controls.forEach(function (control) {
      var option = findOption(control, state[control.key]) || control.options[0];
      if (option.fonts) loadFonts(option.fonts);
      if (control.key === 'bg') themeColor = option.swatch;
      Object.keys(option.vars || {}).forEach(function (name) {
        root.style.setProperty(name, option.vars[name]);
        applied.push(name);
      });
    });
    var meta = document.querySelector('meta[name="theme-color"]');
    if (meta && themeColor) meta.setAttribute('content', themeColor);
    document.dispatchEvent(new CustomEvent('ll:theme', { detail: Object.assign({ design: designId }, state) }));
  }

  function persist() {
    storage.set(designId, JSON.stringify(state));
    var next = new URLSearchParams();
    config.controls.forEach(function (control) {
      if (state[control.key] !== control.options[0].id) next.set(control.key, state[control.key]);
    });
    var query = next.toString();
    try {
      window.history.replaceState(null, '', window.location.pathname + (query ? '?' + query : '') + window.location.hash);
    } catch (error) { /* file:// in some browsers */ }
  }

  // Apply before first paint so a saved variation never flashes the default.
  apply();

  // ---- The bar ------------------------------------------------------------------------
  var CSS = [
    ':host{all:initial;display:block;position:sticky;top:0;z-index:2147483000;color-scheme:dark}',
    '*{box-sizing:border-box}',
    '.bar{position:relative;display:flex;align-items:center;gap:18px;min-height:52px;padding:8px 16px;background:#16181B;color:#ECEAE4;border-bottom:1px solid #000;font:500 13px/1.25 system-ui,-apple-system,"Segoe UI",Roboto,sans-serif;-webkit-font-smoothing:antialiased}',
    '.brand{flex:none;font-weight:600;letter-spacing:.01em;white-space:nowrap}',
    '.brand span{font-weight:500;color:#9A9FA6;margin-left:6px}',
    '.rule{flex:none;width:1px;height:24px;background:#34383E}',
    '.field{display:flex;flex:none;align-items:center;gap:8px;margin:0;padding:0;border:0}',
    '.field.fluid{flex:0 1 auto;min-width:0}',
    '.name{flex:none;color:#9A9FA6;white-space:nowrap}',
    'select{appearance:none;-webkit-appearance:none;min-width:0;max-width:100%;height:34px;padding:0 30px 0 10px;border:1px solid #3A3F46;border-radius:7px;background:#24272C url("data:image/svg+xml,%3Csvg xmlns=%27http://www.w3.org/2000/svg%27 width=%2710%27 height=%276%27 viewBox=%270 0 10 6%27 fill=%27none%27 stroke=%27%23ECEAE4%27 stroke-width=%271.6%27%3E%3Cpath d=%27M1 1l4 4 4-4%27/%3E%3C/svg%3E") no-repeat right 10px center;color:inherit;font:inherit;cursor:pointer;text-overflow:ellipsis}',
    'select:hover{border-color:#5A6068}',
    '.design select{font-weight:600;min-width:172px}',
    '.fluid select{width:244px}',
    '.swatches{display:flex;align-items:center;gap:6px}',
    '.swatches label{position:relative;display:block;width:28px;height:28px;cursor:pointer}',
    '.swatches input{position:absolute;inset:0;width:100%;height:100%;margin:0;opacity:0;cursor:pointer}',
    '.swatches i{position:absolute;inset:4px;border-radius:50%;background:var(--c);box-shadow:0 0 0 1px rgba(255,255,255,.28)}',
    '.swatches input:checked+i{box-shadow:0 0 0 2px #16181B,0 0 0 4px #ECEAE4}',
    '.swatches input:focus-visible+i{outline:2px solid #7FB2FF;outline-offset:5px}',
    'button{height:34px;padding:0 12px;border:1px solid #3A3F46;border-radius:7px;background:transparent;color:inherit;font:inherit;white-space:nowrap;cursor:pointer}',
    'button:hover{border-color:#5A6068;background:#24272C}',
    'select:focus-visible,button:focus-visible{outline:2px solid #7FB2FF;outline-offset:2px}',
    '.more{display:flex;align-items:center;gap:16px;flex:1;min-width:0}',
    '.actions{display:flex;align-items:center;gap:8px;margin-left:auto}',
    '.toggle{display:none}',
    '.reopen{position:fixed;left:12px;bottom:12px;height:36px;padding:0 14px;border:1px solid #000;border-radius:999px;background:#16181B;color:#ECEAE4;font:600 13px/1 system-ui,-apple-system,"Segoe UI",Roboto,sans-serif;box-shadow:0 4px 14px rgba(0,0,0,.28)}',
    '.sr{position:absolute;width:1px;height:1px;overflow:hidden;clip-path:inset(50%);white-space:nowrap}',
    '[hidden]{display:none!important}',
    '@media (max-width:1519px){',
    '.brand span{display:none}',
    '}',
    '@media (max-width:1299px){',
    '.brand,.rule{display:none}',
    '}',
    '@media (max-width:1139px){',
    '.brand,.rule{display:none}',
    '.bar{gap:8px;padding:8px 12px}',
    '.design{flex:1;min-width:0}.design select{flex:1;min-width:0;width:100%}',
    '.toggle{display:block}',
    '.more{position:absolute;left:0;right:0;top:100%;display:none;flex-direction:column;align-items:stretch;gap:14px;padding:16px;background:#16181B;border-bottom:1px solid #000;box-shadow:0 14px 28px rgba(0,0,0,.3)}',
    '.more.open{display:flex}',
    '.more .field{justify-content:space-between}',
    '.more .fluid{flex:none}','.more select{flex:1;width:auto;max-width:340px}',
    '.actions{margin-left:0}.actions button{flex:1}',
    '}',
  ].join('');

  function element(tag, attributes, children) {
    var node = document.createElement(tag);
    Object.keys(attributes || {}).forEach(function (key) {
      if (key === 'text') node.textContent = attributes[key];
      else node.setAttribute(key, attributes[key]);
    });
    (children || []).forEach(function (child) { node.appendChild(child); });
    return node;
  }

  function build() {
    var host = element('div', { id: 'll-compare' });
    var shadow = host.attachShadow({ mode: 'open' });
    shadow.appendChild(element('style', { text: CSS }));

    var bar = element('div', { class: 'bar', role: 'region', 'aria-label': 'Design comparison' });
    bar.appendChild(element('div', { class: 'brand', text: 'Lightening Lives' }, []));
    bar.querySelector('.brand').appendChild(element('span', { text: 'design comparison' }));
    bar.appendChild(element('span', { class: 'rule', 'aria-hidden': 'true' }));

    // Design switch
    var designSelect = element('select', { id: 'll-design' });
    Object.keys(DESIGNS).forEach(function (id) {
      var option = element('option', { value: id, text: DESIGNS[id].label });
      if (id === designId) option.selected = true;
      designSelect.appendChild(option);
    });
    designSelect.addEventListener('change', function () {
      window.location.href = DESIGNS[designSelect.value].file;
    });
    bar.appendChild(element('label', { class: 'field design' }, [element('span', { class: 'name', text: 'Design' }), designSelect]));

    // Variations
    var more = element('div', { class: 'more', id: 'll-more' });
    var inputs = {};
    config.controls.forEach(function (control) {
      if (control.kind === 'select') {
        var select = element('select');
        control.options.forEach(function (option) {
          select.appendChild(element('option', { value: option.id, text: option.label }));
        });
        select.value = state[control.key];
        select.addEventListener('change', function () { choose(control.key, select.value); });
        inputs[control.key] = function () { select.value = state[control.key]; };
        more.appendChild(element('label', { class: 'field fluid' }, [element('span', { class: 'name', text: control.label }), select]));
        return;
      }
      var group = element('div', { class: 'swatches' });
      var radios = [];
      control.options.forEach(function (option) {
        var radio = element('input', { type: 'radio', name: 'll-' + control.key, value: option.id });
        radio.checked = option.id === state[control.key];
        radio.addEventListener('change', function () { if (radio.checked) choose(control.key, option.id); });
        radios.push(radio);
        var chip = element('i', { style: '--c:' + option.swatch, 'aria-hidden': 'true' });
        group.appendChild(element('label', { title: option.label }, [radio, chip, element('span', { class: 'sr', text: option.label })]));
      });
      inputs[control.key] = function () {
        radios.forEach(function (radio) { radio.checked = radio.value === state[control.key]; });
      };
      more.appendChild(element('div', { class: 'field', role: 'radiogroup', 'aria-label': control.label }, [
        element('span', { class: 'name', 'aria-hidden': 'true', text: control.label }),
        group,
      ]));
    });

    var reset = element('button', { type: 'button', text: 'Reset' });
    reset.addEventListener('click', function () {
      config.controls.forEach(function (control) { state[control.key] = control.options[0].id; });
      Object.keys(inputs).forEach(function (key) { inputs[key](); });
      apply();
      persist();
    });
    var copy = element('button', { type: 'button', text: 'Copy link' });
    copy.addEventListener('click', function () {
      var done = function () {
        copy.textContent = 'Link copied';
        window.setTimeout(function () { copy.textContent = 'Copy link'; }, 1600);
      };
      var fallback = function () {
        var field = element('textarea', { 'aria-hidden': 'true', style: 'position:fixed;opacity:0' });
        field.value = window.location.href;
        shadow.appendChild(field);
        field.select();
        try { document.execCommand('copy'); done(); } catch (error) { copy.textContent = 'Copy from address bar'; }
        field.remove();
      };
      if (navigator.clipboard && window.isSecureContext) navigator.clipboard.writeText(window.location.href).then(done, fallback);
      else fallback();
    });
    more.appendChild(element('div', { class: 'actions' }, [reset, copy]));
    bar.appendChild(more);

    // Small screens: the variations fold into a panel
    var toggle = element('button', { type: 'button', class: 'toggle', 'aria-expanded': 'false', 'aria-controls': 'll-more', text: 'Customise' });
    toggle.addEventListener('click', function () {
      var open = !more.classList.contains('open');
      more.classList.toggle('open', open);
      toggle.setAttribute('aria-expanded', String(open));
      toggle.textContent = open ? 'Done' : 'Customise';
    });
    bar.appendChild(toggle);

    var hide = element('button', { type: 'button', text: 'Hide', 'aria-label': 'Hide the comparison bar' });
    bar.appendChild(hide);
    shadow.appendChild(bar);

    var reopen = element('button', { type: 'button', class: 'reopen', text: 'Compare designs', hidden: '' });
    shadow.appendChild(reopen);

    function setHidden(hidden) {
      bar.hidden = hidden;
      reopen.hidden = !hidden;
      try { window.sessionStorage.setItem(STORE + 'hidden', hidden ? '1' : ''); } catch (error) { /* ignore */ }
      measure();
    }
    function measure() {
      root.style.setProperty('--compare-h', (bar.hidden ? 0 : bar.offsetHeight) + 'px');
    }
    hide.addEventListener('click', function () { setHidden(true); reopen.focus(); });
    reopen.addEventListener('click', function () { setHidden(false); designSelect.focus(); });

    function choose(key, id) {
      state[key] = id;
      apply();
      persist();
    }

    document.body.insertBefore(host, document.body.firstChild);
    var startHidden = false;
    try { startHidden = window.sessionStorage.getItem(STORE + 'hidden') === '1'; } catch (error) { /* ignore */ }
    setHidden(startHidden);
    if ('ResizeObserver' in window) new ResizeObserver(measure).observe(bar);
    else window.addEventListener('resize', measure);
  }

  if (document.body) build();
  else document.addEventListener('DOMContentLoaded', build, { once: true });
})();
